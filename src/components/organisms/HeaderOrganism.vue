<template>
    <header>
        <div class="header">            
            <div class="header-nav">
                <AtomText :tag="'h1'" :content="'Gobble'"/>
            </div>
            <div class="header-nav">
                <ListMolecule :urlLists="urlLists"/>
            </div>
            <div class="header-nav">
                <CartMolecule :cartLists="cartLists"/>
            </div>
        </div>
    </header>
</template>

<script>
    import styleObjects from '../molecules/HeaderMoles/ListStyle.js'
    import ListMolecule from '../molecules/HeaderMoles/ListMolecules.vue'
    import AtomText from '../atoms/AtomText.vue'
    import CartMolecule from '../molecules/CartMolecule.vue'

    export default {
        name:'HeaderOrganism',
        components:{
            ListMolecule,
            AtomText, 
            CartMolecule,
        },
        data(){
            return{
                urlLists:[
                    {
                        compName:'',
                        linkTitle:'Menu',
                        styleObjects:styleObjects
                    },
                    {
                        compName:'',
                        linkTitle:'Offer',
                        styleObjects:styleObjects
                    },
                    {
                        compName:'',
                        linkTitle:'Foods',
                        styleObjects:styleObjects
                    },
                ],
                cartLists:[
                    {
                        compName:'',
                        linkIcon:'heart',
                    },
                    {
                        compName:'',
                        linkIcon:'cart-shopping',
                    },
                ]
            }
        },
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>
header{
    .header{
        width: 80%;
        margin: 0px auto;
        display: flex;
        justify-content: space-between ;
        align-items: center;
    }

}

</style>