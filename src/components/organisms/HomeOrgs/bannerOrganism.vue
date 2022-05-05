<template>
    <div class="banner">
        <PuSkeleton class="banner__loader">
         <img class="banner-image" src="@/assets/mobile/a-image.jpg" alt="">
         <div class="banner__overlay"></div>
         <div class="banner__text">
              <h1>Join Our Member and get discount to 35% </h1>
              <div class="banner__input">
                  <input type="text" placeholder="Enter your mail">
                  <button class="btn-class">Sign In</button>
              </div>
              <div class="error_handler">
                  This user does not exist!!!
              </div>
         </div>
          </PuSkeleton>
    </div>
</template>

<script>
    export default {
        name:"bannerOrganism"
        
    }
</script>

<style lang="scss" scoped>
    .banner{
        width: 100%;
        max-width: 1440px;
        margin: 0px auto;
        height: 300px;
        border-radius: 5px;
        position: relative ;
        box-shadow: 0px 0px 30px 12px rgba(0 , 0 , 0 , .3) ;
        margin-top: 5rem;

        @media (min-width:768px) {
            width: 90%;
            margin: 0px auto;
            height: 300px;
            border-radius: 5px;
            position: relative ;
        }

        &__banner{
            width: 90% ;
            height: 300px;
        }

        .banner-image{
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 5px;
        }

        &__overlay{
            height: 300px;
            width: 100% ;
            border-radius: 5px ;
            background: #000 ;
            opacity: .7;
            position: absolute ;
            top: 0px ;
        }

        &__text{    
            padding: 10px;
            height: 300px;
            width: 100% ;
            border-radius: 17px ;
            position: absolute ;
            top: 0px ;
            display: flex;
            flex-direction: column ;
            justify-content: center;
            align-items: center;

            & h1{
                color: #eee;
                letter-spacing: .1em;

                @media (max-width: 450px) {
                    font-size: 28px;
                }
            }

            & .error_handler{
                padding: 10px;
                background:  #e74e3c;
                border-radius: 5px ;
                width: 300px ;
                min-width: 250px;
                margin-top: 10px;
                text-align: center;
                color: #eee ;
            }

            & .banner__input{
                position: relative ;
                margin-top: 20px;

                & input{
                    outline: none ;
                    padding: 10px 25px;
                    border-radius: 20px;
                    background: #b9bdaa ;  
                    font-family: 'IM Fell English', serif;
                    min-width: 310px;  
                }
                
                & .btn-class{
                    padding: 10px ;
                    border-radius: 17px ;
                    background: #065143 ;
                    border: none;
                    outline: none ;
                    font-size: 16px;
                    font-family: 'IM Fell English', serif;
                    cursor: pointer ;
                    position: absolute;
                    top: 0;
                    right: 0;
                    color: #eee;
                }
            }
        }
    }
</style>