<template>
	<div class="lifebox">
			<div class="line">
				<div>这个城市正在发生</div>
				<div>更多</div>
			</div>
			<div class="life">
			<div class="lifeinforbox">
				<div class="box1">
					<img src="https://img.zcool.cn/community/0319fad5d9ff972a801211d537680c0.jpg@80w_80h_1c_1e_1o_100sh.jpg">
					<div class="name">
						<div>West Nile</div>
						<div>2019-10-11</div>
					</div>
				</div>
				<div class="box2">
					<p>问谁千里伴君行
					晓山别样翠
					秋水镜般明
					—— 辛弃疾</p>
				</div>
				<div class="box3">
					<img src="https://hbimg.huabanimg.com/7bab63e025ea3843d7a7e32862485d04e228ecf54652a-0IBYaD_fw658">
				</div>
				<div class="box4">
					<div><img src="https://img.zcool.cn/community/0319fad5d9ff972a801211d537680c0.jpg@80w_80h_1c_1e_1o_100sh.jpg"></div>
					<div><i class="iconfont icon-zan1">1</i></div>
				</div>
				<div class="box5">
					<p>世事洞明皆学问,人情练达即文章。</p>
				</div>
				<div class="box6">
					<textarea placeholder="说点什么吧" cols="110" rows="3"/>
				</div>
				<div class="box7">
					<div>添加表情</div>
					<div>评论</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name:"CityLife"
	})
</script>

<style scoped>
	*{
		margin:0;
		padding:0;
	}
	.lifebox{
		overflow:hidden;
	}
	.line{
		width:900px;
		height:30px;
		line-height:30px;
		font-size:14px;
		color:#666;
		margin:10px auto;
		margin-top:20px;
		display:flex;
		justify-content: space-between;
	}
	.life{
		width:900px;
		margin:0 auto;
		background-color:#fff;
		padding:30px;
	}
	.box1{
		width:840px;
		height:48px;
		padding-bottom:20px;
		display:flex;
		justify-content: space-between;
		align-items:center;
	}
	.box1 img{
		width:48px;
		height:48px;
		border-radius: 50%;
		margin-left:20px;
	}
	.box1 .name{
		width:750px;
		height:48px;
		text-align:left;
	}
	.box1 .name>div{
		width:120px;
		height:24px;
		line-height:24px;
	}
	.box1 .name>div:first-child{
		color:#282828;
	}
	.box1 .name>div:last-child{
		color:#bbb;
	}
	.box2{
		width:840px;
		height:56px;
		color:#666;
	}
	.box2 p{
		width:840px;
		text-align:left;
	}
	.box3{
		width:840px;
		text-align:left;
	}
	.box3 img{
		width:410px;
	}
	.box4{
		width:900px;
		height:80px;
		border-top:1px solid #eee;
		border-bottom:1px solid #eee;
		margin:10px 0;
		text-align:left;
		display:flex;
		justify-content: space-between;
		align-items:center;
	}
	.box4 img{
		width:30px;
		height:30px;
		border-radius: 50%;
	}
	.box4>div:first-child{
		height:30px;
	}
	.box4>div:last-child{
		width:75px;
		height:30px;
		line-height:30px;
		text-align:center;
		border-radius:15px;
		background-color: #FFE300;
		
	}
	.box5{
		width:840px;
		margin-top:20px;
		line-height:40px;
		text-align:left;
	}
	.box6{
		width:830px;
		height:60px;
	}
	.box6 textarea{
		width:830px;
		height:60px;
		padding:10px 50px 10px 20px;
		background-color:#f4f4f4;
		border:1px solid #ddd;
	}
	.box7{
		width:900px;
		hight:38px;
		margin-top:30px;
		display:flex;
		justify-content: space-between;
		align-items:center;
	}
	.box7>div{
		width:80px;
		height:30px;
		line-height:30px;
		text-align:center;
	}
	.box7>div:first-child{
		color:#666;
	}
	.box7>div:last-child{
		color:#bbb;
		background-color:#eee;
		border-radius:4px;
	}
</style>
