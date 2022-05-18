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
                        <label for="file" v-if="!images.length" class="submit-btn">Select a file</label>
                        <div v-if="images.length" @click="toggleImagePreview(images)" class="submit-btn">Preview</div>
                        <input type="file" id="file" @change="onInputChange" multiple>
                  </div>
                  <div v-for="(image , index) in images" :key="index">
                     <span style="margin-top: 5px;" v-text="files[index].name"></span><br/>
                     <span style="margin-top: 5px;" v-text="files[index].size"></span>
                  </div>
                  <h2 style="margin-top: 10px;">Product Image</h2>
                  <p style="margin-top: 10px;">format .jpg .png .jpeg. the image should not be more than 300 * 300px  </p>
               </div>
            </div>
            <div class="form-wrapper">
               <div class="form-control">
                     <label for="">Product Name</label>
                     <input type="text" autocomplete="on" v-model.trim="name">
               </div>
               <div class="form-control">
                     <label for="">Product Description</label>
                     <textarea name="" id="" cols="30" v-model.trim="description" rows="10"></textarea>
               </div>
               <div class="form-control">
                     <label for="">Price</label>
                     <input type="text" autocomplete="on" v-model.trim="price">
               </div>
               <div class="form-control">
                     <label for="">Category</label>
                     <input type="text" autocomplete="on" v-model.trim="category">
               </div>
               <div class="form-control">
                     <label for="">Rating</label>
                     <input type="text" autocomplete="on" v-model.trim="rating">
               </div>
               <div  class="button">
                  <button @click.prevent="createProductItem">
                     <Loader v-if="loading"/>
                     <div class="button__text">
                        Create Product
                     </div>
                  </button>
               </div>
            </div>
         </form>
   </div>
</template>
<script>

import AppError from '../molecules/ErrorMolecule.vue'
import Alert from '../molecules/Alert.vue'
import Loader from '../../molecules/Loading.vue'
import { mapActions } from 'vuex'
//import Button from '../molecules/Button.vue'

export default {
   name:"ProductForm",
   components:{
       AppError,
       Alert,Loader
   },
   data(){
      return{
         errorMessage:'',
         successMessage:'',
         isDragging: false,
         name:'',
         description:'',
         price:'',
         category: '',
         rating:'',
         dragCount: 0,
         files:[],//we are sending the file object to the server  
         images:[], // save image in base 64 for previewing;
         error: false,
         success: false,
         loading: null,
      }
   },
   methods:{
      ...mapActions(['createProduct']),
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
         e.stopPropagation();

         this.isDragging = false;
         const files = e.dataTransfer.files;
         Array.from(files).forEach( file => this.addImage(file));
      },
      addImage(file){
            if(!file.type.match('image.*'))
               this.error = true;
               this.errorMessage = `${file.name} is not an image.`

            this.files.push(file);//image has been been save in side for sending to server
            //now lets convert it to base 64 for image preview

            //const img = new Image(),
            const reader = new FileReader()
            reader.onload = (e) => this.images.push(e.target.result)   

            reader.readAsDataURL(file)
      },
      onInputChange(e){
         const files = e.target.files;
         Array.from(files).forEach( file => this.addImage(file));
      },
      notifyError(){
         this.error = !this.error
      },
      notifyAlert(){
         this.success = !this.success
      },
      toggleImagePreview(images){
         console.log(images)
         this.$emit('open' , images);
      },
      createProductItem(){
         if(this.name == '' ||
            this.description == ''||
            this.price == '' || 
            this.category == '' ||
            this.rating == ''){
            if(this.files.length === 0){
               this.error = true;
               this.errorMessage = 'Oops!, Kindly select an image.'
               return
            }   
            this.error = true;
            this.errorMessage = 'Oops!, input fields are required.'
         }else{
            const data = {
               name: this.name,
               description: this.description,
               price: this.price,
               category: this.category,
               image: this.files,
               rating: this.rating,
            }
            this.loading = true
            this.createProduct(data).then(res => {
            if(res.status === 201)
               console.log(res)
               this.loading = false
               this.success = true
               this.successMessage = res.data.message
            this.loading = false
            this.error = true
            this.errorMessage = res.data.error.message
            
            }).catch(err => {
               this.loading = false;
               this.error = true;
               this.errorMessage = 'Product cannot be created!'
               console.log(err)
            })
         }
      }
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