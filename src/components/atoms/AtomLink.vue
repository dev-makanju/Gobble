<template>
    <div>
        <router-link :to="{name:`${url.name}`}"></router-link>
    </div>
</template>

<script>
    export default {
        name:"AtomLink",
        props:['url']
    }
</script>
