<template>
    <div class="header__nav__links">
        <ul class="nav-link-cart" v-for="( cartList , index) in cartLists" :key="index">
            <li>                
                <atom-cart-link :cartList="cartList">
                    <AtomIcon class="" :content="cartList.linkIcon"/>
                </atom-cart-link>
            </li>
        </ul>
        <div class="nav-link-cart">
            <router-link class="nav-log" :to="{name:'Login'}">Sign In</router-link>
        </div>
    </div>
</template>

<script>

    import AtomCartLink from '../atoms/AtomCartLink.vue'
    import AtomIcon from '../atoms/AtomIcon.vue'

    export default {
        name:"CartMolecule",
        props:['cartLists'],
        components:{
            AtomCartLink ,AtomIcon
        },
    }
</script>

<style lang="scss" scoped>
    .nav-link-cart{
        display: inline-flex ;

        & li{
           list-style-type: none ;
           padding: 7px ;
           border-radius: 50%;
           background: #066350 ;
           color: #000;
           box-shadow: 0px 2px 33px 5px rgba(0 , 0 , 0 , .3);
           margin: 0px 7px ;
        }
        
    }

    .nav-log{
        padding: 5px;
        text-decoration: none;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        border-radius: 10px;
        border: 1px solid #066350;
        color: #066350;

        &:hover{
            background: #066350;
            color: #eee;
        }
    }
</style>
