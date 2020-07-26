<template>
	<view class="home">
		<goodmodule></goodmodule>
		<swiper indicator-dots=true circular>
			<swiper-item v-for="item in swipess">
				<image :src="item" style="width: 100%;"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
		</view>
		<good-module :list="goodlist"></good-module>
	</view>
</template>

<script>
	import goodmodule from '../../components/goods-list/goods-list.vue'
	export default {
		components:{
			"good-module":goodmodule
		},
		data() {
			return {
				swipess: [
					"//imgcps.jd.com/ling4/100000009384/5oqk5omL6Zyc5Zeo6LSt5LiN5YGc/57K-6YCJ5aW954mp/p-5bd8253082acdd181d02f9df/44882113/cr/s/q.jpg",
					"//imgcps.jd.com/ling4/100000009384/5oqk5omL6Zyc5Zeo6LSt5LiN5YGc/57K-6YCJ5aW954mp/p-5bd8253082acdd181d02f9df/44882113/cr/s/q.jpg"
				],
				navs: [{
						icon: 'iconfont icon-biaodandingzhimoban',
						title: '超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-biaodandingzhitongyi',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-biaodandingzhizuhu',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					
					{
						icon: 'iconfont icon-biaodandingzhitongyi',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
					]
					 ,goodlist:[],
					 num:1,
					 size:10
			}
		       
		},
		onLoad() {
			this.getSwipees()
		},
		methods: {
			navItemClick(url){
				console.log(url)
				uni.navigateTo({
				    url
				});
			},
			
			getSwipees() {
				let obj2 = { // 创建对象
					url: 'http://localhost:8000/goods/list/'+this.num, // 示例请求路径
					method: "GET",
					success: (res) => {
						console.log(res.data)
						this.goodlist = res.data.list //请求成功操作
					},
				}
				this.$apiReq.req(obj2) // 调用封装好的api}
		}
	},
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;
	
			image {
				height: 100%;
				height: 100%;
			}
		}
	}
	
	.nav {
		display: flex;
	
		.nav_item {
			width: 25%;
			text-align: center;
	
			view {
				width: 130rpx;
				height: 130rpx;
				background: #b50e03;
				border-radius: 61rpx;
				margin: 10px 10px 5px auto;
				line-height: 130rpx;
				color: #FFFFFF;
				font-size: 50rpx;
			}
	
			.icon-caizhengquhua {
				font-size: 60rpx;
			}
	
			text {
				font-size: 30rpx;
	
			}
		}
	}
	
	.hot_goods {
		margin-top: 10rpx;
		background: #C0C0C0;
		overflow: hidden;
	
		.tit {
			text-align: center;
			letter-spacing: 20rpx;
			color: $shop;
			background-color: #FFFFFF;
			margin: 2px 0;
		}
	}
	
	
</style>
