<template>
    <div @click="cartList.click" class="main">
        <router-link  class="cart-buttons" :to="{name:`${cartList.compName}`}">
            <slot></slot>
        </router-link>
        <div v-if="cartList.count > 0" class="count">
                <p>{{ cartList.count }}</p>
            </div>
         </div>
</template>

<script>
    export default {
        name:"AtomCartLink",
        props:['cartList']
    }
</script>

<style lang="scss" scoped>
    .cart-buttons{
        color: #eee;
    }

    .main{
        position: relative ;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .count{
        position: absolute;
        right: -14px ;
        top: -11px ;

        p{
            color: red;
        }
    }
</style>