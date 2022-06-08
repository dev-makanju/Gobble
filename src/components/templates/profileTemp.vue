<template>
   <div class="profile-main">
   <div class="user-profile">
      <div class="user-profile profile">
         <div class="profile-banner">
            <div class="profile-banner-content">
               <div class="profile-wrapper">
                  <img src="@/assets/mobile/3898372_user_people_man_add_icon.png" onerror="this.style.display='none'">
               </div>    
            </div>     
         </div>
      </div>
      <div class="user-profile profile-content">
          <div>
               <div class="icon-edit-profile">
                  <font-awesome-icon class="fab-icon"  icon="user-edit"/>
               </div>
               <ul>
                  <li>
                     <h1 v-if="(this.$store.state.auth.status == 'loaded')">{{ this.$store.state.auth.user.name }}</h1>
                     <PuSkeleton v-if="(this.$store.state.auth.status == 'loading')" class="loader" height="30px"></PuSkeleton>
                  </li>
                  <li>
                     <span v-if="(this.$store.state.auth.status == 'loaded')"><h3>Joined</h3>{{ this.$store.state.auth.user.createdAt }}</span>
                     <PuSkeleton v-if="(this.$store.state.auth.status == 'loading')" class="loader" height="30px"></PuSkeleton>
                  </li>
                  <li>
                     <span v-if="(this.$store.state.auth.status == 'loaded')"><h3>Email</h3>{{ this.$store.state.auth.user.email }}</span>
                     <PuSkeleton v-if="(this.$store.state.auth.status == 'loading')" class="loader" height="30px"></PuSkeleton>
                  </li>
                  <li>
                     <span v-if="(this.$store.state.auth.status == 'loaded')"><h3>Role</h3>{{ this.$store.state.auth.user.role }}</span>
                     <PuSkeleton v-if="(this.$store.state.auth.status == 'loading')" class="loader" height="30px"></PuSkeleton>
                  </li>
                  <li>
                     <span v-if="(this.$store.state.auth.status == 'loaded')"><h3>Address</h3>{{ this.$store.state.auth.user.address }}</span>
                     <PuSkeleton v-if="(this.$store.state.auth.status == 'loading')" class="loader" height="30px"></PuSkeleton>
                  </li>
               </ul>
          </div>
      </div>
   </div>
   </div>
</template>

<script>

export default {
   name: "Profile"
}

</script>

<style lang="scss" scoped>
   .icon-edit-profile{
      display: flex;
      justify-content: flex-end;

      .fab-icon{
         color: #065143;
         border: 1px solid #065143;
         border-radius: 4px;
         width: 35px;
         cursor: pointer;

         @media (max-width: 960px){
            margin-right: 2rem;
         }
      }
   }

   .profile-content{
      width: 70%;
      float: right;
      min-height: 300px;
      padding: 20px 10px;
      @media (max-width: 960px){
         width: 100%;
         margin-top: 4rem;
         min-height: 300px;
         padding: 20px 10px;
      }
      div>ul>li{
         padding: 10px;
         border-bottom: 1px solid rgb(200, 196, 196);
      }
   }

   .user-profile.profile{
      
      .profile-banner{
         position: relative;
         height: 30vh;
         width:  100%;
         background: linear-gradient(#065143 , #000);
      }

      .profile-banner-content{
         width:  100%;
         position: absolute;

         .profile-wrapper {
            width: 90%;
            margin: 0px auto;
            position: absolute;
            top: 14vh;
            left: 0;
            right: 0;

            @media (max-width: 450px) {
                 top: 18vh;
            }

            img{
               width: 200px;
               height: 200px;
               border-radius: 50%;
               border: 1px solid rgba(173, 168, 168, 0.933);
               background: #eee;
            }
         }
      }
   }
</style>