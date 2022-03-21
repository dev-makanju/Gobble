<template>
    <component :is='tag' :style="myStyle">{{ content }}</component>
</template>

<script>
    export default{
        name:"AtomText",
        props:['tag' , 'content' , 'myStyle']
    }
</script>
