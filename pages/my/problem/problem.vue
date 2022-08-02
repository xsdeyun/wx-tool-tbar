<template>
	<view class="problem-content">
		<view class="item">
			<view class="item-title">1.为什么会解析失败?</view>
			<view class="item-desc">1.可能您输入的链接有误，您可尝试输入正确的链接进行重试</view>
			<view class="item-desc">2.可能由于原视频平台技术更新，您可联系客服人员进行解决</view>
		</view>
		<view class="item">
			<view class="item-title">1.为什么会保存失败?</view>
			<view class="item-desc">1.网络异常,未获取到，您可尝试检查网络重试</view>
			<view class="item-desc">2.微信或小程序文件存储权限未授权，您可尝试去手机设置中进行授权或联系客服人员协助解决</view>
		</view>
		<view class="item">
			<view class="item-title">3、网易云打卡会影响听歌风格吗?</view>
			<view class="item-desc">不会，都是根据您的首页推荐的歌单打卡的</view>
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
			
		}
	}
</script>

<style>
.problem-content{
	box-sizing: border-box;
	display: flex;
	justify-content:flex-start;
	flex-direction: column;
	background: #fff;
	padding: 2% 5%;
}
.item{
	margin-top: 20px;
}
.item-title{
	font-weight: bold;
}
.item-desc{
	    margin-top: 5px;
	    font-size: 12px;
	    color: #999;
}
</style>
