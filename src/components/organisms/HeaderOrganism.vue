<template>
    <header id="header" class="fixed">
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
        <div class="mobile-search">
            <Search />
        </div>
        <Loading v-if="this.$store.state.isLoadingSearch"/>
    </header>
</template>

<script>
    import Loading from '../Modals/Loader.vue' 
    import Search from '../Modals/PublicSearch.vue'
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
            Search,
            Loading,
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
                curPosition: 0,
                top: null,
                showHeader: null,
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
                        click: homeLog,
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
            addEventListener("scroll" , this.scrollHandler)
        },
        methods:{
            updateCount(){
                if(this.$store.getters.isLoggedIn){
                    this.cartLists.forEach((element) => {
                        element.count = this.count;
                    });
                }
            },
            scrollHandler(){
                const header = document.getElementById('header') 
                if(header === null){
                    return;
                }
                this.top = false;
                if(window.scrollY === 0){
                    this.top = true
                    header.className = 'back-top'
                }
                const st = window.pageYOffset || document.documentElement.scrollTop
                if(this.top == true){
                    //this.showHeader = true;
                    header.className = 'back-top'
                }else if(st > this.curPosition){
                    header.className = 'fixed'
                }else {
                    header.className = 'unfixed'
                    //this.showHeader = false;
                }
                this.curPosition = st
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

.mobile-search{
    display: none;
    width: 80%;
    margin: 0px auto;
    position: absolute;
    right: 0;
    left: 0;
    z-index: 11;
    @media (max-width: 768px) {
        display: block;
    }

    @media (max-width: 450px) {
        width: 95%;
    }
}

.unfixed{
    border-bottom: 1px solid #06514341;
    transform: translateY(-80px);
}

.fixed{
    border-bottom: 1px solid #06514341;
    position: fixed;
    z-index: 222;
    right: 0;
    left: 0;
    top: 0;
    background: #eee;
    transition: .5s ease;
    transform: translateY(0px);
}

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
</style>