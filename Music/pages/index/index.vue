<template>
	<view class="index">
		<musicHead :icon="false" title="网易云音乐"></musicHead>
		<view class="container">
			<scroll-view scroll-y="true" >
				<view class="index-search" @tap="handleToSearch">
					<text class="iconfont icon-sousuo_huaban1"></text>
					<input type="text" placeholder="搜索歌曲">
				</view>
				<view v-if="isLoding">
					<m-for-skeleton
					     :avatarSize="200"
					     :row="3"
					     :loading="isLoding"
					     isarc="square"
					     v-for="(item,key) in 4"
						 :titleStyle="{}"
						 :title="false"
					     :key="key">
					        </m-for-skeleton>
				</view>
				<view class="index-list">
					<view class="index-list-item" v-for="(item,index) in topList" :key="index" @tap="handleToList(item.id)">
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>每天更新</text>
						</view>
						<view class="index-list-text">
							<view v-for="(item,index) in item.tracks" :key="index">{{index+1}}.{{item.first}}  -  {{item.second}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
	
</template>

<script>
	import mForSkeleton from "@/components/m-for-skeleton/m-for-skeleton";
	import '@/common/iconfont.css';
	import musicHead from '../../components/musichead/musichead.vue';
	import {topList} from '../../common/api.js'
	export default {
		components:{
			musicHead,
			mForSkeleton
		},
		data() {
			return {
				topList:[],
				isLoding:true
			}
		},
		onLoad() {
			topList().then(res=>{
				// console.log(res);
				
				if(res.length){
					setTimeout(()=>{
						this.topList=res
						this.isLoding=false
					},1000)
					
				}
			})
		},
		methods: {
			handleToList(listId){
				console.log(listId);
				uni.navigateTo({
					url: '/pages/list/list?listId=' + listId,
				})
			},
			handleToSearch(){
				uni.navigateTo({
					url:'../search/search'
				})
			}
		}
	}
</script>

<style scoped>
	.index{
		
	}
	.index-search{
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
		background: #f7f7f7;
		border-radius: 50rpx;
	}
	.index-search text{
		font-size: 30rpx;
		margin-right: 24rpx;
		margin-left: 28rpx;
	}
	.index-search input{
		font-size: 28rpx;
		flex: 1;
	}
	.index-list{
		margin: 0 30rpx;
	}
	.index-list-item{
		display: flex;
		margin-bottom: 34rpx;
		
	}
	.index-list-img{
		height: 212rpx;
		width: 212rpx;
		border-radius: 30rpx;
		position: relative;
		overflow: hidden;
		margin-right: 22rpx;
	}
	.index-list-img image{
		width: 100%;
		height: 100%;
	}
	.index-list-img text{
		position: absolute;
		left: 12rpx;
		bottom: 16rpx;
		color: white;
		font-size: 20rpx;
	}
	.index-list-text{
		font-size: 24rpx;
		line-height: 66rpx;
		flex: 1;
	}
</style>
