<template>
    <header>
        <div class="header">          
            <div class="header-nav">
                <div id="top"></div>
                <AtomText :tag="'h1'" :content="'Gobble'"/>
            </div>
            <div class="header-nav">
                <ListMolecule 
                    :urlLists="urlLists"
                />
            </div>
            <div class="header-nav">
                <CartMolecule 
                   :cartLists="cartLists"
                   @confirm-delete="$emit('confirm-delete')"
                />
            </div>
        </div>
    </header>
</template>

<script>

    import styleObjects from '../molecules/HeaderMoles/ListStyle.js'
    import ListMolecule from '../molecules/HeaderMoles/ListMolecules.vue'
    import AtomText from '../atoms/AtomText.vue'
    import CartMolecule from '../molecules/CartMolecule.vue'
    import { mapGetters } from 'vuex'

    export default {
        name: 'HeaderOrganism',
        components:{
            ListMolecule,
            AtomText, 
            CartMolecule,
        },
        data(){
            let onClick = () => {
                if(this.$store.getters.isLoggedIn){
                    this.$store.dispatch('openCart');
                    return;
                }this.$router.push('/login')   
            }
            let  homeLog = () => {
                if(this.$route.path != '/'){
                    this.$router.push('/')
                }
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
                        linkTitle:'Foods',
                        styleObjects:styleObjects
                    },
                ],
                cartLists:[
                    {
                        compName:'Home',
                        linkIcon:'home',
                        click: homeLog
                    },
                    {
                        compName:'MarketPlace',
                        linkIcon:'cart-shopping',
                        click: onClick,
                        count: 0,
                    },
                ]
            }
        },
        mounted(){
            this.updateCount()
        },
        methods:{
            updateCount(){
                if(this.$store.getters.isLoggedIn){
                    this.cartLists.forEach((element) => {
                        element.count = this.count;
                    });
                }
            }
        },
        computed:{
            ...mapGetters('cart', {
               count: 'getCartCount',    
            }),
        },
        watch:{
            count: function(){
               this.updateCount()
            }
        }
    }
</script>

<style lang="scss" scoped>
header{
    border-bottom: 1px solid #06514341;
    .header{
        width: 90%;
        max-width: 1440px;
        margin: 0px auto;
        display: flex;
        justify-content: space-between ;
        align-items: center ;
        padding: 10px 0px;

        @media (min-width:768px) {              
            width: 90%;
        }
    }
}
</style>