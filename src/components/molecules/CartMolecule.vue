<template>
    <div class="header__nav__links">
        <ul class="nav-link-cart" v-for="( cartList , index) in cartLists" :key="index">
            <li>                
                <atom-cart-link :cartList="cartList">
                    <AtomIcon :content="cartList.linkIcon"/>
                </atom-cart-link>
            </li>
        </ul>
        <div v-if="this.$store.getters.isLoggedIn" class="nav-link-cart">
            <router-link class="link update-profile" :to="{name:'Dashboard'}">
                <div v-show="isAdmin" class="nav-link-cart">
                    <font-awesome-icon class="fab-icon nav-flat" icon="dashboard"/>
                    <span class="link update-profile text-nav-dash">Dashboard</span>
                </div>
            </router-link>
        </div>
        <div v-if="!this.$store.getters.isLoggedIn" class="nav-link-cart">
            <router-link class="nav-log" :to="{name:'Login'}">Sign In</router-link>
        </div>
        <div v-if="this.$store.getters.isLoggedIn" class="nav-link-cart">
            <ProfileCard @confirm-delete="$emit('confirm-delete')"/>
        </div>
    </div>
</template>

<script>
    import AtomCartLink from '../atoms/AtomCartLink.vue'
    import ProfileCard from '../molecules/ProfileMoles.vue'
    import AtomIcon from '../atoms/AtomIcon.vue'

    export default {
        name:"CartMolecule",
        props:['cartLists'],
        components:{
            AtomCartLink, AtomIcon, ProfileCard
        },
        data(){
            return{
                isAdmin: null,
            }
        },
        created(){
            this.checkForAdmin();
        },
        methods:{
            checkForAdmin(){
                const role = JSON.parse(window.sessionStorage.vuex)
                if(role.auth.role === "ADMIN"){
                   this.isAdmin = true
                }else{
                    this.isAdmin = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav-flat{
        color: #066350;
        font-size: 20px;
    }

    .text-nav-dash{
        display: none;
    }

    @media (min-width: 600px){
        .text-nav-dash{
           display: block; 
           color: #066350;
        }   
    }


    .header__nav__links{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-link-cart{
        display: inline-flex ;

        & li{
           list-style-type: none ;
           padding: 6px  6px;
           border-radius: 50%;
           font-family: 'Poppins' , sans-serif;
           color: #000;
           margin: 0px 7px ;
        }
        
    }

    .nav-log{
        padding: 5px;
        text-decoration: none;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        border-radius: 10px;
        border: 1px solid #066350;
        color: #066350;
        margin-left: 1.5rem;

        &:hover{
            background: #066350;
            color: #eee;
        }
    }
</style>
