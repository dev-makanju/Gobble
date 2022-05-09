<template>
  <div id="app">
    <div id="nav">
        <!--Header--->
        <HeaderOrganism v-if="!isNavActive"/>
        <router-view/>
        <!---Footer---->
    </div>
    <div v-if="!isMarketPlace">
         <FooterOrganism v-if="!isNavActive"/>
    </div>
  </div>
</template>

<script>
import HeaderOrganism from './components/organisms/HeaderOrganism.vue'
import FooterOrganism from './components/organisms/FooterOrganism.vue'
import { mapActions } from 'vuex'

export default {
    components:{
      HeaderOrganism,
      FooterOrganism,
    },  
    data(){
      return{
        isMarketPlace: null,
        isNavActive: null,
      }
    },
    mounted(){
      const token = this.$store.state.auth.token
      if(token){
        this.getUserInfo().then(res => {
           if(res.status){
            console.log(res.status)
           }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    created(){
      //get user information when app is created
      this.isMarketRoute();
      this.showNavbar()
    },
    methods:{
      ...mapActions(['getUserInfo']),
      isMarketRoute(){
        if(this.$route.name === "MarketPlace"){
            this.isMarketPlace = true;
            return;
        }
        this.isMarketPlace = false;
      },
      showNavbar(){
        if(this.$route.name === "Login" || 
          this.$route.name === "Register" ||
          this.$route.name === "ForgotPassword" ||
          this.$route.name === "Dashboard" ||
          this.$route.name === "Customers" ||
          this.$route.name === "payHistory" ||
          this.$route.name === "Product" ||
          this.$route.name === "Order"||
          this.$route.name === "CreateProduct"){
          this.isNavActive = true;
          return;
        }this.isNavActive = false;
      }
    },
    watch:{
      $route(){
        this.isMarketRoute;
        this.showNavbar()
      }
    }
}
</script>

<style lang="scss">
/*****
*Includes all fonts together
******/
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English&display=swap');//cards only font-family: 'Mochiy Pop P One', sans-serif;
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English&family=Lora:ital@1&display=swap');//landing page font-family: 'Lora', serif;
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English&family=Lora:ital@1&family=Mochiy+Pop+P+One&display=swap');//Texts font-family: 'IM Fell English', serif;
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');


$primary-color: #70B77E ;
$secondary-color:#A8B087 ;
$tertiary-color: #065143 ;
$error-color: #e74e3c ;

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box ;
}

html{
  min-height: 100vh ;
}

#nav{
  min-height: 100vh ;
}

#app{
  margin: 0px auto ;
  min-height: 100vh ;
  width: 100%;
}

body{
  display: flex;
  background: rgb(241, 236, 236);
  font-family: 'Poppins' , sans-serif;
}

h1 , h2 , h3 , h4 , h5 , h6 , p{
  color: #000;
  font-family: 'Poppins' , sans-serif;
}

ul , li , ol {
  font-family: 'Poppins' , sans-serif;
}

input{
   border: $secondary-color;
   box-sizing: border-box;
   font-family: 'Poppins' , sans-serif;
   width: 100%;
   padding: 7px;
   font-size: 16px;
   border-radius: 5px;
}

.error{
   color: $error-color;
}

</style>
