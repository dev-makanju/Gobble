<template>
    <div class>
        <img 
           :src="image.url"  
           :alt="image.alt" 
           :style="image.styleObjects"
        >
    </div>
</template>

<script>
    export default {
        props:['image'],
    }
</script>