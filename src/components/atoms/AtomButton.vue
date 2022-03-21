<template>
    <div>
        <router-link 
            :style="link.paint"
            :to="{name:`${link.components}`}">
            {{ link.name }}
        </router-link>
    </div>
</template>

<script>
    export default {
        name:'AtomButton',
        props:['link'],
    }
</script>