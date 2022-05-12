<template>
<div>
    <div class="form__container">  
      <form class="form__wrapper" action="">
        <div class="form__wrapper__header">
            <h2>Sign Up.</h2>
            <p>Create an account with us to enjoy more customers benefits.</p>
        </div>
        <!--app error-->
        <div v-if="error" class="app error">
            <p>{{ messageInfo }}</p>
        </div>
        <div v-if="success" class="success">
            <p>{{ messageInfo }}</p>
        </div>
        <!--username-->
        <div class="form__control">
            <label for="username"  
               :class="isUserInput ? 'label active':'label' ">
               Username
            </label>
            <input 
               type="text" 
               id="username" 
               autocomplete="off"
               @focus="isUserInput=true"
               @blur="isFocusedUser"
               v-model.trim="$v.username.$model">
            <div class="validate-error">
               <span v-if="$v.username.$error">
                    <p v-if="!$v.username.required">username is required</p>
                    <p v-if="!$v.username.minLength">username must have at least {{ $v.username.$params.minLength.min }} letters</p>
                    <p v-if="!$v.username.maxLength">username must have at most {{ $v.username.$params.maxLength.max }} letters</p>
               </span>
            </div>
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

        <!--confirm password-->
        <div class="form__control">
            <label for="confirm_pass"  
               :class="isConfPassInput ? 'label active':'label' ">
               <span>Confirm Password</span> 
            </label>
            <input 
               type="password" 
               id="confirm_pass" 
               @focus="isConfPassInput=true"
               @blur="isFocusedConfPass"
               v-model.trim="$v.confirmPass.$model">
            <div class="validate-error">
                <span v-if="$v.confirmPass.$error">
                   <p v-if="!$v.password.required">confirm password is required</p>
                   <p v-if="!$v.password.sameAsPassword">confirm password is not a match!</p>
                </span>
            </div>
        </div>

        <div class="log">
            <div class="button">
                <Loading v-if="loading"/>
                <button class="btn-class" @click.prevent="login()">Sign Up</button>
            </div>
        </div>
        <div class="login__link">
            <h4>Already a member?<router-link class="log__link" :to="{name:'Login'}">Sign in</router-link> </h4>
        </div>
    </form>
    </div>
</div>
</template>

<script>

import Loading from '../../molecules/Loading.vue'
import { required , minLength , maxLength  ,  email , sameAs }  from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
   name:"RegMoles",
   components:{
        Loading
   },
   data(){
        return{
            email:'',
            username:'',
            password:'',
            confirmPass:'',
            error: null,
            success: null,
            messageInfo: '',
            isEmailInput: null,
            isConfPassInput: null,
            isPasswordInput: null,
            isUserInput: null,
            loading: null,
            modalMessage:''
        }   
   },
    validations:{
        email:{
            required,
            email,
        },
        username:{
            required,
            minLength: minLength(3),
            maxLength: maxLength(10),
        },
        password:{
            required,
            minLength: minLength(8),
        },
        confirmPass:{
            required,
            sameAsPassword: sameAs('password')
        }
    },
    methods:{
        ...mapActions(['userSignUp']),
        isFocusedEmail(){
            if(this.email !== ''){
                this.isEmailInput = true
            }else{
                this.isEmailInput = false
            }
        },

        isFocusedUser(){
            if(this.username !== ''){
                this.isUserInput = true
            }else{
                this.isUserInput = false
            }
        },

        isFocusedPass(){
            if(this.password !== ''){
               this.isPasswordInput = true
            }else{
               this.isPasswordInput = false
            }
        },

        isFocusedConfPass(){
            if(this.confirmPass !== ''){
                this.isConfPassInput = true
            }else{
                this.isConfPassInput = false
            }
        },
        login(){
            this.$v.$touch()
            if(this.$v.$invalid !== true){
                const data = {
                   email: this.email,
                   name: this.username, 
                   password: this.password, 
                }
                this.loading = true;
                this.error = false;
                this.success = false;
                this.userSignUp(data).then( res => {
                    if(res.status === 200){
                        this.loading = false;
                        this.success = true;
                        this.messageInfo = res.data.data   
                    }else{
                        this.loading = false;
                        this.error = true;
                        this.messageInfo = res.data.error.message
                    }
                }).catch( err => {
                    this.loading = false;
                    this.error = true
                    this.messageInfo = 'Oops!! , Try again'
                    console.log(err);
                })
            }    
        },
      }
}

</script>

<style lang="scss">
.success{
    p{
        padding: 4px;
        background: rgb(205, 245, 205);
        width: 100%;
        color: #000;
        text-align: center;
        font-size: 12px;  
    }
}

.form__container{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   position: relative ;
   height: 90vh;

   .logo{
       position: absolute ;
       top: 0 ;
       left: 0 ;
       padding: 2px  14px ;
    }
}

.form__wrapper{
   width: 80% ;
   margin: 40px  auto ;
   min-width: 350px ;
    
    .log{
        padding: 15px 0px;
    }
    
    .login__link{
        padding: 5px 0px;

        h4{
           padding: 10px 0px;
           text-align: center;

            .log__link{
               color: #065143;
               text-decoration: none;
            }
        }

        p{
           padding: 5px 0px;
           text-align: center;

           .log__link{
              color: #065143;
              text-decoration: none;
            }
        }
    }

    .app{
        height: 33px;
        &.error{
          p{
            padding: 4px;
            background: #f48d82;
            width: 100%;
            color: #000;
            font-size: 12px;
          }
        }
    }

    &__header{
        padding: 5px 0px;

        h2{
            padding: 10px 0px;
        }

        p{
            padding: 5px 0px;
        }
    }

    .form__control{
        font-family: 'IM Fell English', serif;
        position: relative ;
        padding: 5px 0px ;

        .validate-error{
            height: 20px;

            p{
               color: red;
               font-weight: 300;
               font-size: 13px;
            }
        }

        &>input{
            outline: none; 
            padding: 4px 2rem;
            height: 45px;
            border: 1px solid #065143 ;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            background: none;
            position: relative;

            &:focus{    
                outline: none;
            }
        }

        & .label{
            outline: none;
            color: #506b66 ;
            position: absolute;
            bottom: 35px;
            transition: .5s ease;
            font-size: 14px;
            margin-left: 2rem;
            font-family: 'Poppins' , sans-serif;
        }

        .label.active{
            outline: none ;
            color: #506b66;
            position: absolute;
            bottom: 55px;
            font-size: 9px;
            transition: .5s ease;   
        }   
    }

    .button{
        position: relative ;
        display: flex;
        justify-content: center;
    }

    .btn-class{    
        padding: 6px ;
        border-radius: 5px ;
        border: 1px solid #065143 ;
        outline: none ;
        font-size: 16px;
        font-family: 'IM Fell English', serif;
        cursor: pointer ;
        right: 0;
        color: #065143 ;
        background: #eee;  
        width: 100% ;
        box-shadow: 0px 2px 45px 4px rgba(0 , 0 , 0 , .1);
    }
}

</style>