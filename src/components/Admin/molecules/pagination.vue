<template>
   <div class="paginate">
      <ul class="pagination">
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
         <li>5</li>
      </ul>
   </div>
</template>
<script>
export default {
   name:'Pagination'
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
            border: 1px solid rgba(228, 226, 226, 0.726);
            cursor: pointer;
            color: rgba(169, 165, 165, 0.687);
            transition: .5s ease;

            &:hover{
               transform: scale(1.01);
               box-shadow: 0px 2px 15px 2px rgba( 0 , 0 , 0 , .1);
            }
         }
       }
    }
</style>