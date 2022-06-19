<template>
   <div class="paginate">
      <ul class="pagination">
         <li @click="prev">prev</li>
         <li>{{ current }}</li>
         <li @click="next">next</li>
      </ul>
   </div>
</template>
<script>
export default {
   name:'Pagination',
   props:['current' , 'pageSize' , 'cards'],
   data(){
      return{
         counter: 1,
         currentValue: this.current
      }
   },
   methods:{
      prev(){
         if(this.counter !== 1){      
            this.counter--
            this.$emit('value-subtract' , this.counter);
         }
      },
      next(){
         const maxValue = this.cards.length / this.pageSize
         if(this.counter <= maxValue){   
            this.counter++
            this.$emit('value-increased' , this.counter);
         } 
      },
   },
   created(){
      this.$emit('paging' , this.paginated)
   },
   computed:{
      indexStart() {
         return (this.current - 1) * this.pageSize; 
      },
      indexEnd() {
         return this.indexStart + this.pageSize 
      },
      paginated: {
         get: function(){
            return this.cards.slice(this.indexStart , this.indexEnd)
         }
      },
   },
   watch:{
      paginated(newValue){
         this.$emit('paging' , newValue)
      }
   }
}
</script>
<style lang="scss" scoped>
    .paginate{
       padding: 20px 2px;
       float: right;
       .pagination{
         display: inline-flex;
         li{
            list-style-type: none;
            padding: 5px 7px;
            margin: 2px;
            border: 1px solid rgba(149, 143, 143, 0.726);
            cursor: pointer;
            color: rgba(105, 101, 101, 0.687);
            transition: .5s ease;

            &:hover{
               transform: scale(1.01);
               box-shadow: 0px 2px 15px 2px rgba( 0 , 0 , 0 , .1);
            }
         }
       }
    }
</style>