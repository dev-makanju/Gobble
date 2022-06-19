<template>
   <Teleport to="body">
      <div class="modal">
         <!--content goes in here--->
			<div class="yellow"></div>
			<div class="red"></div>
			<div class="blue"></div>
			<div class="violet"></div>
      </div>
   </Teleport>
</template>
<script>

export default {
   
}
</script>

<style scoped>

:root {
	--white: #fff;
}

.modal{
	z-index: 333;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #0651437e;
	position:  fixed;
	width: 100%;
	top: 0;
}
div.modal {
	display: flex;
	justify-content: center;
	align-items: center;
}
div > div {
	width: 4vw;
	height: 4vw;
	border-radius: 100%;
	margin: 2vw;
	background-image: linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 100%);
	animation: bounce 1.5s 0.5s linear infinite;
}
.yellow {
	background-color: var(--white);
}

.red {
	background-color: var(--white);
	animation-delay: 0.1s;
}

.blue {
	background-color: var(--white);
	animation-delay: 0.2s;
}

.violet {
	background-color: var(--white);
	animation-delay: 0.3s;
}

@keyframes bounce {
	0%, 50%, 100% {
		transform: scale(1);
		filter: blur(0px);
	}
	25% {
		transform: scale(0.6);
		filter: blur(3px);
	}
	75% {
		filter: blur(3px);
		transform: scale(1.4);
	}
}
</style>