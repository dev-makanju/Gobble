<template>
   <div class="error-body">
      <div>
         <font-awesome-icon class="notice" icon="exclamation-circle"/>
         <span>{{ message }}</span>
      </div>
      <font-awesome-icon @click="closeModal" class="close" icon="times"/>
   </div>
</template>
<script>
export default{
   name:'error',
   props:['message'],
   methods:{
      closeModal(){
         this.$emit('close')
      }
   }
}
</script>

<style lang="scss" scoped>
   .error-body{
       padding: 10px;
       min-height: 50px ;
       background: #e5c2be;
       position: relative;
       box-shadow: 0px 1px 35px 1px rgba(0 , 0 , 0 , .1);

       .close{
          color: red ;
          position: absolute;
          padding: 3px 4px;
          top: 0;
          right: 0;
          cursor: pointer;
       }

       .notice{
          color: red ;
          margin-right: 10px;
       }
       span{
          color: #000;
       }
   }
</style>