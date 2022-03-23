<template>
    <div class="error">
        <h1>404</h1><br>
        <p>This is an invalid page... </p> <br>
        <div>
              <router-link class="error_link" :to="{name:'Home'}">redirect to homepage</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:"NotFound",
    }
</script>

<style lang="scss" scoped>
   .error{
        display: flex;
        justify-content: center;
        align-items: center ;
        height: 100%;
        flex-direction: column;

        h1{
            font-size: 200px;
        }
        p{
            color: #506b66;
        }
        .error_link{
            color: #000;
            text-decoration: none;
        }
   }
</style>