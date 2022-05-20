<template>
   <div class="header-wrapper">
      <div class="dashboard__head">
         <font-awesome-icon  class="mobile-navbar" icon="hamburger" @click='$emit("toggle-navigation")'/>
      </div>
      <div class="dashboard__head">
         <div class="dashboard__header">            <!--search-->
            <div class="header__field inp">
               <input type="text">
               <font-awesome-icon class="search-icon" icon="search"/>
            </div>
            <!--Add product-->
            <router-link :to="{name:'CreateProduct'}">
               <div class="header__field add">
                  <font-awesome-icon class="fab-icon"  icon="plus"/>
                  <p class="add-product">Add product</p>
               </div>
            </router-link>
            <!--Notification-->
            <div class="header__field not">
               <font-awesome-icon  icon="bell"/>
               <div class="notify"></div>
            </div>
            <!--User-->
            <div class="header__field thumb">
               <ProfileCard/>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import ProfileCard from '../../molecules/ProfileMoles.vue'

export default {
   name: "DashboardHeaderOrgs",
   components:{
      ProfileCard  
   },
   data(){
      return{
         showProfile: false,
      }
   },
   methods:{
      toggleProfile(){
         this.showProfile = !this.showProfile
      },
   }
} 

</script>

<style lang="scss">

.header-wrapper{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
}

.mobile-navbar{
   display: none;
}

@media (max-width: 900px) {
   .mobile-navbar{
      padding: 5px;
      border: 1px solid #065143;
      border-radius: 3px;
      width: 25px;
      color: #065143;
      cursor: pointer;  
      margin-left: 7px; 
      display: block;
   }  
}

.relative{
   position: relative;
}

.fab-icon{
   padding: 5px ;
   border-radius: 5px;
   border: 1px solid #eee;
}

.thumbnail{
   width: 35px;
   height: 35px;
   border-radius: 50%;
   background: #eee;
   
   @media (max-width: 800px) {
      display: none;
   }
}

.angle{
   cursor: pointer;
   transition: .5s ease;
   color: #065143;

   &.active{
      transform: rotate(180deg);
   }
}

.thu{
   margin: 10px;
   font-family: 'Poppins', sans-serif;
   color: #065143;
   font-weight: 600;
}

.dashboard__header{
   display: flex;
   flex-direction: row;
   align-items: center ;
   padding: 15px 25px;
   gap: 20px;
   float: right;

   .header__field{

      &.thumb{
         display: flex;
         flex-direction: column;
         justify-content: center ;
         align-items: center ;
         margin: -10px;

         .header{
            display: flex;
            flex-direction: row ;
            align-items: center ;
         }
      }

      &.not{
         position: relative;
         padding: 2px;

         &>.notify{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: red;
            position: absolute;
            top: 0;
            right:0;
         }
      }

      &.add{       
         padding: 5px 10px;
         background: #065143;
         display: flex;
         justify-content: center;
         align-items: center;
         border-radius: 10px;
         font-family: 'Poppins', sans-serif;
         box-shadow: 0px 2px 15px 7px rgba(0, 0,0,.1);
         color: #eee;
         cursor: pointer;
      }

      .add-product{
         color: #eee;
         margin-left: .5rem;
         font-family: 'Poppins', sans-serif;
         transition: .5s ease;

         @media (max-width: 1200px) {
            display: none;
         }
      }

      &.inp{
         position: relative;
         display: flex;
         align-items: center;

         &>input{
            border: 1px solid rgb(249, 247, 247);
            background: #eee ;
            border-radius: 8px;
            padding: 7px;
            outline: 1px solid #065143;
            font-family: 'Poppins' , sans-serif;
         }

         &>.search-icon{
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
            color: #065143;
         }
      }
   }
}

</style>