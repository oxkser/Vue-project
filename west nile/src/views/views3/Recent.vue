<template>
	<div class="Recentbox">
		<Display :list="TimeSort"></Display>
	</div>
</template>

<script>
	import Display from "@/views/public/public"
	export default({
		name:"Recent",
		data(){
			return {
				list:[]
			}
		},
		components:{
			"Display":Display
		},
		computed:{
			TimeSort(){
				let temp;
				for(let i=0;i<this.list.length-1;i++){
					for(let j=i;j<this.list.length-1;j++){
						if(parseInt(this.list[i].time)>parseInt(this.list[j].time)){
							temp=this.list[i];
							this.list[i]=this.list[j];
							this.list[j]=temp;
						}
					}
				}
				return this.list;
			}
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
