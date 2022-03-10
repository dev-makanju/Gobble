<template>
  <div id="app">
    <div id="nav">
        <!--Header--->
        <HeaderOrganism/>
        
    </div>
    <FooterOrganism/>
    <router-view/>
  </div>
</template>

<script>
import HeaderOrganism from './components/organisms/HeaderOrganism.vue'
import FooterOrganism from './components/organisms/FooterOrganism.vue'

export default {
    components:{
       HeaderOrganism,
       FooterOrganism,
    },  
}
</script>

<style lang="scss">
/*****
*Includes all fonts together
******/
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English&display=swap');//cards only font-family: 'Mochiy Pop P One', sans-serif;
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English&family=Lora:ital@1&display=swap');//landing page font-family: 'Lora', serif;
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English&family=Lora:ital@1&family=Mochiy+Pop+P+One&display=swap');//Texts font-family: 'IM Fell English', serif;

#app{

$primary-color: #70B77E ;
$secondary-color:#A8B087;
$tertiary-color: #065143;

}

</style>
