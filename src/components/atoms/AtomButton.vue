<template>
    <div>
        <router-link 
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