<template>
    <div>
        <router-link :style="url.styleObjects" :to="{name:`${url.compName}`}">{{ url.linkTitle }}</router-link>
    </div>
</template>

<script>
    export default {
        name:"AtomLink",
        props:['url']
    }
</script>
