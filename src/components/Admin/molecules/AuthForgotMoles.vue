<template>
    <div>
        <div class="form__container">  
        <form class="form__wrapper" action="">
            <div class="form__wrapper__header">
                <h2>Forgot Password.</h2>
                <p>Submit your email, if valid you will receive a mail containing your password.</p>
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

import Loading from '../../molecules/Loading.vue'
import { required ,  email }  from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'


export default {
   name:"AuthForgotMoles",
   components:{
       Loading
   },
   data(){
        return{
            email:'',
            error: null,
            success: null,
            isEmailInput: null,
            errorInfo:'',
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
        ...mapActions(['forgotPassword']),
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
                //get all user info
                const data = {
                   email: this.email,
                }
                this.loading = true;
                this.forgotPassword(data).then(res => {
                    this.errorInfo = ''
                    this.success = false ;
                    this.error = false;

                    if(res.status === 200){
                        this.loading = false;
                        this.success = true;
                        this.errorInfo = res.data.data
                        setInterval( () => {
                            this.success = false ;
                            this.errorInfo = '';
                        }, 7000);
                    }else{
                        this.loading = false;
                        this.error = true;
                        this.errorInfo = res.data.error.message
                    }
                    setInterval( () => {
                        this.error = false;
                        this.errorInfo = ''
                    }, 7000);
                }).catch(err => {
                    this.loading = false;
                    this.error = true;
                    this.errorInfo = 'Oops!! , Try again.'
                    setInterval( () => {
                        this.error = false ;
                        this.errorInfo = ''
                    }, 5000);
                    console.log(err);
                })
            }    
        },
    }
}

</script>
