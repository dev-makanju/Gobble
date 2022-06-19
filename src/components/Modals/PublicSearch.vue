<template>
   <div class="search-wrapper">
      <input 
         id="search"
         type="text"
         placeholder="Search"
         v-model.trim="search"
         class="input-search"
      >
      <font-awesome-icon @click.prevent="onSubmit" class="search-icon" icon="search"/>
   </div>
</template>
<script>

import {mapActions} from 'vuex'
import {slugifyUrl} from '../../Helpers/helper.js'

export default {
   name: 'Search',
   data(){
      return{
         search: '',
      }
   },
   methods:{
      ...mapActions(['searchProduct']),
      onSubmit(){
         const enteredValue = document.getElementById('search');
         if(enteredValue.value === ''){
           enteredValue.focus()
           return;
         }else{
            const data = {
               query: this.search
            }
            const slugData = slugifyUrl(this.search)
            this.searchProduct(data).then(res => {
               if(res.status === 200){
                  this.$router.push({name:'Search' , query: {food: slugData }});
               }
            }).catch(err => {
               err;
            })
         }
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
      cursor: pointer;
   }
}
</style>