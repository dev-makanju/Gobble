<template>
   <div class="profile-main">
      <ProfileUpdate 
         v-if="updateProfile"
         @close="toggleUpdate"
      />
      <ProfileCard @open="toggleUpdate"/>
   </div>
</template>

<script>

import ProfileCard from '../components/templates/profileTemp.vue'
import ProfileUpdate from '../components/Modals/profileUpdate.vue'

export default {
   name: 'Profile',
   data(){
      return{
         updateProfile: false,
      }
   },
   components:{
      ProfileCard,
      ProfileUpdate,
   },
   methods:{
      toggleUpdate(){
         this.updateProfile = !this.updateProfile;
      }
   }
}

</script>

<style lang="scss" scoped>
   .profile-main{
      height: 110vh;
   }
</style>
