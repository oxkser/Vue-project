<template>
	<div>
		<div class="containerbox" >
			<div class="imagebox" v-for="(item,index) in list" :key="index" @click="Activity(item.id)">
				<img :src="item.act_img">
				<div class="middlebox">
					<div class="title">
						<div>{{item.act_name}}</div>
						<div>进行中</div>
					</div>
					<div class="date">{{item.act_date}}</div>
				</div>
				<div class="bottombox">
					<div class="daybox"><i class="iconfont icon-zhongbiao">{{item.act_during}}天</i></div>
					<div class="views"><i class="iconfont icon-liulanliang">{{item.online_id}}</i></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name:"PublicW",
		props:{
			list:Array,
			acttype:Number
		},
		data(){
			return {
				actid:this.acttype
			}
		},
		methods:{
			Activity:function(id){
				console.log(this.list);
				console.log(this.acttype);
				if(this.acttype==0){
					console.log(this.acttype);
					this.$router.push({path:"/onlineact", query:{ work_id:id}});
				}
				else if(this.acttype==1){
					console.log(this.acttype);
					this.$router.push({path:"/designact", query:{ work_id:id}});
				}
				else if(this.acttype==2){
					console.log(this.acttype);
					this.$router.push({path:"/specialact", query:{ work_id:id}});
				}
				else if(this.acttype==3){
					console.log(this.acttype);
					this.$router.push({path:"/onlineact", query:{ work_id:id}});
				}
				else if(this.acttype==4){
					console.log(this.acttype);
					this.$router.push({path:"/underlineact", query:{ work_id:id}});
				}
			}
		}
	})
</script>

<style>
	*{
		margin:0;
		padding:0;
	}
	.containerbox{
		width:1150px;
		margin:0 auto;
		padding:20px 0;
		overflow:hidden;
	}
	.imagebox{
		float:left;
		margin:10px;
		width:555px;
		border-radius: 5px;
		overflow:hidden;
		background-color:#fff;
	}
	.imagebox img{
		width:555px;
		height:281px;
	}
	.middlebox{
		width:515px;
		padding:20px;
		border-bottom:1px solid #f2f2f2;
	}
	.middlebox .title{
		margin-bottom: 10px;
		display:flex;
		justify-content: space-between;
		align-items:center;
	}
	.middlebox .title div:first-child{
		color:#333;
	}
	.middlebox .title div:last-child{
		width:88px;
		height:32px;
		line-height:32px;
		background-color:#FFE300;
		color:#fff;
	}
	.imagebox .date{
		width:100%;
		color:#aaa;
		text-align:left;
		font-size:14px;
	}
	.imagebox .bottombox{
		width:515px;
		height:35px;
		margin:10px 20px;
		display:flex;
		justify-content: space-between;
		align-items:center;
	}
	.imagebox .bottombox i{
		font-size:12px;
		color:#aaa;
	}
</style>
