<template>
	<div class="boxfooter">
		<div class="footerbox">
			<div class="footer">
				<div class="topfooter">
					<i class="iconfont icon-shouji"></i>
					<a href="" v-for="item in list" :key="item.id">{{item.dec}}</a>
						<i class="iconfont icon-weixin"></i>
						<i class="iconfont icon-weibo"></i>
				</div>
				<div class="bottomfooter">
					<a href="" v-for="item1 in list1" :key="item1.id">{{item1.dec}}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name:"Footer",
		data(){
			return {
				list:[
					{id:1,dec:"移动版"},
					{id:2,dec:"关于我们"},
					{id:3,dec:"加入west nile"},
					{id:4,dec:"用户协议"},
					{id:5,dec:"隐私政策"},
					{id:6,dec:"侵权申诉"},
					{id:7,dec:"企业服务"},
					{id:8,dec:"帮助中心"},
					{id:9,dec:"联系我们"},
					{id:10,dec:"中文"},
					{id:11,dec:"English"}
				],
				list1:[
					{id:1,dec:"京ICP备11017824号-4 "},
					{id:2,dec:" 京ICP证130164号  "},
					{id:3,dec:"京公网安备11010502000501号 "},
					{id:4,dec:" 网络文化经营许可证 京网文[2016]6173-844号 "},
					{id:5,dec:" 广播电视节目制作经营许可证（京）字第06990号"},
					{id:6,dec:"营业执照"},
					{id:7,dec:" 网上有害信息举报专区"},
					{id:8,dec:"不良信息举报电话：010-56538658 "},
					{id:9,dec:" 举报邮箱 jubao@zcool.com.cn"},
					{id:10,dec:" 联系电话：010-56538600"},
					{id:11,dec:"Copyright © 2006-2019 ZCOOL站酷"}
				]
			}
		}
	})
</script>

<style scoped>
*{
		margin:0;
		padding:0;
	}
	.boxfooter{
		padding-top:0px;
		background-color:#F4F4F4;
	}
	.footerbox{
		width:100%;
		height:230px;
		background-color:#282828;
	}
	.footer{
		width:1130px;
		height:230px;
		margin:0 auto;
	}
	.footer a{
		color:#666;
		text-decoration:none;
		display:inline-block;
		padding:0 10px;
	}
	.topfooter{
		width:100%;
		height:130px;
		border-bottom:1px solid #666;
		font-size:14px;
	}
	.topfooter a,.topfooter>i{
		height:130px;
		line-height:130px;
	}
	.topfooter>i{
		margin:0 10px;
		color:#666;
		font-size:20px;
	}
	.topfooter i.icon-weixin:hover{
		color:#58BC46;
	}
	.topfooter i.icon-weibo:hover{
		color:#E90E24;
	}
	.bottomfooter{
		width:100%;
		height:100px;
		font-size:12px;
	}
	.bottomfooter a{
		height:30px;
		line-height:30px;
		
	}
</style>
