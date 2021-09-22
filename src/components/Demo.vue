
<template>
<div>
<b> Random: </b> {{ (this.rand = 1000) && (rand) }}	
</div>
</template>

<script>
export default {
	data() {
		return  {
			howBig: 10
		}
	},
	computed: {
		rand: {
			get() {
				return Math.floor(Math.random() * this.howBig);
			},
			set(myNumber) {
				this.howBig = myNumber;
			}
		}
	}
};
</script>
