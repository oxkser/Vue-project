<template>
	<div class="box">
	<productlist1 :product="TimeSort"></productlist1>
	</div>
</template>

<script>
import productlist1 from "@/views/public/productlist1"
	export default({
		name:"Release",
		components:{
			productlist1
		},
		data(){
			return {
				product:[]
			}
		},
		computed:{
			TimeSort(){
				let temp;
				for(let i=0;i<this.product.length-1;i++){
					for(let j=i;j<this.product.length-1;j++){
						if(parseInt(this.product[i].time)>parseInt(this.product[j].time)){
							temp=this.product[i];
							this.product[i]=this.product[j];
							this.product[j]=temp;
						}
					}
				}
				return this.product;
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
