<template>
<div>
    <div class="form__container">  
      <form class="form__wrapper" action="">
        <div class="form__wrapper__header">
            <h2>Log in.</h2>
            <p>Login with your data that you entered during your registration</p>
        </div>
        <!--app error-->
        <div class="app error">
            <p v-if="error">{{ messageInfo }}</p>
        </div>

        <!--email-->
        <div class="form__control">
            <label for="email"  
               :class="isEmailInput ? 'label active':'label' ">
               Email
            </label>
            <input 
               type="text" 
               id="email" 
               autocomplete="off"
               @focus="isEmailInput=true"
               @blur="isFocusedEmail"
               v-model.trim="$v.email.$model" 
            >
            <div class="validate-error">
                <span v-if="$v.email.$error">
                    <p v-if="!$v.email.required">email is required</p> 
                    <p v-if="!$v.email.email">email is not valid</p>
                </span>
            </div>
        </div>
        <!--password-->
        <div class="form__control">
            <label for="password"  
               :class="isPasswordInput ? 'label active':'label' ">
               Password
            </label>
            <input 
               type="password" 
               id="password" 
               @focus="isPasswordInput=true"
               @blur="isFocusedPass"
               v-model.trim="$v.password.$model">
            <div class="validate-error">
               <span v-if="$v.password.$error">
                    <p 
                        v-if="!$v.password.required">
                        password is required
                    </p>
               </span>
            </div>
        </div>

        <div class="log">
            <div class="button">
                <Loading v-if="loading"/>
                <button class="btn-class" @click.prevent="login()">Log In</button>
            </div>
        </div>
        <div class="login__link">
            <h4>Don't have an account? <router-link class="log__link" :to="{name:'Register'}">Sign up</router-link> </h4>
            <p><router-link class="log__link" :to="{name:'ForgotPassword'}">Forgot Password</router-link> </p>
        </div>
    </form>
   </div>
</div>
</template>

<script>

import Loading from '../../molecules/Loading.vue'
import { required , email }  from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import {convertStr} from '../../../Helpers/helper'

export default {
   name:"LoginMoles",
   components:{
       Loading
   },
   data(){
        return{
            email:'',
            password:'',
            error: null,
            success: null,
            isEmailInput: null,
            isPasswordInput:null,
            loading:null,
            modalMessage:'',
            messageInfo:''
        }   
    },
    validations:{
        email:{
            required,
            email,
        },
        password:{
            required,
        },
    },
    methods:{
        ...mapActions(['userLogin']),
        isFocusedEmail(){
            if(this.email !== ''){
                this.isEmailInput = true
            }else{
                this.isEmailInput = false
            }
        },

        isFocusedPass(){
            if(this.password !== ''){
               this.isPasswordInput = true
            }else{
               this.isPasswordInput = false
            }
        },
        login(){
            this.$v.$touch()
            if(this.$v.$invalid !== true){
                const data = {
                   email: convertStr(this.email),
                   password: this.password, 
                }
                this.error = false
                this.loading = true;
                this.userLogin(data).then( res => {
                    if(res.status === 200){
                        this.loading = false;
                        if(this.$store.state.auth.role === 'ADMIN'){
                            this.$router.push('/dashboard');
                        }this.$router.push({name:'MarketPlace'});
                    }else{
                       this.loading = false;
                       this.error = true;
                       this.messageInfo = res.data.error.message
                     }
                }).catch(err => {
                    this.loading = false;
                    this.error = true
                    this.messageInfo = 'Oops!! , Try again'
                    console.log(err);
                });
            }    
        },
    }
}

</script>
