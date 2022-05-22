<template>
   <div class="header__field">
      <div class="user header">
         <div class="thumbnail thu">
            <img class="image" src="@/assets/mobile/3898372_user_people_man_add_icon.png" alt=" " onerror="this.style.display='none'">
         </div>
         <div class="relative thu">
            <font-awesome-icon @click="toggleProfile"  :class="[ showProfile? 'angle active' : 'angle' ]" icon="angle-down"/>
            <div v-if="showProfile" :class="['user', showProfile?'user-profile active':'user-profile' ]">
               <div class="profile-card-wrapper">
                  <div class="class-wrapper icon">
                     <div class="thumbnail-wrapper child">
                        <img class="user-thumbnail" src="@/assets/mobile/3898372_user_people_man_add_icon.png" onerror="this.style.display='none'">
                     </div>
                     <div style="width: 100%;" class="child">
                        <div v-if="(this.$store.state.auth.status == 'loading')">
                           <PuSkeleton class="loader" height="20px"></PuSkeleton>
                           <PuSkeleton class="loader" height="10px" :rounded="true"></PuSkeleton>
                        </div>
                        <div v-if="(this.$store.state.auth.status == 'loaded')">
                           <li class="username">{{ this.$store.state.auth.user.name }}</li>
                           <li>Role: <span class="role">{{ this.$store.state.auth.role }}</span></li>
                           <li><span style="font-size: 12px;" class="role">{{ this.$store.state.auth.user.email }}</span></li>
                        </div>
                     </div>
                  </div>
                  <div class="class-wrapper">
                     <div class="lower-wrapper">
                        <div></div>
                     </div>
                     <div class="profile-tab">
                        <font-awesome-icon class="fab-icon"  icon="user-edit"/>
                        <router-link class="link update-profile" :to="{name:'Profile'}">Profile</router-link>
                     </div>
                     <div class="profile-tab">
                        <font-awesome-icon class="fab-icon" icon="refresh"/>
                        <router-link class="link update-profile" :to="{name:'Home'}">Reset Password</router-link>
                     </div>
                     <div class="profile-tab">
                        <font-awesome-icon class="fab-icon" icon="trash"/>
                        <router-link class="link update-profile" :to="{name:'Home'}">Delete Account</router-link>
                     </div>
                     <div @click="signOut" class="profile-tab">
                        <font-awesome-icon class="fab-icon"  icon="sign-out"/>
                        <p class="link update-profile">log out</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

export default {
   name: 'ProfileCard',
   data(){
      return{
         showProfile: false,
      }
   },
   methods:{
      toggleProfile(){
         this.showProfile = !this.showProfile
      },
      signOut(){
         this.$store.dispatch('logout').auth;
      },
   },
}

</script>

<style lang="scss" scoped>

.fab-icon{
   width: 30px;
   margin-right: 10px;
}

.profile-card-wrapper{
   display: flex;
   flex-direction: column;
   width: 100%;
}

.class-wrapper.icon{
   display: flex;
   flex-direction: row;
}

.profile-tab{
   display: flex;
   flex-direction: row;
   font-size: 14px;
   gap: 2px;
}

.image{
   border-radius: 50%;
   width: 30px;
   height: 30px;
}

.lower-wrapper{
   div{
      margin: 1rem 0px;
      background: #06514349;
      width: 100%;
      height: 2px;
   }
}

.username{
   font-size: 20px;
   padding: 5px 0px ;
}

.role{
   font-weight: 300;
}

.update-profile{
   padding: 5px 0px;
   font-weight: 300;
   color: #076d5a;
   transition: .5s ease;
   cursor: pointer;

   &:hover{
      color: #065143;
      font-weight: 500;
   }
}

.header{
   display: flex;
   flex-direction: row ;
   align-items: center ;
   justify-content: center;
}

.user-profile{
   background: #fff;
   padding: 10px 10px;
   border-radius: 2px;
   box-shadow: 0px 2px 5px rgba(0, 0,0,.3);
   z-index: 111;
   width: 350px;
   min-height: 200px;
   min-width: 300px;
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
      padding: 5px 0px;
   }

   .thumbnail-wrapper{
      border-radius: 50%;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      background: rgb(213, 213, 213);
      
      .user-thumbnail{
         border-radius: 50%;
         width: 60px;
         height: 60px;
      }
   }
}
</style>