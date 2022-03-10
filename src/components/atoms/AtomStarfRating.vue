<template>
    <div>
        <span :style="styleObjects">
            &starf;</span>
    </div>
</template>

<script>
    export default {
        name:'AtomStarf',
        props:['styleObjects']
    }
</script>
