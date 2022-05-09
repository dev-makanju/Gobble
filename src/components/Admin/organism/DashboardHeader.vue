<template>
   <div class="header-wrapper">
      <div class="dashboard__head">
         <div class="dashboard__header">
            <!--search-->
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
   
   @media (max-width: 800px) {
      display: none;
   }
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

         .user-profile{
            background: #fff;
            padding: 10px 10px;
            border-radius: 4px;
            box-shadow: 0px 2px 5px rgba(0, 0,0,.3);
            z-index: 111;
            width: 280px;
            height: 100px;
            margin-top: .9rem;
            position: absolute;
            display: flex;
            right: 0px;
            gap: 5px;
            transition: .5s all;
            opacity: 0;

            &.active{
               opacity: 1;
            }

            ul li{
               list-style-type: none;
               color: #065143;
               font-family: 'Poppins' , sans-serif ;
               font-weight: bold;
            }

            .user-thumbnail{
               border-radius: 50%;
            }
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