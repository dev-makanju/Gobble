<template>
   <div class="dashboard__head">
      <div class="dashboard__header">
         <!--search-->
         <div class="header__field inp">
            <input type="text">
            <font-awesome-icon class="search-icon" icon="search"/>
         </div>
         <!--Add product-->
         <div class="header__field add">
            <font-awesome-icon class="fab-icon"  icon="plus"/>
            <p class="add-product">Add product</p>
         </div>
         <!--Notification-->
         <div class="header__field not">
            <font-awesome-icon  icon="bell"/>
            <div class="notify"></div>
         </div>
         <!--User-->
         <div class="header__field thumb">
            <div class="user header">
               <div class="thumbnail thu">
                  <img class="image" src="" alt="">
               </div>
               <p class="thu">Miracle</p>
               <div @click="toggleProfile" :class="[ showProfile ? 'angle active' : 'angle' ]">
                  <font-awesome-icon  :class="[ showProfile? 'angle active' : 'angle' ]" icon="angle-down"/>
               </div>
            </div>
            <div v-if="showProfile" :class="['user', showProfile?'user-profile active':'user-profile' ]">
                 <img width="45" height="45" class="user-thumbnail" src="@/assets/mobile/a-image.jpg" alt="">
                 <ul>
                    <li>Miracle</li>
                    <li>Role: Admin</li>
                 </ul>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

export default {
   name: "DashboardHeaderOrgs",
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

<style lang="scss" scoped>

.fab-icon{
   padding: 5px ;
   border-radius: 5px;
   border: 1px solid #eee;
}

.thumbnail{
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background: #eee;
}

.angle{
   cursor: pointer;
   transition: .5s ease;
   color: #A8B087;

   &.active{
      transform: rotate(90deg);
   }
}

.thu{
   margin: 10px;
   font-family: 'Poppins', sans-serif;
   color: #A8B087;
   font-weight: 600;
}

.dashboard__header{
   display: flex;
   flex-direction: row;
   align-items: flex-start;
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
            flex-direction: row;
            justify-content: center;
            align-items: center;
         }

         .user-profile{
            background: #fff;
            padding: 10px 10px;
            border-radius: 4px;
            box-shadow: 0px 2px 5px rgba(0, 0,0,.3);
            z-index: 111;
            display: flex;
            gap: 5px;
            transition: .5s all;
            opacity: 0;

            &.active{
               opacity: 1;
            }

            ul li{
               list-style-type: none;
               color: #A8B087;
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
         background: #A8B087;
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
            outline: 1px solid #A8B087;
            font-family: 'Poppins' , sans-serif;
         }

         &>.search-icon{
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
            color: #A8B087;
         }
      }
   }
}

</style>