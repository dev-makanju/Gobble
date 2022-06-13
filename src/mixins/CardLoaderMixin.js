import { mapGetters } from 'vuex'

export default {
   created(){
      this.getAllProduct();
   },
   computed:{
      ...mapGetters({
         loading: 'returnLoadState' ,
         product: 'returnAllProducts',
      })
   }, 
   watch:{
      loading: function(){
         if(!this.$store.state.product_loading) {
            if(this.$route.name === 'MarketPlace' || this.$route.name === 'Product'){
               this.getAllProduct()
            }else if(this.$route.name === 'Home') {
               this.getPostFeeds()
            }
         }
      },
      product: function(){
         this.getAllProduct()
      }
   },
}