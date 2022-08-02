<template>
	<view class="content">
		<u-toast ref="uToast"></u-toast>
		<view class="swiper">
			<u-swiper :list="swiperlist" indicator indicatorMode="line" circular keyName="image" height="150">
			</u-swiper>
		</view>
		<view class="notice">
			<u-notice-bar color="#035FF8" bgColor="none" :text="notice"></u-notice-bar>
		</view>
		<!-- 列表 -->
		<view class="tool-list">
			<view class="list-title">热门工具</view>
			<view class="list-content">
				<view class="item-content" @click="Tovideo">
					<view class="item-td">
						<view class="item-title">视频去水印</view>
						<view class="item-desc">抖音、快手等其他平台都点这里</view>
					</view>
					<view class="item-img bg-blue">
						<u--image src="https://wx.qingyunjian.cn/TarBar/wx/img/3b75fbc366ec25aa.png" width="30" height="30" shape="circle">
						</u--image>
					</view>
				</view>
				<view class="item-content" @click="Toimage">
					<view class="item-td">
						<view class="item-title">图集去水印</view>
						<view class="item-desc">抖音、快手等其他平台都点这里</view>
					</view>
					<view class="item-img bg-orange">
						<u--image src="https://wx.qingyunjian.cn/TarBar/wx/img/b0ef041b5fe23588.png" width="30" height="30" shape="circle">
						</u--image>
					</view>
				</view>
				<view class="item-content"  @click="Toimage">
					<view class="item-td">
						<view class="item-title">小红书去水印</view>
						<view class="item-desc">保存小红书无水印图片与文案</view>
					</view>
					<view class="item-img bg-pink">
						小红书
					</view>
				</view>
				<view class="item-content"  @click="Tomusic">
					<view class="item-td">
						<view class="item-title">背景音乐提取</view>
						<view class="item-desc">抖音快手视频背景音乐提取</view>
					</view>
					<view class="item-img bg-black">
						抖音
					</view>
				</view>
			</view>
		</view>
		<!-- 列表 -->
		<!-- 列表 -->
		<view class="tool-list">
			<view class="list-title">其他工具</view>
			<view class="list-content">
				<view class="item-content" @click="TomusicWyy()">
					<view class="item-td">
						<view class="item-title">音乐解析</view>
						<view class="item-desc">多站合一音乐搜索</view>
					</view>
					<view class="item-img">
						<u--image src="https://wx.qingyunjian.cn/TarBar/wx/img/1badfb8c7b2a3db2.png" width="40" height="40" shape="circle">
						</u--image>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 列表 -->
		<view class="divider">
			<u-divider text="更多功能持续更新中，敬请期待..." :dashed="true"></u-divider>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				notice: 'TBar工具箱 免费的短视频去水印、图集去水印、音乐解析等高效的小程序工具箱',
				swiperlist: [{
						"image": "https://wx.qingyunjian.cn/TarBar/wx/img/l1.jpg"
					},
					{
						"image": "https://wx.qingyunjian.cn/TarBar/wx/img/l2.jpg"
					},
					{
						"image": "https://wx.qingyunjian.cn/TarBar/wx/img/l3.jpg"
					},
				]
			}
		},
		onLoad() {

		},
		methods: {
			Tovideo(){
				uni.navigateTo({
					url: '/pages/tool/videoprint/videoprint',
				});
			},
			Toimage(){
				uni.navigateTo({
					url: '/pages/tool/imageprint/imageprint',
				});
			},
			Tomusic(){
				uni.navigateTo({
					url: '/pages/tool/musicextract/musicextract',
				});
			},
			TomusicWyy(){
				uni.navigateTo({
					url: '/pages/tool/musicwyy/musicwyy',
				});
			}
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: 'TBar工具箱-极致生活小程序',
				path: '/pages/index/index',
				bgImgUrl:"https://wx.qingyunjian.cn/TarBar/wx/img/fenxiang.png"
			}
		}
	}
</script>

<style>
	@import url(@/asset/index.css);
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px;
	}
</style>
