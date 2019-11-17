<template>
	<div class="Recentbox">
		<Display :list="list"></Display>
	</div>
</template>

<script>
	import Display from "@/views/public/public"
	export default({
		name:"Select",
		data(){
			return {
				list:[]
			}
		},
		components:{
			"Display":Display
		},
		mounted:function(){
			console.log("已挂载");
			this.$http
			.get("http://localhost:8081/sort")
			.then(response => {
				this.list = response.data.result1;
				console.log(response.data);
			})
			.catch(function(err) {
				console.error(err);
			});				
		}
	})
</script>

<style scoped>
	.Recentbox{
		width:678px;
	}	
</style>
