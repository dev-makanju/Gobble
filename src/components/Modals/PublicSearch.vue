<template>
   <div class="search-wrapper">
      <input 
         type="text"
         placeholder="Search"
         v-model.trim="search"
         class="input-search"
      >
      <font-awesome-icon class="search-icon" icon="search"/>
   </div>
</template>
<script>
export default {
   name: 'Search',
   data(){
      return{
         search: '',
      }
   }
}
</script>
<style lang="scss" scoped>

.search-wrapper {
   position: relative;

   .input-search {
      border-radius: 5px;
      padding: 7px;
      outline: 1px solid #066350;
   }
   
   .search-icon {
      position: absolute;
      top: 0;
      right: 0;
      padding: 12px;
      border-radius: 5px;
      color: #fff;
      background: #066350;
   }
}
</style>