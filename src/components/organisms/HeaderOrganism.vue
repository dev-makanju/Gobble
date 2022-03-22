<template>
    <header>
        <div class="header">            
            <div class="header-nav">
                <AtomText :tag="'h1'" :content="'Gobble'"/>
            </div>
            <div class="header-nav">
                <ListMolecule 
                   :urlLists="urlLists"/>
            </div>
            <div class="header-nav">
                <CartMolecule 
                   :cartLists="cartLists"/>
            </div>
        </div>
    </header>
</template>

<script>

    import styleObjects from '../molecules/HeaderMoles/ListStyle.js'
    import ListMolecule from '../molecules/HeaderMoles/ListMolecules.vue'
    import AtomText from '../atoms/AtomText.vue'
    import CartMolecule from '../molecules/CartMolecule.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'HeaderOrganism',
        components:{
            ListMolecule,
            AtomText, 
            CartMolecule,
        },
        data(){
            let onClick = () => {
                this.$store.dispatch('openCart');
            }
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
                        compName:'Home',
                        linkIcon:'home',
                    },
                    {
                        compName:'MarketPlace',
                        linkIcon:'cart-shopping',
                        click:onClick,
                        count: 0,
                    },
                ]
            }
        },
        methods:{
            updateCount(){
                this.cartLists.forEach((element) => {
                    element.count = this.getCount;
                });
            }
        },
        computed:{
            ...mapState(['cartCount']),

            getCount: function(){
               return this.$store.state.cartCount
            }
        },
        watch:{
            '$store.state.cartCount': function(){
               this.updateCount()
            }
        }
    }
</script>

<style lang="scss" scoped>
header{
    .header{
        width: 90%;
        margin: 0px auto;
        display: flex;
        justify-content: space-between ;
        align-items: center;
        padding: 20px 4px;

        @media (min-width:768px) {              
            width: 80%;
        }
    }
}
</style>