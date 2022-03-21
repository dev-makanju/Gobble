<template>
<div>
    <Modal :message="modalMessage" @dissable-overlay="toggleOverlay" v-if="isModalActive"/>
    <div class="checkout">
        <div class="checkout__details">
             <div class="checkout__header">
                  <div class="checks">
                      <h3><AtomText :tag="'h4'" :content="'PAYMENT DETAILS'" /></h3><br>
                      <h2>NgN {{ $store.state.price }}.00</h2>
                  </div>
                  <div class="checks">
                      <img  width="40" src="@/assets/mobile/visa.png" alt="">
                  </div>
             </div>
             <div class="checkout__head">
                <form  class="form">
                    <div class="form__control">
                        <label for="card-number"  
                                :class="isCardInput ? 'label active':'label' ">
                                Card Number
                        </label>
                        <input 
                            type="text" 
                            id="card-number" 
                            @focus="isCardInput = true "
                            @blur="isFocused"
                            v-model.trim="cardNumber" 
                        >
                    </div>
                    <div class="form__control">
                        <label for="card-name" 
                                :class="isNameInput ? 'label active':'label' ">
                                Card Name
                        </label>
                        <input type="text"
                               id="card-name"
                               @focus="isNameInput = true"
                               @blur="isFocusedName"
                               v-model.trim="cardName" 
                            >
                    </div>
                    <div class="numbers">
                         <div class="number__flex">
                            <div class="form__control">
                             <label for="ex-date" 
                                    :class="isDateInput ? 'label active':'label' ">
                                    04/23
                                </label>
                             <input type=""
                               id="ex-date"
                               @focus="isDateInput = true"
                               @blur="isFocusedDate"
                               v-model.trim="cardExpDate" 
                            >   
                         </div>
                        </div>
                        <div class="number__flex">
                            <div class="form__control">
                                <label for="cvv" 
                                    :class="isCvvInput? 'label active':'label' ">
                                    Cvv
                                </label>
                                <input type="password"
                                id="cvv"
                                @focus="isCvvInput = true"
                                @blur="isFocusedCvv"
                                v-model.trim="cvvInput" 
                                >
                           </div>
                        </div>
                    </div>
                    <div class="button">
                        <Loading v-if="loading"/>
                        <button class="btn-class" @click.prevent="Pay()">Pay</button>
                    </div>
                </form>
             </div>
        </div>
    </div>
</div>
</template>

<script>

import AtomText from '../components/atoms/AtomText.vue'
import Loading from '../components/molecules/Loading.vue'
import Modal from '../components/molecules/overlay.vue'

export default {
    name:"Checkout",
    components:{
        AtomText , Loading , Modal
    },
    data(){
        return{
            isCardInput: null,
            isDateInput:null,
            isNameInput:null,
            isCvvInput:null,
            cardNumber:'',
            cardName:'',
            cvvInput:'',
            cardExpDate:'',
            loading:null,
            isModalActive: null,
            modalMessage:''
        }   
    },
    methods:{
        isFocusedDate(){
            if(this.cardExpDate !== ''){
                this.isDateInput = true
            }else{
                this.isDateInput = false
            }
        },
        isFocused(){
            if(this.cardNumber !== ''){
                this.isCardInput = true
            }else{
                this.isCardInput = false
            }
        },
        isFocusedName(){
            if(this.cardName !== ''){
                this.isNameInput = true;
            }else{
                this.isNameInput = false;
            }
        },
        isFocusedCvv(){
            if(this.cvvInput !== ''){
                this.isCvvInput = true ;
            }else{
                this.isCvvInput = false ;
            }
        },
        Pay(){
            const paymentDetails = {
                cardNumber: this.cardNumber,
                cardName: this.cardName, 
                cvvInput: this.cvvInput,
                cardEx: this.cardExpDate
            }
            this.loading = true;
            setTimeout( () => {
                this.stopLoader()
            } , 5000 )
            console.log(paymentDetails);
        },
        stopLoader(){
            this.loading = false
            this.isModalActive = true
            this.modalMessage = "Payment Successfull"
        },
        toggleOverlay(){
           this.isModalActive = !this.isModalActive;
           this.$router.push('/')
        }

    }
}
</script>

<style lang="scss">
    .checkout{
        width: 400px ;
        margin: 40px  auto ;
        box-shadow: 0px 2px 45px 4px rgba(0 , 0 , 0 , .1);

        .checkout__header{
            display: flex ;
            flex-direction: row ;
            justify-content: space-between;
            padding: 30px 20px;
        }

        .checkout__head{
            padding: 0px 20px;
        }

        .form__control{
            border-radius: 5px;
            font-family: 'IM Fell English', serif;
            position: relative ;
            height: 40px;

            & input{
                outline: none ; 
                padding: 4px 2rem;
                height: 40px ;
                border: 1px solid #065143 ;
                font-family: sans-serif;
                font-size: 14px;
            }

            & .label{
                outline: none ;
                padding: 4px 2rem ;
                color: #506b66;
                position: absolute ;
                bottom: 3px;
                transition: .5s ease;
                font-size: 14px;
            }

            .label.active{
                outline: none ;
                padding: 0px  2rem ;
                color: #506b66;
                position: absolute ;
                bottom: 25px;
                transform: scale(0.6);
                transition: .5s ease;   
            }
        }

        .form{
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 20px 0px;
        }

        .numbers{
            display: flex;
            gap: 12px;
            flex-direction: row;

            .number__flex{
                flex: 1;
                width: 50%;
            }
        }

        .button{
            position: relative ;
            display: flex;
            justify-content: center;
        }

        .btn-class{    
            padding: 7px ;
            border-radius: 17px ;
            border: 1px solid #065143 ;
            outline: none ;
            font-size: 16px;
            font-family: 'IM Fell English', serif;
            cursor: pointer ;
            right: 0;
            color: #065143 ;  
            width: 100%;
        }
    }
</style>