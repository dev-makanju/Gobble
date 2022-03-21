<template>
    <div class>
        <img 
           :src="`../assets/${url}`"  
           :alt="alt"
           loading="lazy"
        >
    </div>
</template>

<script>
    export default {
        props:['url' , 'alt' ],
    }
</script>