<template>
   <div class="dashboard">
      <!--new order--->
      <div class="pad">
          <div class="dashboard__cards">
            <div class="dashboard__details">
               <h5>New Orders</h5>
            </div>
            <div class="dashboard__details">
               <h1>100</h1>
            </div>
            <div class="dashboard__details det">
               <div class="child">
                     <router-link class="link-det" to="">See Details</router-link>
               </div>
               <div class="child green icon">
                     <font-awesome-icon  icon="dashboard"/>
               </div>
            </div>
          </div>
      </div>
      <!--Customers--->
      <div class="pad">
         <div class="dashboard__cards">
          <div class="dashboard__details">
              <h5>Customers</h5>
          </div>
          <div class="dashboard__details">
              <h1>5,310</h1>
          </div>
          <div class="dashboard__details det">
              <div class="child">
                  <router-link class="link-det" to="">See Details</router-link>
              </div>
              <div class="child pink icon">
                  <font-awesome-icon  icon="dashboard"/>
              </div>
         </div>
      </div>
      </div>
      <!---total earnings--->
      <div class="pad">
         <div class="dashboard__cards">
          <div class="dashboard__details">
              <h5>Profits</h5>
          </div>
          <div class="dashboard__details">
              <h1>1,310</h1>
          </div>
          <div class="dashboard__details det">
              <div class="child">
                  <router-link class="link-det" to="">See Details</router-link>
              </div>
              <div class="child blue icon">
                  <font-awesome-icon  icon="dashboard"/>
              </div>
         </div>
      </div>
      </div>
      <!--earning--->
      <div class="pad">      
         <div class="dashboard__cards">
          <div class="dashboard__details">
              <h5>Earning</h5>
          </div>
          <div class="dashboard__details">
              <h1>3,310</h1>
          </div>
          <div class="dashboard__details det">
              <div class="child">
                  <router-link class="link-det" to="">See Details</router-link>
              </div>
              <div class="child yellow icon">
                  <font-awesome-icon  icon="dashboard"/>
              </div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>

export default {
   name: "DashboardSliderOrgs",
} 
</script>

<style lang="scss" scoped>

//slider icon default

//fallback for gap samsung devices or outdated chrome. 
.pad{
   padding: 5px;
}

.icon{
   padding: .5rem;
   box-shadow: 0px 2px 27px 6px rgba(0 , 0 , 0 , .1);
   border-radius: 5px ;
}

.link-det{
   color: rgb(169, 166, 166);
   font-weight: 600;
}

.green{
   color: green;
   background: rgba(8, 184, 8, 0.312);
}

.blue{
   color: blue;
   background: rgba(0, 0, 255, 0.193);
}

.yellow{
   color: yellow ;
   background: rgba(255, 255, 0, 0.207) ;
}

.pink{
   color: pink ;
   background: rgba(255, 192, 203, 0.261) ;
}

.dashboard{
   display: flex;
   justify-content: center;
   gap: 4px;
   margin-top: 3rem;
   overflow-x: auto;
   flex-wrap: nowrap;
   border: 1px solid red;
   padding: 1rem 10px;

   -webkit-overflow-scrolling: touch;

   &::-webkit-scrollbar{
      display: none;
   }

   &__cards{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
   }

   &__cards{
      background: #fff;
      padding: 10px 10px;
      box-shadow: 0px 2px 27px 6px rgba(0 , 0 , 0 , .1);
      border-radius: 5px; 
      width: 250px;
      height: 150px;
   }

   &__details{
      &>h1{
         font-family: 'Mochiy Pop P One', sans-serif;
         color: #065143;    
      }

      &>h5{
         font-family: 'Mochiy Pop P One', sans-serif;
         color: rgb(169, 166, 166);
         padding: 5px;
         font-size: 10px;
      }

      &.det{
         display: flex;
         justify-content: space-between ;
         align-items: center;
      }
   }
}

</style>

