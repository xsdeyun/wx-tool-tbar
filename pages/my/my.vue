<template>
	<view class="my-content">
		<u-toast ref="uToast"></u-toast>
		<view class="acter">
			<view class="acter-img">
				<u--image :src="userInfo.avatarUrl" width="70" height="70" shape="circle"></u--image>
			</view>
			<view class="acter-item" @click="getuserInfo">
				<view class="acter-item-title">{{userInfo.nickName}}</view>
				<view class="acter-item-desc">成长的路上,充满崎岖坎坷;这坎坷的道路,是我们前进的动力。</view>
			</view>
		</view>
		<view class="tool-gn tool-one">
			<u-cell-group customStyle="width:100%;" :border="false">
				<u-cell icon="share-square" iconStyle="margin-right:10px;color:#2979ff;" title="推荐好友" :isLink="true"
					:border="false" size="large" class="cell-item" open-type="share"><button class="hide" slot="value" open-type="share"></button></u-cell>
				<u-cell icon="question-circle" iconStyle="margin-right:10px;color:#2979ff;" title="常见问题" :isLink="true"
					:border="false" url="/pages/my/problem/problem" size="large" class="cell-item"></u-cell>
				<u-cell icon="edit-pen" iconStyle="margin-right:10px;color:#2979ff;" title="意见反馈" :isLink="true"
					:border="false" size="large" url="/pages/my/feedback/feedback" class="cell-item"></u-cell>
			</u-cell-group>
		</view>
		<view class="tool-gn tool-two">
			<u-cell-group customStyle="width:100%;" :border="false">
				<u-cell icon="error-circle" iconStyle="margin-right:10px;color:#2979ff;" title="关于我们" :isLink="true"
					:border="false" url="/pages/my/aboutOur/aboutOur" size="large" class="cell-item"></u-cell>
				<u-cell icon="reload" iconStyle="margin-right:10px;color:#2979ff;" title="版本详情" :isLink="true"
					:border="false" url="/pages/my/setps/setps" size="large" class="cell-item"></u-cell>
				<u-cell icon="setting" iconStyle="margin-right:10px;color:#2979ff;" title="设置" :isLink="true"
					:border="false" size="large" class="cell-item" @click="setup"></u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					nickName: "微信用户",
					avatarUrl: "https://wx.qingyunjian.cn/TarBar/wx/img/avater.jpg"
				}
			}
		},
		created() {

		},
		methods: {
			getuserInfo() {
				this.$setUserInfo().then(res => {
					this.userInfo = res.userInfo;
				});
			},
			setup(){
				this.$refs.uToast.show({
					message: "设置功能暂时未开放！"
				})
			}
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: 'TBar工具箱-极致生活小程序',
				path: '/pages/index/index',
				imageUrl:"https://wx.qingyunjian.cn/TarBar/wx/img/fenxiang.png"
			}
		}
	}
</script>

<style>
	@import url(@/asset/my.css);

	.my-content {
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		background: #fff;
		background-color: #F4F4F4;
	}
</style>
