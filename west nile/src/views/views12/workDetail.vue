<template>
	<div class="deta-box">
		<ul class="product" v-for="item in planlist" :key="item.id">
			
			<li class="product-content">
				<div class="rank">
					<div class="ranknum">{{item.ranknum}}</div>
					<div class="score">分数</div>
					<div class="num">{{item.num}}</div>
				</div>
				<div class="showpro">
					<router-link to="/no">
						<img class="showpro-img" :src="item.showproimg">
					</router-link>
				</div>
				<div class="author">
					<div class="title-box">
						<router-link to="/no" class="title">
							{{item.title}}
						</router-link>
						<p class="career">{{item.career}}</p>
					</div>
					<div class="author-box">
						<router-link to="/people" class="title">
							<img class="author-img" :src="item.showproimg" alt="" />
							<br />
							<span class="author-name">{{item.authorname}}</span>
						</router-link>
						<div class="author-time">{{item.authortime}}</div>
					</div>
				</div>
				<div class="showdetails">
					<span class="pick">查看详情</span>
					<img class="pick-img" src="../assets/triangle-copy.png" alt="" />
				</div>
			</li>
		</ul>

	</div>
</template>

<script>
	export default {
		name: "workDetail",
		props: {
	planlist: Array
		},
		data() {
			return {}
		}
	}
</script>

<style scoped>
	
</style>
