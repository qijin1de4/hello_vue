<template>
	<div :class="[(type ? 'alert-'+type : 'alert-secondary'), (close ? 'alert-dismissble' : '')]"
	class = "alert" role="alert">
		<slot>Congrats on some items in your cart.</slot>
		<butto v-if="close" @click="closeButton" type="button" class="btn-close" arial-label="Close" />
	</div>
</template>

<script>
export default ({
	props:['type','close'],
	methods:{
		closeButton() {
			event.target.parentNode.remove();
		}
	}
})
</script>
