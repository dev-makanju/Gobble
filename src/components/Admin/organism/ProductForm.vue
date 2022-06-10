<template>
   <div class="main-form-wrapper">
         <div class="error-height">
            <AppError 
               @close="notifyError()"
               v-if="error" 
               :message="errorMessage"/>
            <Alert 
               @close="notifyAlert()"
               v-if="success" 
               :message="successMessage"/>
         </div>
         <form enctype="multipart/form-data">
            <div class="form-wrapper upload">
               <div class="form-control">
                  <div class="click-able" 
                  @dragenter="OnDragEnter"
                  @dragleave="OnDragLeave"
                  @dragover.prevent
                  @drop="onDrop"
                  :class="{ dragging: isDragging }">
                     <font-awesome-icon  icon="upload"/>
                     <p>Drag Photo Here</p>
                     <p>Or</p>
                     <label for="file" v-if=" images == '' " class="submit-btn">Select a file</label>
                     <div v-if="images !== ''" @click="toggleImagePreview(images)" class="submit-btn">Preview</div>
                     <input type="file" 
                        id="file" 
                        @change="onInputChange" 
                     >
                  </div>
                  <div>
                     <span style="margin-top: 5px;" v-text="files.name"></span><br/>
                     <span style="margin-top: 5px;" v-text="files.size"></span>
                  </div>
                  <h2 style="margin-top: 10px;">Product Image</h2>
                  <p style="margin-top: 10px;">format Allowed .jpg .png .jpeg. </p>
               </div>
            </div>
            <div class="form-wrapper">
               <div class="form-control">
                     <label for="">Product Name</label>
                     <input type="text" autocomplete="on" v-model.trim="name">
               </div>
               <div class="form-control">
                  <label for="">Product Description</label>
                  <textarea name="" id="" 
                     cols="30" 
                     v-model.trim="description" 
                     rows="10"
                  ></textarea>
               </div>
               <div class="form-control">
                  <label for="">Price</label>
                  <input 
                     type="number"
                     min="0" 
                     autocomplete="on" 
                     v-model.number="price"
                  >
               </div>
               <div class="form-control">
                  <label for="">Category</label>
                  <CustomSelect @input="selectedValue" :options="options"/>
               </div>
               <div  class="button">
                  <div v-if="!isEditing">
                     <button @click.prevent="createProductItem">
                        <Loader v-if="loading"/>
                        <div class="button__text">
                           Create Product
                        </div>
                     </button>
                  </div>

                  <!--when user want to edit--->
                  <div v-else>
                     <button @click.prevent="updateProductItem">
                        <Loader v-if="loading"/>
                        <div class="button__text">
                           Update Product
                        </div>
                     </button>
                  </div>
               </div>
            </div>
         </form>
   </div>
</template>
<script>

import AppError from '../molecules/ErrorMolecule.vue'
import Alert from '../molecules/Alert.vue'
import Loader from '../../molecules/Loading.vue'
import CustomSelect from '../Customs/CustomSelect.vue'
import { mapActions } from 'vuex'
//import Button from '../molecules/Button.vue'

