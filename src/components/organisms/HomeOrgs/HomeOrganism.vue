<template>
    <div>
        <div>
            <AtomText :tag="'h1'" :content="'Be the fastest in dilivering your food.'" :myStyle="hStyles"/>
            <AtomText :tag="'p'" :content="'we are capable of making 24hours food dilivering services in your local enviroment.'" :myStyle="pStyles"/>
            <div class="search_form">
                <input type="text" 
                       name=""
                       id=""
                       class="search"
                       placeholder="" 
                       v-model.trim="searchInput">
                <div class="search__buttom">
                    <div class="search__buttom_flex">
                         <button class="home__btn active">Delivery</button>
                    </div>
                    <AtomText :tag="'p'" :content="'or'" :myStyle="pSty"/>
                    <div class="search__buttom_flex">
                         <button class="home__btn">Pick Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import AtomText from '../../atoms/AtomText.vue'

    export default {
        name:"HomeOrganism",
        components:{
            AtomText, 
        },
        data(){
            return{
                searchInput:'',
                hStyles:{
                    fontSize:'40px',
                },
                pStyles:{
                    marginTop:'20px',
                    fontSize:'16px',
                    fontWeight:'500',
                },
                pSty:{
                    color: '#065143',
                    padding:'5px',
                }
            }
        }   
    }
</script>

<style lang="scss" scoped>
        .search_form{
            margin-top: 45px;
        }

      .search{
        outline: none ;
        padding: 10px 25px;
        border-radius: 20px;
        background: #b9bdaa ;  
        font-family: 'IM Fell English', serif;  
      }

     .search__buttom{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 16px;


        &_flex{
            flex: 1 ;
            display: flex;
            align-items: center;
            justify-content:center;
        }

        .home__btn{
            padding: 10px ;
            border-radius: 17px ;
            min-width: 100%;
            background: #b9bdaa ;
            border: 1px solid #065143 ;
            outline: none ;
            font-size: 16px;
            font-family: 'IM Fell English', serif;
            cursor: pointer ;

            &.active{
               background: #065143 ;
               color: #eee;
            }

            &:hover{
               background: #065143;
               color: #eee;
            }
        }
     }
</style>