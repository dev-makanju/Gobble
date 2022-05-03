<template>
<div>
    <div class="form__container">  
      <Logo class="logo"/>
      <form class="form__wrapper" action="">
        <div class="form__wrapper__header">
            <h2>Log in.</h2>
            <p>Login with your data that you entered during your registration</p>
        </div>
        <!--app error-->
        <div :class="['app',error ?'error': 'success']">
            <p v-if="error">{{ errorInfo }}</p>
            <p v-if="success">{{ errorInfo }}</p>
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
                    <p
                        v-if="!$v.password.minLength">
                        password must have at least {{ $v.password.$params.minLength.min }} numbers
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

import Logo from '../atoms/AppLogo.vue'
import Loading from '../../molecules/Loading.vue'
import { required , minLength  ,  email }  from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
   name:"LoginMoles",
   components:{
       Logo , Loading
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
            errorInfo:''
        }   
    },
    validations:{
        email:{
            required,
            email,
        },
        password:{
            required,
            minLength: minLength(8),
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
                   email: this.email,
                   password: this.password, 
                }
                this.loading = true;
                this.userLogin(data).then( res => {
                    if(res.status === 200){
                        this.loading = false
                        if(res.data.user.role === 'Admin'){
                           this.$router.push('/dashboard');
                        }
                        //want to use switch case here ...
                    }this.loading = false;
                    this.error = true;
                    this.errorInfo = res.data.error.message
                    setInterval( () => {
                        this.error = false
                        this.errorInfo = ''//clear
                    } , 7000)
                     
                }).catch(err => {
                    this.loading = false
                    this.error = true;
                    this.errorInfo = 'Oops , try again'
                    this.errorInfo = ''//clear
                    setInterval( () => {
                        this.error = false
                    } , 7000)
                    console.log(err)
                });
            }    
        },
      }
}

</script>
