<template>
   <div class="main-form-wrapper">
         <div class="error-height">
            <AppError v-if="error" :message="errorMessage"/>
            <Alert v-if="success" :message="successMessage"/>
         </div>
         <form  enctype="multipart/form-data">
            <div class="form-wrapper upload">
               <div class="form-control">
                  <div class="click-able">
                        <font-awesome-icon  icon="upload"/>
                        <p>Choose Photo Product</p>
                  </div>
                  <h2>Product Image</h2>
                  <p>format .jpg .png .jpeg. the image should not be more than 300 * 300px  </p>
                  <input type="file" autocomplete="on">
               </div>
            </div>
            <div class="form-wrapper">
               <div class="form-control">
                     <label for="">Product Name</label>
                     <input type="text" autocomplete="on">
               </div>
               <div class="form-control">
                     <label for="">Product Description</label>
                     <textarea name="" id="" cols="30" rows="10"></textarea>
               </div>
               <div class="form-control">
                     <label for="">Price</label>
                     <input type="text" autocomplete="on">
               </div>
               <div class="form-control">
                     <label for="">Category</label>
                     <input type="text" autocomplete="on">
               </div>
               <div class="form-control">
                     <label for="">Rating</label>
                     <input type="text" autocomplete="on">
               </div>
               <Button  :value="buttonVariant"/>
            </div>
         </form>
   </div>
</template>
<script>

import AppError from '../molecules/ErrorMolecule.vue'
import Alert from '../molecules/Alert.vue'
import Button from '../molecules/Button.vue'

export default {
   name:"ProductForm",
   components:{
       AppError,Alert,Button
   },
   data(){
      return{
         errorMessage:'invalid username and password!',
         successMessage:'Product created successfully , hurray.',
         error: false,
         success: false,
         buttonVariant:{
            value:'Submit',
            loading: false,
         }
      }
   }
}

</script>

<style lang="scss" scoped>
   .main-form-wrapper{
      padding: 30px 10px;
      max-width: 700px;
      margin:auto;
      
      .error-height{
         height: 50px;
      }

      form{
         display: flex;
         flex-direction: column;
         justify-content: center;
         gap: 2px;

         @media (min-width: 600px) {
            flex-direction: row;
         }

         .upload{
            width: 220px;
            padding: 25px 2px;
         }

         .form-wrapper{
             margin: 4px;
         }

         .form-control{
            padding: 6px 1px;

            label{
               padding: 10px 0px;
            }

            p{
               font-size: 12px;
            }

            input , textarea{
               border: none;
               border-radius: 5px;
               padding: 8px 15px;
               outline: none;
               min-width: 100%;
            }

            input[type="file"]{
               display: none;
            }

            .click-able{
               width: 200px;
               height: 200px;
               border-radius: 15px ;
               border: 2px dashed #038069;
               cursor: pointer ;
               background: #eff5dc;
               display: flex;
               justify-content: center ;
               align-items: center;
               flex-direction: column;
               color: #038069;

               p{
                  color: #038069;
                  font-weight: 300;
                  padding: 5px;
                  font-size: 16px;
               }
            }
         }
      }
   }
</style>