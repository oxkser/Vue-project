<template>
	<div class="Specialbox">
		<PublicW :list="myList" :acttype="actID"></PublicW>
	</div>
</template>

<script>
	import PublicW from "@/views/public/publicW"
	export default({
		name:"Special",
		data(){
			return {
				actID:0,
				myList:[]
			}
		},
		components:{
			"PublicW":PublicW
		},
		mounted(){
			let myurl=`http://localhost:8081/activity?actID=3`;
				console.log(myurl);
				let that=this;
				this.$http({
					method: 'get',
					url:myurl,
					data: {
					}
    			}).then(function(res){
					console.log(res.data);
					that.myList=res.data;
				}).catch(function(err){
					console.log(err);
				})
		}
	})
</script>

<style scoped>
	*{
		margin:0;
		padding:0;
	}
</style>