<template>
	<div class="box">

		<div class="en-hender">
			<div class="en-div">优质企业推荐</div>
			<ul class="hender-ul">
				<li v-for="item in imglist" :key='item.id'>
					<img class="hender-img" :src="item.imgsrc" alt="">
				</li>
			</ul>
		</div>
		<div class="content">
			<!-- 左侧内容 -->
			<div class="content-lf">
				<!-- 工作地点和类型选择 -->
				<div class="work-box">
					<div class="work-nav">
						
					</div>
				</div>
			</div>
			<!-- 右侧内容 -->
			<div class="content-ri">
				<div class="ent-hender">常驻企业</div>
				<div class="ent-content" v-for="item in recruit" :key='item.id'>
					<img class="en-img" :src="item.enimg" alt="">
					<div class="bus-box">
						<div class="bus-name">
							<a class="bus-name-a" href="#">{{item.name}}</a>
						</div>
						<div class="post-inf">
							<span class="post-num">{{item.num}}</span>
							<span class="post-recruit">职位正在招聘</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "enterprise",
		data() {
			return {
				imglist: [{
						id: 1,
						imgsrc: 'https://img.zcool.cn//job/f_focus/d8195d9c5f140000017e35e61668.jpg'
					},
					{
						id: 2,
						imgsrc: 'https://img.zcool.cn//job/f_focus/36b85d9d9e1a0000017e359a81e4.jpg'
					},
					{
						id: 3,
						imgsrc: 'https://img.zcool.cn//job/f_focus/b42d5da536f800000129ce70b934.jpg'
					},
					{
						id: 4,
						imgsrc: 'https://img.zcool.cn//job/f_focus/f9ea5da6d2ed00000129ced33a49.png'
					},
					{
						id: 5,
						imgsrc: 'https://img.zcool.cn//job/f_focus/79055dad7fd700000129ce67628a.jpg'
					}
				],
				recruit: [{
						id: 1,
						enimg: 'https://img.zcool.cn/community/047bab555ecc29000001fbab3d0d8e.jpg',
						name: "新艺联",
						num: "4"
					},
					{
						id: 2,
						enimg: 'https://img.zcool.cn/community/00863e59dd8385a8012044639936d3.jpg',
						name: "JAN_Creation",
						num: "10"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.box {
		background-color: #F2F2F2;
		padding-top: 40px;
	}

	.en-hender {
		width: 1080px;
		margin-left: 132px;
		background-color: #fff;
	}

	.en-div {
		width: 1080px;
		height: 56px;
		line-height: 56px;
	}

	ul,
	li {
		list-style: none;
	}

	.en-hender .hender-ul {
		display: flex;
		flex-wrap: nowrap;
		margin: 0 auto;
		padding: 20px 40px
	}

	.hender-img {
		width: 148px;
		height: 148px;
		margin: 10px;
		border: solid 1px #EDEDED;
	}

	/* 内容 */
	.content {
		width: 1080px;
		margin-top: 28px;
		display: flex;
		justify-content: center;
		margin-left: 132px;
		/*  */
	}

	/* 内容左边 */
	.content-lf {
		width: 790px;
	}
	.work-box{
		height: 154px;
		background-color: #fff;
	}

	/* 内容的右边 */
	.content-ri {
		width: 260px;
		margin-left: 40px;
		background-color: #fff;
	}

	.ent-hender {
		height: 56px;
		line-height: 56px;
		text-align: left;
		padding: 0 25px;
	}

	.ent-content {
		height: 54px;
		text-align: left;
		padding: 0 25px;
		margin-bottom: 25px;
		display: flex;
	}

	.bus-box {
		padding-left: 20px;
	}

	.bus-name {
		font-size: 18px;
		padding-bottom: 10px;
	}

	.bus-name-a {
		text-decoration: none;
		color: #282828;
	}

	.post-num {
		color: #ff8600;
		font-weight: 600;
	}

	.post-recruit {
		font-size: 14px;
	}

	.en-img {
		width: 52px;
		height: 52px;
	}
</style>
