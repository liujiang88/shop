<template>
	<view>
	    <good-list :list="goods"></good-list>
		<view v-if="!flag" style="text-align: center;">-------我是底线-------</view>
		
	</view>
</template>

<script>
	import goodlist from '../../components/goods-list/goods-list.vue'
	export default {
		components:{
			"good-list":goodlist
		},
		onLoad() {
			this.getlist()
		},
		onPullDownRefresh() {
			this.goods=[],
			this.num=1,
			this.flag=true,
			setTimeout(()=>{
				this.getlist(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
			,
			console.log("pulldown")
		},
		onReachBottom() {
			console.log("reach Bottom")
			this.num++
			if(this.flag){
			this.getlist()}
		}
		,
		data() {
			return {
				goods:[],
				num:1,
				flag:null
			}
		},
		methods: {
		     getlist(callBack){
				uni.request({
					url:'http://localhost:8000/goods/list/'+this.num,
					success: (info) => {
						this.goods=[...this.goods,...info.data.list]
						this.flag=info.data.hasNextPage
						callBack && callBack()
					}
				})
					 
				 }
		}
	}
</script>

<style>

</style>
