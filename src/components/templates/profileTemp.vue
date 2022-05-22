<template>
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
          <div class=""></div>
          <div>
               <ul>
                  <li>
                     <h1>{{ this.$store.state.auth.user.name }}</h1>
                     <p>Joined: {{ this.$store.state.auth.user.createdAt }}</p>
                  </li>
                  <li>
                     <h3>{{ this.$store.state.auth.user.email }}</h3>
                  </li>
                  <li>
                     <p>{{ this.$store.state.auth.user.role }}</p>
                  </li>
                  <li>
                     <h1>{{ this.$store.state.auth.user.address }}</h1>
                  </li>
               </ul>
          </div>
      </div>
   </div>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>
   .profile-content{
      border: 2px solid blue;
      margin-top: 10%;
      min-height: 300px;
   }

   .user-profile.profile{
      
      .profile-banner{
         position: relative;
         height: 30vh;
         width:  100%;
         background: linear-gradient(#065143 , #000);
      }

      .profile-banner-content{
         height: 60vh;
         width:  100%;
         border: 1px solid red;
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