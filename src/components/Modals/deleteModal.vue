<template>
   <div class="modal">
      <div class="modal-content">
         <p>{{ this.modalMessage }}</p>
         <div class="btn-click-wrapper">
            <button :disabled="Active" class="btn-click" @click="$emit('delete-modal')">Yes</button>
            <button class="btn-click" @click="closeModal">No</button>
         </div>
      </div>
    </div>
</template>

<script>

export default {
   props:["modalMessage","Active"],
   methods:{
      closeModal(){
         this.$emit("close-modal");
      }
   }        
}

</script>

<style lang="scss" scoped>

.btn-click-wrapper{
   display: flex;
   justify-content: space-between;
}

.modal{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2222;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0 , 0 , 0 , .7);
    .modal-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 8px;
        width: 200px;
        padding: 40px 30px;
        background: #eee;
        p{
            text-align: center;
        }
         .btn-click{
            align-self: center;
            border: none;
            color: #fff;
            background: #065143 ;
            padding: 7px;
            border-radius: 17px ;
            width: 60px;
            cursor: pointer;
            transition: .2s ease;

            &:active{
               transform: scale(0.98);
               /* Scaling button to 0.98 to its original size */
               box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
               /* Lowering the shadow */
            }
         }
    }
}

</style>