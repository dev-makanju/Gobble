<template>
    <component :is="tags">
       {{ text.name }}
    </component>
</template>

<script>
    export default{
        name:"AtomText",
        props:['text']
    }
</script>
