<template>
    <div>
        <ul class="pagination">
            <li>
                <button @click="onClickFirstPage" :disabled="isInFirstPage" class="page-no">1</button>
            </li>
            <li>
                <button @click="onClickPreviousPage" :disabled="isInFirstPage" class="page-no">2</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"Pagination",
        prop:{
            maxVisibleButton:{
                type:Number,
                required:false,
                default: 3,
            },
            totalPages:{
                type:Number,
                required:true,
            },
            perPage:{
                type:Number,
                required:true
            },
            currentPage:{
                type:Number,
                required:true
            }
        },
        methods:{

        },
        computed:{
            startPage(){
                //first page
                if(this.currentPage === 1){
                    return 1;
                }
                //last Page
                if(this.currentPage === this.totalPages){
                    return this.totalPages - this.maxVisibleButton;
                }
                //when inbeetween
                return this.currentPage - 1

            },
            pages(){
                const range = [];

                for(let i = 0; i <= Math.min(this.startPage + this.maxVisibleButton - 1 , this.totalPages); i++ ){
                    range.push({
                        name:i,
                        isDisabled:i === this.currentPage
                    });
                }

                return range;
            }
        }
    }
</script>

<style lang="scss" scoped>
.pagination{
    display: flex;
    flex-direction: row;
    gap: 4px;
    padding: 30px;
    
    li{
        list-style-type: none;
        outline: none ;
    }

    .page-no{
        padding: 10px;
        border-radius: 4px ;
        border: 1px solid #065143;
        color: #065143 ;   
        font-size: 16px;
        text-decoration: none;
        outline: none;
    }
}
</style>