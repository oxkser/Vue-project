<template>
	<div class="activitybox">
		<div class="Acnvabox">
			<div class="navbox">
				<ul>
					<li v-for="item in Acnavlist" :key="item.id" @click="getAct(item.path,item.id)"><router-link :to="item.path" :data-id="item.id">{{item.name}}</router-link></li>
				</ul>
			</div>
		</div>
		<div class="routerbox1"><router-view></router-view></div>
		<div class="page">
			<el-pagination
						  background
						  layout="prev, pager, next"
						  :total="90">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default({
		name:"Activity",
		data(){
			return {
				Acnavlist:[
					{id:1,name:"设计大赛",path:"/design"},
					{id:2,name:"专题策划",path:"/special"},
					{id:3,name:"线上活动",path:"/online"},
					{id:4,name:"线下活动",path:"/underline"}

				]
			}
		},
		methods:{
			getAct:function(path1,id){
				this.$router.push({ path:path1,query:{actID:id}});
			}
		}
	})
</script>

<style scoped>
	*{
		margin:0;
		padding:0;
	}
	.Acnvabox{
		width:100%;
		height:56px;
		background-color:#fff;
	}
	.Acnvabox{
		width:660px;
		height:56px;
		margin:0 auto;
	}
	.Acnvabox ul{
		width:660px;
		height:56px;
		display:flex;
		justify-content: space-around;
		align-items:center;
	}
	.Acnvabox ul li{
		padding:10px 10px;
		list-style: none;
	}
	.Acnvabox ul li a:hover{
		color:#282828;
		border-bottom:1px solid #282828;
	}
	.Acnvabox ul li a{
		height:56px;
		line-height:56px;
		display:inline-block;
		text-decoration: none;
		color:#999;
	}
	.routerbox1{
		margin:0;
		padding:0;
		background-color:#f4f4f4;
	}
	.page{
		width:100%;
		background-color:#F4F4F4 ;
		padding-top:10px;
	}
	.page .el-pagination.is-background .btn-next, .page .el-pagination.is-background .btn-prev, .page .el-pagination.is-background .el-pager li{
		background-color:#fff;
	}
</style>
