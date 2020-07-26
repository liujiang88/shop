<template>
	<view class="pics">
		<scroll-view class="scroll" scroll-y="true">
		    <view :class="flag===item.id?'action':''" v-for="(item,index) in type_list" :key="item.id" @click="onid(item.id)">AA</view>
		</scroll-view>
		<scroll-view scroll-y="true">
		<view @click="previewImg()" class="rigth-class" v-for="item in  right_list">
			<image :src="item.imgpath"></image>
			<text>{{item.title}}</text>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getlist()
		}
		,
		data() {
			return {
				type_list:[],
				flag:1,
				right_list:[]
			}
		},
		methods: {
			onid(id){
			this.flag=id
			},
			previewImg(){
			const urls	=this.type_list.map(item=>{
					return item.imgpath
				})
				console.log(urls)
				uni.previewImage({
					urls
				})
			},
			getlist(){
				uni.request({
					url:'http://localhost:8000/goods/list/1',
					success: (info) => {
						this.type_list=info.data.list,
						this.right_list=info.data.list
					}
				})
			}
		}
	}
</script>

<style lang="scss">
    page{
		height: 100%;
	}
	.pics{
	   display: flex;
	   height: 100%;
	}
  .rigth-class{
	 height: 100%;
	 width: 100rpx;
	 margin: 0 auto;
  }
  .scroll{
	  width: 200rpx;
	  height: 100%;
	  view{
	  border-top: 1px solid #555555;
	   border-right: 1px solid #555555;
	  line-height: 100rpx;
	  width: 180rpx;
	  height: 100rpx;
	  text-align: center;
  }
  }
  .action{
	  background: $shop;
	  color: #FFFFFF;
  }
</style>
