<template>
	<div class="box">
	<productlist1 :product="product"></productlist1>
	</div>
</template>

<script>
import productlist1 from "@/views/public/productlist1"
	export default({
		name:"Recommend",
		components:{
			productlist1
		},
		data(){
			return {
				product:[]
			}
		},
		 mounted: function() {
			console.log("已挂载");
			this.$http
			.get("http://localhost:8081/search")
			.then(response => {
				this.product = response.data;
				console.log(response.data);
			})
			.catch(function(err) {
				console.error(err);
			});
		}
	})
</script>

<style scoped>
*{
		margin:0;
		padding:0;
	}
	.box{
		width:100%;
		background-color:#F4F4F4;
		padding:20px 0;
	}
</style>
