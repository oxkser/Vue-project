<template>
	<div class="citybox">
		<div class="imgbox">
			<div class="image">
				<img src="https://img.zcool.cn/community/017a005a2fb491a80121db80ff9867.jpg">
			</div>
			<div class="city-infor">
				<div class="box1">
					<div>人气</div>
					<div>144458</div>
				</div>
				<div class="box2">
					<div>创作</div>
					<div>288973</div>
				</div>
				<div class="box3">成都</div>
				<div class="box4">
					<div>设计师</div>
					<div>123334</div>
				</div>
				<div class="box5">
					<div>生活圈</div>
					<div>2234</div>
				</div>
			</div>
		</div>
		<div class="routerbox">
			<div class="router">
				<router-link to="./cityhome">首页</router-link>
				<router-link to="./citycreate">创作</router-link>
				<router-link to="./citylife">生活圈</router-link>
				<router-link to="./citydesigner">设计师</router-link>
			</div>
		</div>
		<div class="routerViewbox">
			<div class="routerView"><router-view></router-view></div>
		</div>
	</div>
</template>

<script>
	export default({
		name:"City"
	})
</script>

<style scoped>
	*{
		margin:0;
		padding:0;
	}
	.imgbox{
		width:100%;
		height:344px;
		background-color:#282828;
	}
	.image{
		width:1264px;
		height:344px;
		margin:0 auto;
		overflow: hidden;
	}
	.image img{
		position:relative;
		top:0;
		left:50%;
		margin-left:-1280px;
	}
	.city-infor{
		width:1130px;
		height:95px;
		position:absolute;
		top:320px;;
		left:50%;
		color: #ECF5FF;
		margin-left:-565px;
		display:flex;
		justify-content: space-around;
		align-items:center;
	}
	.city-infor>div:nth-child(3){
		font-size:34px;
	}
	.city-infor>div div:nth-child(1){
		color:#bbb;
	}
	.city-infor>div div:nth-child(2){
		font-size:24px;
		margin-top:10px;
	}
	.routerbox{
		width:100%;
		height:86px;
		overflow:hidden;
	}
	.router{
		width:1000px;
		height:55px;
		margin:0 auto;
		color:#999;
		margin-top:30px;
		display: inline-block;
	}
	.router a{
		display:inline-block;
		height:55px;
		line-height:55px;
		padding:0 35px;
		text-decoration: none;
		font-size:16px;
		color:#999;
	}
	.router a:hover{
		color:#282828;
		border-bottom: 1px solid #409EFF;
	}
	.routerViewbox{
		width:100%;
		background-color:#F4F4F4;
		
	}
	.routerView{
		width:1190px;
		margin:0 auto;
	}
</style>
