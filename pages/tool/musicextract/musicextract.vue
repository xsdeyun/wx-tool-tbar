<template>
	<view class="music-content">
		<u-toast ref="uToast"></u-toast>
		<view class="music">
			<view class="music-text">
				<u--textarea v-model="value" height="100" placeholder="请输入内容"></u--textarea>
			</view>
			<view class="music-tool">
				<view class="clear-copy">
					<view class="clear">
						<u-tag text="清空" plain shape="circle" @click="clear()"></u-tag>
					</view>
					<view class="copy">
						<u-tag text="复制" plain shape="circle" @click="copy()"></u-tag>
					</view>
				</view>
				<view class="course">
					<u-tag @click="Tocurse()" text="去水印教程？" borderColor="#fff" icon="question-circle" plain shape="circle"></u-tag>
				</view>
			</view>
			<view class="btn">
				<u-button type="info" color="#0057FC" @click="submint" shape="circle" text="确定提交"></u-button>
			</view>
		</view>
		<view class="music-jie" v-show="show">
			<view class="jie-title">
				解析成功
			</view>
			<view class="jie-music">
				<view class="music-b">
					<view class="bg">
						<image :src="music.avatar"></image>
					</view>
					<image :src="music.avatar" class="autor"></image>
					<view class="bt">
						<image @click="stratPlay(2)" v-if="music.show" src="https://wx.qingyunjian.cn/TarBar/wx/img/zan.png"
							class="btn"></image>
						<image @click="stratPlay(1)" wx:else src="https://wx.qingyunjian.cn/TarBar/wx/img/bo.png"
							class="btn"></image>
					</view>
					<view class="music-cont">
						<text class="name">{{music.title}}️</text>
						<text class="auther">{{music.author}}</text>
					</view>
				</view>
			</view>
			<view class="jie-tool">
				<view class="save-img">
					<u-button text="复制下载链接" @click="savecar('link')" color="#0057FC" :plain="true" shape="circle">
					</u-button>
				</view>
				<view class="save-music">
					<u-button text="下载音乐" @click="savecar('music')" color="#0057FC" :plain="true" shape="circle">
					</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: "",
				music: {
					author: "",
					avatar: "",
					url: "",
					title: "",
					show: false
				},
				show: false
			}
		},
		methods: {
			Tocurse(){
				uni.navigateTo({
					url:"/pages/tool/videoprint/videocourse/videocourse"
				})
			},
			submint() {
				let regex = /http[s]?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&:\-\+\%]*[/]*/;
				if (this.value.match(regex) != null) {
					this.$refs.uToast.show({
						type: "loading",
						message: "正在加载！"
					})
					var v = this.value.match(regex)[0];
					this.$request.request("/TarBar/dyvideo/", {
						url: v
					}, "get").then(res => {
						if (res.code == 200) {
							this.music.author = res.data.music.author;
							this.music.avatar = res.data.music.avatar;
							this.music.url = res.data.music.url;
							this.music.title = res.data.title;
							this.show = true;
						} else {
							this.$refs.uToast.show({
								message: res.msg
							})
						}
					}).catch()
				} else {
					this.$refs.uToast.show({
						message: "请输入正确的解析链接！"
					})
				}
			},
			stratPlay(index) {
				if (index == 1) {
					wx.playBackgroundAudio({
						//播放地址
						dataUrl: this.music.url,
						title: this.music.title,
						//图片地址
						coverImgUrl: this.music.avatar
					})
					this.music.show = true;
				} else {
					wx.pauseBackgroundAudio();
					this.music.show = false;
				}
			},
			savecar(text) {
				if(text=='link'){
					uni.setClipboardData({
						data: this.music.url,
						success: function () {
							console.log("复制成功！")
						}
					});
				}else{
					uni.downloadFile({
						url: this.music.url,
						success: (res) => {
							const that = this
							if (res.statusCode === 200) {
								// 保存视频到手机相册
								uni.saveVideoToPhotosAlbum({
									filePath: res.tempFilePath,
									success: function() {
										that.$refs.uToast.show({
											message: "保存成功！"
										})
									}
								})
							}
					
						}
					})
				}
				
			},
			clear() {
				this.value = "";
			},
			copy() {
				let that = this;
				wx.getClipboardData({
					success: function(res) {
						that.value = res.data;
					}
				});
			}
		}
	}
</script>

<style>
	.music-content {
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		background: #fff;
	}

	.music {
		width: 95%;
		padding: 10px 0px;
		background: #fff;
	}

	.music-text {
		width: 100%;
		margin-top: 20px;
		background: #ffffff;
		box-shadow: 20px 20px 60px #d9d9d9,
			-20px -20px 60px #d9d9d9;
		border-radius: 5px;
	}

	.music-tool {
		width: 100%;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.clear-copy {
		display: flex;
		justify-content: space-between;
	}

	.copy {
		margin-left: 10px;
	}

	.btn {
		width: 100%;
		margin-top: 10px;
	}

	.music-jie {
		width: 95%;

	}

	.jie-music {
		width: 95%;
		margin-top: 10px;
		display: flex;
		justify-content: center;
	}

	.jie-title {
		font-weight: bold;
		margin-top: 10px;
		font-size: 14px;
	}

	.jie-tool {
		width: 100%;
		margin-top: 15px;
		display: flex;
		justify-content: space-between;
	}

	.save-img {
		width: 48%;
	}

	.save-music {
		width: 48%;
	}

	/* 音乐控件 */
	.music-b {
		width: 80%;
		height: 160rpx;
		position: relative;
		border-radius: 5px;
		box-shadow: 0rpx 5rpx 5rpx 5rpx rgba(85, 85, 85, 0.30);
		display: flex;
		align-items: center;
	}

	.autor {
		width: 65px;
		height: 65px;
		border-radius: 50%;
		position: absolute;
		box-shadow: 0rpx 5rpx 5rpx 5rpx rgba(85, 85, 85, 0.30);
		margin-left: 10px;
	}

	.music-cont {
		position: absolute;
		top: 0;
		left: 30%;
		width: 70%;
		height: 100%;
		color: white;
	}

	.bg {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		filter: blur(5px);
	}

	.bg image {
		width: 100%;
		height: 100%;
	}

	.name {
		width: 330rpx;
		height: 50rpx;
		position: absolute;
		top: 10%;
		left: 5%;
		overflow: hidden;
		display: block;
		text-align: left;
	}

	.auther {
		position: absolute;
		bottom: 20%;
		left: 5%;
		width: 250rpx;
		height: 50rpx;
		overflow: hidden;
		text-align: left;
	}

	.bt {
		position: absolute;
		width: 30px;
		height: 30px;
		top: 15px;
		left: 27px;
	}

	.btn {
		width: 100%;
		height: 100%;
	}
</style>
