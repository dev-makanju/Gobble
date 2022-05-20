export default {
   data(){
      return{
         showDashboardNavbar: null
      }
   },
   methods:{
      isDashboardActive(){
         this.showDashboardNavbar = true
      },
      closeNavbar(){
         this.showDashboardNavbar = !this.showDashboardNavbar
      }
   },
}