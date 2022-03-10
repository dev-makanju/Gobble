<template>
    <component :is='tag'>{{ content }}</component>
</template>

<script>
    export default{
        name:"AtomText",
        props:['tag' , 'content']
    }
</script>
