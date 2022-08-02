<template>
	<view class="image-content">
		<u-toast ref="uToast"></u-toast>
		<view class="image">
			<view class="image-text">
				<u--textarea v-model="value" height="100" placeholder="请输入内容"></u--textarea>
			</view>
			<view class="image-tool">
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
		<view class="image-jie" v-show="show">
			<view class="jie-title">
				解析成功
			</view>
			<view class="image-list">
				<view class="item-image">
					<!-- <image v-for="(item,index) in image" :key="index" :src="item"></image> -->
					<u-album :urls="image"></u-album>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				albumWidth: 0,
				value: "",
				image: [],
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
					this.$request.request("/TarBar/dyimage/", {
						url: v
					}, "GET").then(res => {
						if (res.code == 200) {
							this.image = res.images;
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
			savecar() {
				uni.downloadFile({
					url: url,
					success: (res) => {
						const that = this
						if (res.statusCode === 200) {
							// 保存视频到手机相册
							uni.saveimageToPhotosAlbum({
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

<style lang="scss">
	.image-content {
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		background: #fff;
	}

	.image {
		width: 95%;
		padding: 10px 0px;
		background: #fff;
	}

	.image-text {
		width: 100%;
		margin-top: 20px;
		background: #ffffff;
		box-shadow: 20px 20px 60px #d9d9d9,
			-20px -20px 60px #d9d9d9;
		border-radius: 5px;
	}

	.image-tool {
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

	.image-jie {
		width: 95%;
	}

	.jie-title {
		font-weight: bold;
		margin-top: 10px;
		font-size: 14px;
	}

	.image-list {
		margin-top: 10px;
	}

	.item-image {
		min-height: 220px;
		padding-bottom: 30px;
	}

	.item-image image {
		width: 100% !important;
		height: 200px !important;
		border-radius: 5px;
	}
	.u-album__row__wrapper{
		width: calc(100%/3 - 4px) !important;
	}
</style>
