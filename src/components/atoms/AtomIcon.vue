<template>
    <div>
        <font-awesome-icon class="icon" :icon="content"/>
    </div>
</template>

<script>
    export default {
        name:"AtonIcon",
        props:['content'],
    }
</script>

<style lang="scss" scoped>
.icon{
   color: #065143;
}
</style>