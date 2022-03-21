<template>
    <div class="modal">
          <div class="modal__alert">
              <div class="dissable">
                    <font-awesome-icon style="float:right;cursor:pointer" @click="$emit('dissable-overlay')" icon="times"/>
              </div>
              <font-awesome-icon class="alert__check" icon="check"/>
              <p style="margin-top: 10px; font-size: 25px;">{{ message }}</p>
          </div>
    </div>
</template>

<script>
    export default {
        name:"Modal",
        props:['message']
    }
</script>

<style lang="scss" scoped>
    .modal{
        position: fixed ;
        top: 0px ;
        bottom: 0px ; 
        background: rgba(0, 0, 0, 0.774);
        z-index: 111;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center ;
        justify-content: center ;
    
        &__alert{
           width: 400px ;
           height: 200px;
           border-radius: 5px ;
           background: #eee ;
           z-index: 222 ;
           padding: 5px ;
           display: flex ;
          
           flex-direction: column;
           align-items: center;
        }

        .dissable{
            width: 100%;
        }

        .alert__check{
           font-size: 60px;
           background: #065143 ;
           border-radius: 50%;
           margin-top: 20px;
           padding: 10px;
           color: #eee;
        }
    }
</style>