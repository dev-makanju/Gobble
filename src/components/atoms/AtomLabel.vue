<template>
    <div>
        <label :for="label.name">
              {{ label.name }}
        </label>
    </div>
</template>

<script>
    export default {
        props:['inputs'],
    }
</script>