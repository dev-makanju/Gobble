<template>
     <div>
        <img class="image" src="@/assets/mobile/background.png">
    </div>
</template>

<script>

    export default {
        name:"ImageOrganism",
        components:{
            
        },
        data(){
            return{
               
            }
        }
        
    }
</script>
<style lang="scss" scoped>
    .image{
        @media (max-width:450px) {
            width: 350px ;
        }
        
        object-fit: cover;
        width: 450px;
        min-width: 250px ;
    }
</style>
