<template>
    <div>
        <input 
            :type="inputs.type" 
            :id="inputs.id"  
            :placeholder="inputs.placeHolder"
            :style="inputs.painting">
    </div>
</template>

<script>
    export default {
        props:['inputs'],
    }
</script>