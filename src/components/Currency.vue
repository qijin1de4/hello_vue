<template>
{{dollar(amt)}}	
</template>

<script>
export default ({
	name:'Currency',
	props:['amt'],
	methods:{
		dollar(ammount){
			return '$' + Number.parseFloat(ammount).toFixed(2)
		}
	}
})
</script>
