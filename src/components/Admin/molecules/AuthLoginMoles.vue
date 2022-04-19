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
        <div class="app-error">
            <p v-if="error">invalid user!</p>
        </div>

        <!--email-->
        <div class="form__control">
            <label for="card-number"  
               :class="isEmailInput ? 'label active':'label' ">
               Email
            </label>
            <input 
               type="text" 
               id="card-number" 
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
            <label for="card-number"  
               :class="isPasswordInput ? 'label active':'label' ">
               Password
            </label>
            <input 
               type="password" 
               id="card-number" 
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
            <p><router-link class="log__link" :to="{name:'Register'}">Forgot Password</router-link> </p>
        </div>
    </form>
   </div>
</div>
</template>

<script>

import Logo from '../atoms/AppLogo.vue'
import Loading from '../../molecules/Loading.vue'
import { required , minLength  ,  email }  from 'vuelidate/lib/validators'


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
        password:{
            required,
            minLength: minLength(8),
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

<style lang="scss">

.form__container{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 100vh ;
   position: relative ;

   .logo{
       position: absolute ;
       top: 0 ;
       left: 0 ;
       padding: 2px  15px ;
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

    .app-error{
         height: 30px;

         p{
             padding: 8px;
             background: #e74e3c;
             border-radius: 5px;
             width: 100%;
             color: #eee;
             text-align: center ;
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
        padding: 10px 0px ;

        .validate-error{
            height: 20px;

            p{
               color: red;
               font-weight: 300;
            }
        }

        &>input{
            outline: none; 
            padding: 4px 2rem;
            height: 45px;
            border: 1px solid #065143 ;
            font-family: sans-serif;
            font-size: 14px;
            background: none;
            position: relative;
        }

        & .label{
            outline: none;
            padding: 4px 2rem ;
            color: #506b66 ;
            position: absolute;
            bottom: 40px;
            transition: .5s ease;
            font-size: 14px;
        }

        .label.active{
            outline: none ;
            padding: 0px  2rem ;
            color: #506b66;
            position: absolute ;
            bottom: 60px;
            transform: scale(0.7);
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