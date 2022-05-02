<template>

<div>
   <div class="form__container">  
      <Logo class="logo"/>
      <form class="form__wrapper" action="">
        <div class="form__wrapper__header">
            <h2>Forgot Password.</h2>
            <p>Submit your email, if valid you will receive a mail containing your password.</p>
        </div>
        <!--app error-->
        <div class="app-error">
            <p v-if="error">invalid user!</p>
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

        <div class="log">
            <div class="button">
                <Loading v-if="loading"/>
                <button class="btn-class" @click.prevent="login()">Submit</button>
            </div>
        </div>
        <div class="login__link">
            <h4>Already a member? <router-link class="log__link" :to="{name:'Login'}">Sign In</router-link> </h4>
        </div>
    </form>
   </div>
</div>
</template>

<script>

import Logo from '../atoms/AppLogo.vue'
import Loading from '../../molecules/Loading.vue'
import { required ,  email }  from 'vuelidate/lib/validators'


export default {
   name:"AuthForgotMoles",
   components:{
       Logo , Loading
   },
   data(){
        return{
            email:'',
            error: null,
            isEmailInput: null,
            isPasswordInput:null,
            loading:null,
            modalMessage:''
        }   
    },
    validations:{
        email:{
            required,
            email,
        },
    },
    methods:{
        isFocusedEmail(){
            if(this.email !== ''){
                this.isEmailInput = true
            }else{
                this.isEmailInput = false
            }
        },

        login(){
            this.$v.$touch()
            if(this.$v.$invalid !== true){
               //
               const data = {
                   email: this.email,
                   password: this.password, 
                }
                this.loading = true;
                setTimeout( () => {
                    this.stopLoader()
                } , 5000 )
                console.log(data);
            }    
        },
      }
}

</script>
