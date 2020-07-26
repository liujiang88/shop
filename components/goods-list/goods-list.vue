<template>
	<view>
			<view class="shop_list">
				<view class="shop" v-for="(title,index) in list" :key=index>
					<image :src="title.imgpath"></image>
					<view class="shop_title">{{title.name}}</view>
					<view class="shop_price">
						<text>￥2000</text>
						<text>￥2000</text>
					</view>
					</view>
			</view>
		
	</view>
</template>

<script>
	export default {
		
		props:['list']
		
	}
</script>

<style lang="scss">
	
	.shop_list {
	
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	
		.shop {
			background: #FFFFFF;
			margin: 3px auto;
	
			.shop_price {
				color: $shop;
				font-size: 20rpx;
	
				text:nth-child(2) {
					color: #C0C0C0;
					text-decoration: line-through;
				}
	
			}
	
			image {
				width: 350rpx;
				height: 300rpx;
			}
		}
}
</style>
