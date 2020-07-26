<template>
	<view class="contact">
		<image src="//img20.360buyimg.com/pop/s590x470_jfs/t1/144599/26/3573/66001/5f17a50eE799984c0/ebe79488398c0059.jpg.webp"></image>
	     <view>联系电话：<text @click="callpath">400-615-9080</text></view>
		 <view>校区地址:长沙</view>
		  <view class="map">
			  <map style="width: 100%; height: 100%;" :latitude="latitude" :longitude="longitude" :markers="covers">
			                 </map>
		  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			callpath(){
				uni.makePhoneCall({
				    phoneNumber: '114' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss">
  .contact{
	 image{
		 width: 750rpx;
		 height: 500rpx;
	 }
  }
  .map{
	  width: 750rpx;
	  height: 750rpx;
  }
</style>
