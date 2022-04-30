<template>
    <div class>
        <img 
           :src="url"  
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