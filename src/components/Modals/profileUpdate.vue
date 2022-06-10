<template>
   <div  class="modal">
      <div class="modal-content">
         <font-awesome-icon @click="$emit('close')" style="float:right;padding:5px; border: 1px solid #000; border-radius:4px; cursor:pointer; width: 40px;" icon="times"/>
         <form @submit.prevent="updateUserProfile">
            <div class="flex-center">
               <div class="image-wrapper">
                  <div class="image-picture">
                     <img class="image-picture" 
                        src="@/assets/mobile/3898372_user_people_man_add_icon.png" 
                        onerror="this.style.display='none'"
                     >
                  </div>
                  <div class="form-control image-holder">
                     <label for="upload">
                        <font-awesome-icon icon="camera-alt" style="font-size: 20px;"/>
                     </label>
                     <input type="file" id="upload" :class="['error',error?'add':'']" @change="onUpload" autocomplete="off">
                  </div>
               </div>
            </div>
            <div class="error">
               {{ message }}
            </div>
            <div class="form-control">
               <label for="">Username</label>
               <input type="text"  v-model.trim="name" autocomplete="off">
            </div>
            <div class="form-control">
               <label for="">Email</label>
               <input type="text"  v-model.trim="Email" autocomplete="off">
            </div>
            <div class="form-control">
               <label for="">Address</label>
               <input type="text" id="input" v-model.trim="address" autocomplete="off">
            </div>
            <button class="button-btn">Update Profile</button>
         </form>
      </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
   props:["modalMessage","Active"],
   data(){
      return {
        image:"",
        name: '',
        Email: "",
        address:"",
        imageUrl: "",
        error: null,
        message: '',
      }
   },
   mounted(){
      this.image = this.$store.state.auth.user.image
      this.name =  this.$store.state.auth.user.name
      this.Email = this.$store.state.auth.user.email
      this.address = this.$store.state.auth.user.address
   },
   methods:{
      ...mapActions(['updateUser']),
      closeModal(){
         this.$emit("close-modal");
      },
      onUpload(e){
         console.log(e.target.files[0]);
      },
      updateUserProfile(){
         const data = {  
            name: this.name, 
            email : this.Email, 
            Adress: this.address 
         }
         this.updateUser(data).then(res => {
            this.error = false;
            if(res.status === 204){
               console.log(res)
               this.$emit('close');
            }else{
               this.error = true;
               this.message = 'Oops!,update failed'
            }
         }).catch(err => {
            this.error = true;
            this.message = 'Oops!!, update failed'
            err
         })
      }, 
   }        
}

</script>

<style lang="scss" scoped>

.error{
   text-align: center;
}

.image-picture:hover ~ .image-holder label{      
   display: block;
   color: #eee;

   .camera-alt{
      display: block;
   }
}

.flex-center{
   display: flex;
   width: 100%;
   justify-content: center;

   .image-wrapper{
      position: relative;
   }
    
   .image-picture{
      height: 200px;
      width: 200px;
      border: 1px solid rgb(180, 175, 175);
      border-radius: 50%;
      cursor: pointer;
   }

   .image-holder{
      
      label{
         position: absolute;
         top: 0;
         height: 200px;
         width: 200px;
         background: rgba(0, 0, 0, 0.475);
         border: 1px solid rgb(180, 175, 175);
         border-radius: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
         color: #eee;
         display: none;
         cursor: pointer;
      }
   }
}

.button-btn{
      padding: 7px ;
      border-radius: 17px ;
      border: 1px solid #065143 ;
      outline: none ;
      font-size: 16px;
      font-family: 'IM Fell English', serif;
      cursor: pointer;
      right: 0;
      color: #065143 ;  
      transition: .2s;
      position: relative;
   
      &:active{
         transform: scale(1.1);
         /* Scaling button to 0.98 to its original size */
         box-shadow: 3px 2px 15px 7px rgba(0, 0, 0, .2);
         /* Lowering the shadow */
      }
}

form{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-self: center;
}

.btn-click-wrapper{
   display: flex;
   justify-content: space-between;
}

.modal{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2222;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0 , 0 , 0 , .7);

    .modal-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 8px;
        min-width: 300px;
        padding: 20px 20px;
        background: #eee;

        .form-control{
            padding: 10px 0px;

            &>input{
              outline: none;

              &[type="file"]{
                 display: none;
              }
            }
        }
    }
}

</style>