<template>
    <div class="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name:"Loading",
    }
</script>

<style lang="scss" scoped>

.loading{
    width: 30px;
    position: absolute;
    border-radius: 50% ;
    top: 0;
    animation: spin ease 1000ms infinite ;
    transition: 1s all ;

    @keyframes spin{
        to{
           transform: rotateZ(360deg);
        }
    }

    div{
        width:10px ;
        height: 10px ;
        background:#065143 ;
        border-radius: 50%;
    } 

    :nth-child(1){
        margin: auto;
    }
    
    :nth-child(2){
        float: right;
    }

    :nth-child(4){
        margin: auto;
    }
}

</style>