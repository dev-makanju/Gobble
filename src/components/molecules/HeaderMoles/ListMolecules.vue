<template>
    <div>
        <ul class="nav-link-wrapper" v-for="(urlList , index) in urlLists" :key="index">
            <li>
                <AtomLink :url="urlList" class="link"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import AtomLink from '../../atoms/AtomLink.vue'

    export default {
        name:"ListMolecule",
        components:{
            AtomLink,
        },
        props:['urlLists'],
    }
</script>

<style lang="scss" scoped>
    .nav-link-wrapper{
        display: inline-flex;

        & li{
           list-style-type: none ;
           padding: 7px ;
        }

    }
</style>