export default {
   name:"ProductForm",
   components:{
      AppError,
      Alert,
      Loader,
      CustomSelect
   },
   data(){
      return{
         options: ['breakfast' , 'launch' , 'dinner'],
         errorMessage: '',
         successMessage: '',
         isDragging: false,
         name: '',
         description: '',
         price: 0,
         category: 'breakfast',
         rating: 0,
         dragCount:0,
         files: '',//we are sending the file object to the server  
         images: '', // save image in base 64 for previewing;
         error: false,
         success: false,
         loading: null,
         isEditing: null,
      }
   },
   mounted(){
      if(this.$route.name === 'EditProduct'){
         this.isEditing = true;
         this.getSingleProductById()
      }else if(this.$route.name === 'CreateProduct'){
         this.isEditing = false
      }
   },
   methods:{
      ...mapActions(['createProduct' , 'getProductById' , 'editSingleProduct']),
      OnDragEnter(e){
         e.preventDefault();
         this.dragCount++;
         this.isDragging = true;
      },
      OnDragLeave(e){
         e.preventDefault()
         this.dragCount--;
         if(this.dragCount <= 0)
            this.isDragging = false
      },
      onDrop(e){
         e.preventDefault()
         e.stopPropagation()
         this.isDragging = false
         const file = e.dataTransfer.files[0]
         this.addImage(file)
      },
      addImage(file){
         if(!file.type.match('image.*')){
            this.error = true;
            this.errorMessage = `${file.name} is not an image.`
            return;   
         }
         this.files = file.name;
         const reader = new FileReader()
         reader.onload = (e) => {
            this.images = e.target.result
         };   
         reader.readAsDataURL(file);
      },
      onInputChange(e){
         const file = e.target.files[0];
         this.addImage(file);
      },
      notifyError(){
         this.error = !this.error
      },
      notifyAlert(){
         this.success = !this.success
      },
      toggleImagePreview(images){
         this.$emit('open' , images);
      },
      selectedValue(value){
         this.category = value
      },
      createProductItem(){
         this.success = false
         if(this.files == ''){
            this.error = true;
            this.errorMessage = 'Oops!, Kindly select an image'  
         }else if(this.name == '' || this.description == ''|| this.price == '' || this.category == ''){
            this.error = true;
            this.errorMessage = 'Input fields are required!'
         }else{
            this.error = false;
            const data = {
               averageReview: this.rating,
               category: this.category,
               description: this.description,
               image: this.files,
               name: this.name,
               price: this.price,
            }
            this.loading = true
            this.createProduct(data).then(res => {
               if(res.status){
                  console.log(res)
                  this.loading = false
                  this.success = true
                  this.successMessage = 'Product created successfully'
                  this.clear()
                  return;
               }this.loading = false
                this.error = true
                this.errorMessage = res.data.error.message
            }).catch(err => {
               this.loading = false;
               this.error = true;
               this.errorMessage = 'Product cannot be created!'
               console.log(err)
            })
         }
      },
      getSingleProductById(){
         this.error = false;
         const id = this.$route.params.id
         this.getProductById(id).then( res => {
            if(res.status === 200){
               this.name = res.data.data.name
               this.description = res.data.data.description
               this.price = res.data.data.price
               this.category = res.data.data.category
               this.rating = res.data.data.averageReview
               this.files=  res.data.data.image
            }
         }).catch(err => {
            this.error = true;
            this.errorMessage = 'Oops, bad network!'
            err
         });
      },
      updateProductItem(){
         this.success = false
         if(this.files == ''){
            this.error = true;
            this.errorMessage = 'Oops!, Kindly select an image'  
         }else if(this.name == '' || this.description == ''|| this.price == '' || this.category == ''){
            this.error = true;
            this.errorMessage = 'Input fields are required!'
         }else{
            this.error = false;
            const id = this.$route.params.id
            const product = {
               averageReview: this.rating,
               category: this.category,
               description: this.description,
               image: this.files,
               name: this.name,
               price: this.price,
            }
            const data = {
               id: id,
               data: product
            }
            this.loading = true
            this.editSingleProduct(data).then(res => {
               if(res.status){
                  console.log(res)
                  this.loading = false
                  this.success = true
                  this.successMessage = 'Product updated successfully'
                  this.$router.push('/dashboard/product')
                  return;
               }this.loading = false
                this.error = true
                this.errorMessage = res.data.error.message
            }).catch(err => {
               this.loading = false;
               this.error = true;
               this.errorMessage = 'Product cannot be updated!'
               console.log(err)
            })
         }
      },
      clear(){
         this.rating = ''
         this.category = ''
         this.description = ''
         this.files = ''
         this.name = ''
         this.price = ''
      }
   },
   watch:{
      
   }
}

</script>

<style lang="scss" scoped>
   .button{
      position: relative;
      float: right;
      margin-top: 10px;

      button{
         background: #eee;
         padding: 10px 20px;
         border: 1px solid #065143;
         color: #038069 ;
         border-radius: 5px;
         outline: none;
         display: flex;
         justify-content: center;
         align-items: center;
         align-content: center;
         cursor: pointer;
      }
   }
   .submit-btn{
      padding: 10px 20px;
      width: 100px;
      text-align: center;
      font-size: 14px;
      border: none;
      color: #eee;
      background: #038069;
      border-radius: 3px;
      cursor: pointer;
   }

   .main-form-wrapper{
      padding: 30px 10px;
      max-width: 700px;
      margin:auto;
      
      .error-height{
         //height: 50px;
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

               &.dragging{
                  background: #e6f5b4;
                  color: #065849;
               }

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