<template>
	<div class="post-box">
		<div class="hender-box">
			<img src="" alt="">
			<div class="rel-post">
				<button class="rel-but">立即发布职位</button>
			</div>
			<div class="post-auth">
				还没有认证站酷官方帐号?
				<router-link to='/authentic' class="auth">免费去认证>></router-link>
				<router-view></router-view>
			</div>
		</div>
		<!-- 为何招聘设计师盒子 -->
		<div class="use-box">
			<div class="use-title">
				<strong>为什么使用站酷招聘设计师</strong>
			</div>
			<div class="use-content" v-for="item in uselist" :key="item.id">
				<img class="use-img" :src="item.imgs" alt="">
				<h3>{{item.title1}}</h3>
				<h5>{{item.title2}}<br />{{item.title3}}</h5>
			</div>
		</div>
		<!-- 招聘设计师盒子 -->
		<div class="demand-box" v-for="item in demand" :key="item.id">
			<div class="demand-title">
				<strong>{{item.name}}</strong>
			</div>
			<div class="demand-content">
				<img :src="item.deimg" alt="">
			</div>
		</div>
		<!-- 服务价格的盒子 -->
		<div class="peice-box">
			<div class="peice-title">
				<strong>服务价格公示</strong>
			</div>
			<div class="mypeice" v-for="item in peice" :key="item.id">
				<div class="jop-req">
					不限职位数<br />
					<strong class="job-pay">{{item.jobpay}}</strong>/{{item.iobtime}}
					<br />
					<span class="save-pay">{{item.savepay}}</span>
				</div>
				<div class="job-wel">{{item.jobwel}}</div>
			</div>
		</div>
		<!-- 价格底部盒子 -->
		<div class="jop-foot-box">
			<div class="job-post">
				<button class="rel-but job-but">立即发布职位</button>
			</div>
			<div class="job-qut-box">
				<img src="https://static.zcool.cn/v2620807/job/job2016/tag/job/images/jieshao-6.png" alt=""/>
			</div>
		</div>
	</div>
</template>

<script>
	// 导入本地图片
	// import imgs1 from "../assets/renxiang.png"
	// import imgs2 from "../assets/xiaoxi.png"
	// import imgs3 from "../assets/yunpingtai.png"
	// import imgs4 from "../assets/qian.png"

	export default {
		name: "post",
		data() {
			return {
				uselist: [{
						id: 1,
						imgs: imgs1,
						title1: '资源丰富，设计师扎堆',
						title2: '每日超过70万设计师在线',
						title3: '国内设计师聚集地'
					},
					{
						id: 2,
						imgs: imgs2,
						title1: '专业社区，更懂设计',
						title2: '专注设计领域，以展示设计师作品',
						title3: '为核心的产品设计'
					},
					{
						id: 3,
						imgs: imgs3,
						title1: '智能算法，帮你排序',
						title2: '智能算法让你',
						title3: '快速找到合适的设计师'
					},
					{
						id: 4,
						imgs: imgs4,
						title1: '支付简易，发票便捷',
						title2: '线上付款及发票申领流程',
						title3: '高效简单'
					}
				],
				demand: [{
						id: 1,
						name: "他们正在站酷招聘设计师",
						deimg: "https://static.zcool.cn/v2620754/job/job2016/tag/job/images/jieshao-3.png"
					},
					{
						id: 2,
						name: "找设计师，用站酷招聘",
						deimg: "https://static.zcool.cn/v2620754/job/job2016/tag/job/images/jieshao-4.png"
					}
				],
				peice:[{
					id:1,
					jobpay:"1800元",
					iobtime:"月",
					savepay:"",
					jobwel:'适合大中型企业，满足同时招聘多个职位的需求'
				},
				{
					id:2,
					jobpay:"8800元",
					iobtime:"半年",
					savepay:"最高节省2000",
					jobwel:'适合大中型企业，满足同时招聘多个职位的需求，长期使用价格更优惠'
				},
				{
					id:3,
					jobpay:"13200元",
					iobtime:"年",
					savepay:"最高节省8400",
					jobwel:'适合大中型企业，满足同时招聘多个职位的需求，单价最低'
				}
				]
			}
		}
	}
</script>

<style scoped>
	.post-box {
		width: 1080px;
		text-align: center;
		margin: 0 150px;
		position: relative;
	}

	.rel-post {
		position: absolute;
		top: 259px;
		left: 448px;
	}

	.hender-box {
		height: 480px;
		text-align: center;
		padding-top: 20px;
	}

	.rel-but {
		width: 180px;
		height: 48px;
		padding: 0;
		font-size: 18px;
		background: #ffe300;
		border-color: #ffe300;
		color: #444;
		border: none;
	}

	.post-auth {
		position: absolute;
		top: 340px;
		left: 411px;
		color: #FFF;
	}

	.auth {
		text-decoration: none;
		color: #FFF;
	}

	.use-box {
		height: 400px;
		background-color: #FFF;
	}

	.peice-title,
	.demand-title,
	.use-title {
		font-size: 30px;
		padding-top: 50px;
	}

	.use-content {
		width: 266px;
		height: 230px;
		margin-top: 30px;
		float: left;
	}

	.use-img {
		background-color: #FAD100;
	}

	.peice-box,
	.demand-box {
		height: 494px;
		background-color: #FFF;
		margin-top: 4px;
	}

	.demand-content {
		margin-top: 30px;
	}

	.mypeice {
		width: 306px;
		height: 215px;
		background-color: #F9F9F9;
		text-align: left;
		margin-top: 70px;
		margin-left: 40px;
		float: left;
	}

	.jop-req {
		height: 92px;
		font-size: 20px;
		line-height: 24px;
		margin-left: 26px;
		padding-top: 26px;
	}

	.job-wel {
		padding-right: 18px;
		margin-left: 26px;
		font-size: 14px;
	}

	.job-pay {
		color: #FF8600;
	}

	.save-pay {
		font-size: 14px;
		color: #FF8600;
	}
	.jop-foot-box{
		background-color: #f9f9f9;
	}
	.job-post{
		height: 148px;
		line-height: 148px;
	}
	.job-qut-box{
		height: 79px;
	}
</style>
