<template>
    <div>
        <h1>Hello world</h1>
        <font-awesome-icon icon="hat-wizard"/>
        <font-awesome-icon icon="cart-shopping"/>
    <div class="item">
        <div class="item__photo">
            <PuSkeleton circle height="50px" width="50px">
    
            </PuSkeleton>
        </div>
        <div class="item__meta">
            <div class="item__title">
                <PuSkeleton>Hello world</PuSkeleton>
                </div>
                  <div class="item__info">
                  <PuSkeleton :count="2">Hi there</PuSkeleton>
                </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>