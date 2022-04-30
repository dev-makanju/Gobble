<template>
    <div class="chart">

    <div class="table-container">
        <div class="table-main">
            <h3 class="order">Latest Orders</h3> 
            <table>
            <thead>
                <th>Product</th>
                <th>Date</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Status</th>
            </thead>
               <tbody>
                    <tr>
                        <td><img class="pic_thumbnail" src="@/assets/mobile/a-image.jpg" alt=""></td>
                        <td>Apr, 21st 2022</td>
                        <td>Shoe</td>
                        <td>NgN 5000.00</td>
                        <td @click="toggleStatus" class="toggle">paid</td>
                    </tr>
                </tbody>
            </table>
        </div> 
        <div v-if="loading" class="overlay"></div>
        <div v-if="loading" class="loader">
            <loader class="load"/>
        </div>
     </div>
    </div>
</template>

<script>
    import loader from '../../molecules/Loading.vue'

    export default {
       name:"SaleApp",
       components:{
           loader,
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

        &>table{
            width: 100%;

            &>thead{ 

               &>th{
                  color: #065143; 
                  padding: 20px 20px;
                  font-family: 'Poppins', sans-serif;
                  border-bottom: 1px solid #d0d6b6 ;
               }
            }
            &>tbody>tr{
               border-bottom: 1px solid #d0d6b6 ;

               .toggle{
                   color: red;
                   cursor: pointer;

               }
               &>td{
                  color: #065143 ; 
                  padding: 10px 2px;
                  font-family: 'Poppins', sans-serif;
                  text-align: center ;
                  font-weight: bold;
                  font-size: 12px;
               }   
            }
        }

        }

    }
</style>