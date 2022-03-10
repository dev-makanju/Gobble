<template>
    <div>
        <font-awesome-icon :icon="icon.name"/>
    </div>
</template>

<script>
    export default {
        name:"AtonIcon",
        props:['icon'],
    }
</script>