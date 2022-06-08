<template>
   <div :tabindex="tabindex" @blur="isActive = false" class="select-container-parent">
      <div class="select-container">
         <p>{{ selected }}</p>
         <font-awesome-icon 
            :class="['select-icon', isActive ? 'open' : '']" 
            icon="angle-down"
            @click="toggleSelect"
         />
      </div>
      <ul v-if="isActive"  class="select-items-wrapper">
         <li v-for="(option , index) of options" :key="index"  @click="isSelected(option)">{{ option }}</li>
      </ul>
   </div>
</template>

<script>
export default {
   name:"CustomSelect",
   props:{
      options:{
         type: Array,
         required: true
      },
      tabindex:{
         type: Number,
         required: false,
         default: 0
      }
   },
   data(){
      return{
         isActive: null,
         selected: this.options.length > 0 ? this.options[0] : null,
      }
   },
   methods:{
      toggleSelect(){
         this.isActive = !this.isActive
      },
      isSelected(value){
         this.isActive = false
         this.selected = value
         this.$emit('input' , value)
      }
   }
}

</script>

<style lang="css" scoped>
   .select-container-parent{
      position: relative;
      outline: none;
   }

   .select-container {
      background: #fff;
      border: 1px solid rgba(0, 0, 0, 0.289);
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      padding: 7px;
   }

   .select-container p {
      color: #000000b4;
      font-size: 14px;
      font-weight: 500;
   }

   .select-container .select-icon {
      color: var(--basecolor);
      padding: .2rem .4rem;
      cursor: pointer;
      transition: .3s ease;
   }

   .select-container .select-icon.open {
      transform: rotate(180deg);
   }

   .select-items-wrapper {
      background: #fff;
      border: 1px solid rgba(0, 0, 0, 0.289);
      border-radius: 2px;
      box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, .1);
      position: absolute;
      width: 100%;
      z-index: 111;
   }

   .select-items-wrapper li{
      padding: 7px;
      cursor: pointer;
      text-align: left;
      font-size: 14px;
      font-weight: 500;
      color: #000000b4;
   }

   .select-items-wrapper li:hover{
      background: #0651435e;
      color: #000;
   }
</style>