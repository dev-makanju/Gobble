<template>
    <footer>
        <div class="footer">
            <div class="footer-link">
                <div class="footer-info">
                     <AtomText :tag="'h1'" :content="'Gobble'"/>
                </div>
                <div class="footer-info">
                    <AtomText :tag="'p'" :content="'we are always available 24 ours all day.'"/>
                </div>
                <CartMolecule :cartLists="cartLists"/>
            </div>
            <div class="footer-link">
                <div class="footer-info">
                    <AtomText :tag="'h3'" :content="'Support'"/>
                </div>
                <linksMolecules :urlLists="support"/>
            </div>
            <div class="footer-link">
                <div class="footer-info">
                    <AtomText :tag="'h3'" :content="'Our Menu'"/>
                </div>
                <linksMolecules :urlLists="menu"/>
            </div>
            <div class="footer-link">
                <div class="footer-info">
                    <AtomText :tag="'h3'" :content="'Useful Link'"/>
                </div>
                <linksMolecules :urlLists="links"/>
            </div>
            <div class="footer-link">
                <div class="footer-info">
                     <AtomText :tag="'h3'" :content="'Get in touch'"/>
                </div>
                 <linksMolecules :urlLists="contact"/>
            </div>
        </div>
    </footer>
</template>

<script>
    import styleObjects from '../molecules/HeaderMoles/ListStyle.js'
    import AtomText from '../atoms/AtomText.vue'
    import CartMolecule from '../molecules/CartMolecule.vue'
    import linksMolecules from '../molecules/FooterMoles/LinksMolecules.vue'

    export default {
        name:"FooterOrganism",
        components:{
            AtomText,
            CartMolecule,
            linksMolecules,
        },
        data(){
            let onClick = () => {
                this.$store.dispatch('openCart');
            }
            let  homeLog = () => {
                if(this.$route.path != '/'){
                    this.$router.push('/')
                }
            }
            return{
                cartLists:[
                    {
                        compName:'',
                        linkIcon:'home',
                        click:  homeLog,
                        styleObjects:styleObjects

                    },
                    {
                        compName:'',
                        click: onClick,
                        linkIcon:'cart-shopping',
                        styleObjects:styleObjects
                    },
                ],
                support:[
                    {
                        compName:'Home',
                        linkTitle:'Account',
                        styleObjects:styleObjects
                    },
                    {
                        compName:'Home',
                        linkTitle:'Support center',
                        styleObjects:styleObjects
                    },
                    {
                        compName:'Home',
                        linkTitle:'Feedback',
                        styleObjects:styleObjects
                    },
                    {
                        compName:'Home',
                        linkTitle:'Accesibility',
                        styleObjects:styleObjects
                    },
                ],
                menu:[
                    {
                        compName:'Home',
                        linkTitle:'Special',
                        styleObjects:styleObjects
                    },
                    {
                        compName:'Home',
                        linkTitle:'Popular',
                        styleObjects:styleObjects
                    },
                    {
                        compName:'Home',
                        linkTitle:'Cartigory',
                        styleObjects:styleObjects
                    },
                ],
                links:[
                    {
                        compName:'Home',
                        linkTitle:'Payment',
                        styleObjects:styleObjects
                    },
                    {
                        compName:'Home',
                        linkTitle:'Terms of Service',
                        styleObjects:styleObjects
                    },
                    {
                        compName:'Home',
                        linkTitle:'Privacy Policy',
                        styleObjects:styleObjects
                    },
                    {
                        compName:'Home',
                        linkTitle:'About Us',
                        styleObjects:styleObjects
                    },
                ],
                contact:[
                    {
                        compName:'Home',
                        linkTitle:'Makurseme@gmail.com',
                        styleObjects:styleObjects
                    },
                    {
                        compName:'Home',
                        linkTitle:'Obafemi Awolowo way Osun state',
                        styleObjects:styleObjects
                    },
                ]
            }
        }   
    }
</script>

<style lang="scss" scoped>
footer{
    background: #A8B087 ;
    border-radius: 10px 10px 0px 0px;

    .footer{
        width: 90%;
        margin: 0px auto;
        display: flex;
        flex-direction: row ;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        
        @media (min-width:768px) {      
            width: 90%;
            padding: 10px;   
        }

        & .footer-link{
           min-height: 250px;

           & .footer-info{
               padding: 20px 5px;
           }
        }
    }
}
</style>