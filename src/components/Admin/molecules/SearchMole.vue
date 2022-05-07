<template>
   <div :class="['search' ,open?'open':'']">
      <input type="text" placeholder="Search">
      <font-awesome-icon @click="toggleSearch" class="search-icon" icon="search"/>
   </div>
</template>

<script>
export default {
   name:"Search",
   components:{},
   data(){
      return{
         open:null
      }
   },
   methods:{
      toggleSearch(){
         this.open = !this.open
      }
   }
}
</script>

<style lang='scss' scoped>
   .search{
      position: relative;
      transition: .5s ease ;
      max-width: 40px;

      input{
         outline: none;
      }

      &.open{
         max-width: 500px;
      }


      .search-icon{
         position: absolute;
         right: 0;
         padding: 12px;
         border-radius: 5px;
         cursor: pointer;
         max-width: 20px;
         background: #065143 ;
         color: #eee;
      }
   }
</style>