<template>
   <div class="button">
      <button>
         <Loader v-if="value.loading" />
         <div class="button__text">
            {{ value.value }}
         </div>
      </button>
   </div>
</template>

<script>

import Loader from '../../molecules/Loading.vue'

export default{
   name:'Button',
   props:['value' , 'loading'],
   components: {
      Loader,
   },
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
         border-radius: 5px;
         outline: none;
         display: flex;
         justify-content: center;
         align-items: center;
         align-content: center;
         cursor: pointer;
      }
   }
</style>