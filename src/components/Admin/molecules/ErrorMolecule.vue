<template>
   <div class="error-body">
      <div>
         <font-awesome-icon class="notice" icon="exclamation-circle"/>
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
       background: #f0c1bc;
       position: relative;
       border: 2px dashed red ;

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
          color: red;
       }
   }
</style>