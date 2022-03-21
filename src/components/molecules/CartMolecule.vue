<template>
    <div>
        <ul class="nav-link-cart" v-for="( cartList , index) in cartLists" :key="index">
            <li>                
                <atom-cart-link :cartList="cartList">
                    <AtomIcon class="" :content="cartList.linkIcon"/>
                </atom-cart-link>
            </li>
        </ul>
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
</style>
