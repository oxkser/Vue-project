<template>
	<div class="cityhomebox">
		<el-container class="container">
			<el-aside class="aside1" width="678px">
				<el-header class="leftheader">
					<div class="littlebox">创作</div>
					<div class="bigbox">
						<router-link to="/select">编辑精选</router-link>
						<router-link to="/recent">最近发布</router-link>
					</div>
					<div class="littlebox">更多</div>
				</el-header>
				<el-main class="mainbox">
					<router-view></router-view>
				</el-main>
			</el-aside>
			<el-main>
				<el-header class="rightheader">
					<div><i class="el-icon-upload"></i></div>
					<div><i class="el-icon-s-custom"></i></div>
					<div><i class="el-icon-date"></i></div>
				</el-header>
				<el-main class="rightmain">
					<div class="lifebox">
						<div class="box1">热门生活圈</div>
						<div class="box2">
							<div>
								<img src="https://img.zcool.cn/community/0102bf5db856eda8012163ba373302.jpg@520w_390h_1c_1e_1o_100sh.jpg" alt="">
							</div>
							<div>
								<div>名称</div>
								<div>一天前</div>
							</div>
							<div>关注</div>
						</div>
						<div class="box3">
							<img src="https://img.zcool.cn/community/0160375db7d068a8012163babca6be.jpg@1213x0-5rc%7C300w_300h_1l%7C2o">
						</div>
						<div class="box4">
							<div>
								<img src="https://img.zcool.cn/community/0160375db7d068a8012163babca6be.jpg@1213x0-5rc%7C300w_300h_1l%7C2o">
								<img src="https://img.zcool.cn/community/0160375db7d068a8012163babca6be.jpg@1213x0-5rc%7C300w_300h_1l%7C2o">
							</div>
							<p>等8人赞</p>
							<i>点赞</i>
						</div>
						<div class="box5">
							<span>名称</span>
							<span>下周微信分享</span>
						</div>
						<div class="more">查看更多</div>
					</div>

				</el-main>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	export default ({
		name: "CityHome",
		data() {
			return {

			}
		}
	})
</script>

<style scoped>
	*{
		margin:0;
		padding:0;
	}
	main.mainbox {
		padding: 10px 0;
	}

	section.container {
		width: 1100px;
		margin: 0 auto;
	}

	.el-header>div {
		line-height: 55px;
		color: #282828;
	}

	.littlebox {
		width: 100px;
		height: 55px;
	}

	.bigbox,
	.bigbox a {
		width: 500px;
		height: 55px;
		color: #999;
		text-decoration: none;
	}

	.bigbox a {
		padding: 0 15px;
	}

	header.el-header.leftheader {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		margin-top: 20px;
		border-radius: 5px;
	}

	main.rightmain {
		padding: 15px 20px;
	}

	/* aside.aside1{
		margin-left:30px;
	} */
	header.rightheader {
		width: 400px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	header.rightheader>div {
		width: 118px;
		height: 55px;
		/* margin:0 1px; */
		background-color: #fff;
		border-radius: 3px;
		;
	}

	header.rightheader>div:hover {
		background-color:#A0CFFF;
	}

	.lifebox {
		width: 360px;
		height: 620px;
		border-radius: 3px;
		background-color: #fff;
	}

	.lifebox .box1 {
		width: 320px;
		height: 55px;
		padding: 0 20px;
		line-height: 55px;
		text-align: left;
		color: #282828;
		border-bottom: 1px solid #f4f4f4;
	}

	.lifebox .box2 {
		width: 360px;
		height: 60px;
		color: #282828;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.lifebox .box2 div img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}

	.lifebox .box2>div:nth-child(1) {
		width: 48px;
		height: 48px;
	}

	.lifebox .box2>div:nth-child(2) {
		width: 150px;
		height: 40px;
		font-size: 14px;
		line-height: 20px;
		color: #282828;
		text-align: left;
	}

	.lifebox .box2>div:nth-child(3) {
		width: 80px;
		height: 35px;
		line-height: 35px;
		background-color: #ffe300;
		border-radius: 5px;
	}

	.lifebox .box3 {
		width: 360px;
		height: 320px;
	}

	.lifebox .box3 img {
		width: 320px;
		height: 320px;
		margin: 0 auto;
	}

	.lifebox .box4 {
		width: 320px;
		height: 65px;
		padding: 0 20px;
		border-bottom: 1px solid #F4F4F4;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.lifebox .box4>div img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}

	.lifebox .box4>div {
		width: 70px;
		display: inline-block;
		display: flex;
		justify-content: space-around;
	}

	.lifebox .box4 p {
		width: 6s0px;
		height: 20px;
		font-size: 14px;
		color: #bbb;
		line-height: 20px;
	}

	.lifebox .box5 {
		width: 320px;
		padding: 0 20px;
		height: 65px;
		line-height: 65px;
		font-size: 14px;
		text-align: left;
		border-bottom: 1px solid #F4F4F4;
	}

	.lifebox .box5>span:nth-of-type(1) {
		color: #282828;
		font-weight: bold;
	}

	.lifebox .box5>span:nth-of-type(2) {
		color: #666;
	}
</style>
