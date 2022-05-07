<template>
   <div class="error-body">
      <div>
         <font-awesome-icon class="notice" icon="check-circle"/>
         <span>{{ message }}</span>
      </div>
      <font-awesome-icon class="close" icon="times"/>
   </div>
</template>
<script>
export default{
   name:'error',
   props:['message']
}
</script>

<style lang="scss" scoped>
   .error-body{
       padding: 10px;
       height: 50px;
       border-radius: 5px;
       background: rgb(200, 249, 200);
       position: relative;
       border: 2px dashed green ;

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
          color: green;
       }
   }
</style>