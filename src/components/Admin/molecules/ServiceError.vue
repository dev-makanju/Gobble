<template>
   <div class="error">
      <h1>408</h1><br>
      <h4>Request Timeout</h4>
      <p>Kindly check your internet connection, this may be due to bad network... </p><br>
      <div>
         <p style="cursor:pointer" @click="refresh()">refresh page</p>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Service',
   methods:{
      refresh(){
         location.reload();
      }
   }
}
</script>

<style lang="scss" scoped>
   .error{
        display: flex;
        justify-content: center;
        align-items: center ;
        height: 100% ;
        flex-direction: column ;

        h1{
            font-size: 100px ;
            color: #506b66;
        }
        p{
            color: #506b66;
        }
        .error_link{
            color: #506b66;
            text-decoration: none;
        }
   }
</style>