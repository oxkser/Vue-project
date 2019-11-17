<template>
	<div>
		<div class="box">
			<div class="lfbox">
				<div class="lfdes">
					<div class="mydes">设计方向</div>
					<a class="des" href="#" v-for="item in list" :key="item.id">{{item.name}}</a>
				</div>
				<div class="lfpos">
					<div class="mydes">管理职位</div>
					<a class="des" href="#" v-for="item in list1" :key="item.id">{{item.name}}</a>
				</div>
				<div class="pos">
					<a href="#" class="supos">
						<span>职位订阅</span>
						<i class="el-icon-right"></i>
					</a>
				</div>
				
				<div class="code">
					<p>招聘顾问：站酷招聘小妹</p>
					<img class="codeimg" src="https://static.zcool.cn/v2620661/job/job2016/tag/common/images/2code.png" alt="" />
					<p>优质职位/设计师每日一推</p>
				</div>
				<div class="myabout">关于我们·常见问题·意见反馈·服务协议</div>
			</div>
			<!-- 右边内容 -->
			<div class="ribox">
				<div class="mypr">
					<el-input placeholder="搜素职位或公司" v-model="input" class="input-with-select"> </el-input>
					<el-button type="primary">搜素</el-button>
				</div>
				<div class="myhot">热门搜索:
					<a class="hot-a" @ href="#" v-for="item in list2" :key="item.id">{{item.name}}</a>
				</div>
				<div class="nav">
					<div class="tag-lf">
						<router-link to="/recommend" class="tag">推荐</router-link>
						<router-link to="/newest" class="tag">最新</router-link>
					</div>
					<div class="tag-ri">
						<i class="el-icon-circle-plus-outline"></i>
						<router-link to="/post" class="tag">发布职位</router-link>
					</div>
				</div>
					<div class="designer">
						<div class="designerbox">
							<div class="leftbox">
								<div class="imgbox">
									<img src="https://img.zcool.cn/community/01c9505c00fd06a80121ab5dcbe0bc.jpg@160w_160h_1c_1e_1o_100sh.jpg">		
								</div>
								<div class="authorinfor">
									<div class="littlebox1">
										<div class="authorName">杰克</div>
										<div class="authordes">
											<span>成都</span>|
											<span>平面设计师</span>
										</div>
									</div>
									<div class="littlebox2">
										<div class="authorinfor">
											<span>创作163</span>|
											<span>粉丝17890</span>
										</div>
										<div class="sign">杰士邦————wwww</div>
									</div>
									<div class="littlebox3">
										<button class="follow">关注</button>	
										<button class="fans">私信</button>
									</div>	
								</div>							
							</div>
							<div class="rightbox"></div>
						</div>
					</div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import CityDesigner from "@/views/views2/CityDesigner";
	export default {
		name: "position",
		components:{
			CityDesigner
		},
		data() {
			return {
				list: [{
						id: 1,
						name: "平面"
					},
					{
						id: 2,
						name: "UI"
					},
					{
						id: 3,
						name: "视觉"
					},
					{
						id: 4,
						name: "网页"
					},
					{
						id: 5,
						name: "原画"
					},
					{
						id: 6,
						name: "插画"
					},
					{
						id: 7,
						name: "动画"
					},
					{
						id: 8,
						name: "游戏UI"
					},
					{
						id: 9,
						name: "3D设计"
					},
					{
						id: 10,
						name: "多媒体"
					},
					{
						id: 11,
						name: "摄影师"
					},
					{
						id: 12,
						name: "实习生"
					}
				],
				list1: [{
						id: 1,
						name: '设计经理'
					},
					{
						id: 2,
						name: '设计总监'
					},
					{
						id: 3,
						name: '视觉总监'
					},
					{
						id: 4,
						name: '视觉经理'
					},
					{
						id: 5,
						name: '交互经理'
					}
				],
				input: '',
				list2: [{
						id: 1,
						name: "UI"
					},
					{
						id: 2,
						name: "平面设计"
					},
					{
						id: 3,
						name: "实习"
					},
					{
						id: 4,
						name: "插画"
					},
					{
						id: 5,
						name: "网页设计"
					}
				],

			}
		}
	}
</script>

<style scoped>
	.box {
		display: flex;
		justify-content: center;
		padding: 40px;
	}
	。designerbox{
		width:750px;
		height:200px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.leftbox{
		width:40%;
		display:flex;
		justify-content: space-between;
		align-items: center;
	}
	.imgbox{
		width:50px;
		line-height: 200px;
		height:100%;
	}
	.imgbox img{
		width:50px;
		height:50px;
		border-radius:50%;
	}
	.authorinfor{
		font-size:14px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.authorinfor>div{
		height:40px;
	}
	/* .leftbox */
	.rightbox{
		width:60%;
	}
	/* 左侧栏的样式 */
	.lfbox {
		width: 260px;
		
	}

	.mydes {
		text-align: left;
		padding-left: 30px;
	}

	.des {
		line-height: 24px;
		font-size: 14px;
		display: block;
		float: left;
		width: 33.333%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #666;
		margin-top: 8px;
		text-decoration: none;
	}

	.des:hover {
		color: #FF8600;
	}

	.lfdes {
		height: 168px;
		padding-top: 30px;
		border:1px solid #E9E9E9;
		background-color: #fff;
	}

	.lfpos {
		height: 108px;
		margin-top: 2px;
		padding-top: 30px;
		background-color: #fff;
		border:1px solid #E9E9E9;
	}

	.pos {
		height: 64px;
		background-color: #fff;
		margin-top: 20px;
		line-height: 64px;
		border:1px solid #E9E9E9;
	}

	.supos {
		text-decoration: none;
		color: #000;
		display: inline-block;
		display: flex;
		justify-content: space-around;
		border:1px solid #E9E9E9;
	}

	.el-icon-right {
		font-size: 60px;
		color: #666
	}

	.con {
		height: 51px;
		background-color: #fff;
		margin-top: 20px;
		line-height: 51px;
		text-align: left;
		padding-left: 40px;
	}

	.code {
		height: 242px;
		background-color: #fff;
		display:flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		margin-top: 20px;
	}
	.code>p:nth-of-type(2){
		font-size:12px;
		color:#999;
	}
	.codeimg {
		width: 130px;
		height: 130px;
	}

	.myabout {
		font-size: 15px;
		color: #666;
		margin-top: 20px;
	}

	/* 右边内容样式 */
	.ribox {
		width: 790px;
		margin-left: 40px;
	}

	.mypr {
		display: flex;
		flex-wrap: nowrap;
	}

	.myhot {
		text-align: left;
		margin-top: 15px;
	}

	.hot-a {
		line-height: 24px;
		font-size: 14px;
		padding: 0 12px;
		color: #666;
		margin-top: 8px;
		text-decoration: none;
	}

	.hot-a:hover {
		color: #FF8600;
	}

	/* 推荐下面的内容 */
	.nav {
		height: 54px;
		background-color: #fff;
		line-height: 54px;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
		margin-top: 20px;
	}

	.nav .tag-lf {
		margin-right: 430px;
		color: #666;
		
	}
	.tag{
		text-decoration: none;
		padding-right: 20px;
	}
	.tag:hover{
		color: #FF8600;
	}
</style>
