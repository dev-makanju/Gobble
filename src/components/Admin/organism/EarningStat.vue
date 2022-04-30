<template>
     <div class="table-container">
        <div class="table-main">
            <h3 class="order">Customers Reviews</h3> 
            <div class="customer">
                <img class="pic_thumbnail" src="@/assets/mobile/a-image.jpg"  alt="">
                <ul>
                    <h4>Makanju Emmanuel</h4>
                    <p><span class="star">&starf;</span> 4.5</p>
                </ul>
                <p>hello there , i love your UI it's very nice ans sleek. Don't forget to include all the other features..</p>
            </div>
        </div> 
        <div v-if="loading" class="overlay"></div>
        <div v-if="loading" class="loader">
            <loader class="load"/>
        </div>
     </div>
</template>

<script>
   import loader from '../../molecules/Loading.vue'

   export default {
       name:"EarningStat",
       components:{
           loader
       },
       data(){
           return{
               loading: null,
           }
       }
   }
</script>

<style lang="scss"> 
    .pic_thumbnail{
        width: 60px;
        border-radius: 5px;
        object-fit: cover;
    }

    .border-bottom{
        border-bottom: 1px solid;
    }

    .table-container{
        border-radius: 7px;
        background: #fff ;
        margin: 0px auto;
        width: 100%;
        box-shadow: 0px 2px 15px 7px rgb(0 0 0 / 10%);
        position: relative;

        .overlay{
            position: absolute;
            top: 0;
            background: #b3b6a88a;
            width: 100%;
            height: 100%;
            border-radius: 5px; 
            filter: blur(18px);
        }

        .loader{
           position: absolute;
           top: 0;
           border-radius: 5px; 
           display: flex;
           align-items: center;
           justify-content: center;
           margin: 25% 0px 0px 50%;
        }

        
        .table-main{
            width: 100%;

            .order{
            padding: 10px 20px;
            color: #065143;
            font-family: 'Poppins' , sans-serif;
            font-weight: bolder;
        } 

        .customer{
           padding: 20px ;
            .pic_thumbnail{
               float: left;
               margin-right: 15px;
            }

            p{
               color: #065143;
               font-family: 'Poppins' , sans-serif;
               font-weight: bold; 
               margin-top: .5rem;
               letter-spacing: .5px;
            }

            ul{
               padding-left: 10px;

               h4{
                 color: #065143;
                 font-family: 'Poppins' , sans-serif;
               }
               p{
                 color: #065143;
                 font-family: 'Poppins' , sans-serif;
                 font-weight: bold;
               }
            }

           .star{
               color: gold;
           }
        }


        }

    }
</style>