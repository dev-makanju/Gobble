<template>
    <div>
        <router-link class="cart-buttons" :to="{name:`${cartList.compName}`}">
            <slot></slot>
        </router-link>
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
        color: #eee ;
    }
</style>