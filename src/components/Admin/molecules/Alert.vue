<template>
   <div class="error-body">
      <div>
         <font-awesome-icon class="notice" icon="check-circle"/>
         <span>{{ message }}</span>
      </div>
      <font-awesome-icon @click="closeModal" class="close" icon="times"/>
   </div>
</template>
<script>

export default{
   name:'success',
   props:['message'],
   methods:{
      closeModal(){
         console.log('modal')
      }
   }
}

</script>

<style lang="scss" scoped>
   .error-body{
       padding: 10px;
       height: 50px;
       background: rgb(201, 238, 201);
       position: relative;
       box-shadow: 0px 1px 35px 1px rgba(0 , 0 , 0 , .1);

       .close{
          color: green ;
          position: absolute;
          padding: 3px 4px;
          top: 0;
          right: 0;
          cursor: pointer;
       }

       .notice{
          color: green ;
          margin-right: 10px;
       }
       span{
          color: #000;
       }
   }
</style>