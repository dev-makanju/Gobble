<template>
    <div>
       <LoginTemplate/>
    </div>
</template>

<script>

//import the base UI template
import LoginTemplate from '../components/Admin/templates/LoginTemplate.vue'

export default {
    name: 'Login',
    components: {
       LoginTemplate,
    },
}

</script>