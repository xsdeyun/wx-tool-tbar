<template>
	<view class="video-content">
		<u-toast ref="uToast"></u-toast>
		<view class="video">
			<view class="video-text">
				<u--textarea v-model="value" height="100" placeholder="请输入内容" ></u--textarea>
			</view>
			<view class="video-tool">
				<view class="clear-copy">
					<view class="clear"><u-tag text="清空"  plain shape="circle"  @click="clear()"></u-tag></view>
					<view class="copy"><u-tag text="复制"  plain shape="circle"  @click="copy()"></u-tag></view>
				</view>
				<view class="course">
					<u-tag @click="Tocurse()"  text="去水印教程？" borderColor="#fff" icon="question-circle" plain shape="circle"></u-tag>
				</view>
			</view>
			<view class="btn">
				<u-button type="info" color="#0057FC" @click="submint" shape="circle" text="确定提交"></u-button>
			</view>
		</view>
		<view class="video-jie" v-show="show">
			<view class="jie-title">
				解析成功
			</view>
			<view class="jie-video">
				<video :src="video.url" :poster="video.image"></video>
			</view>
			<view class="jie-tool">
				<view class="save-img">
					<u-button text="复制下载链接" @click="savecar('img')" color="#0057FC" :plain="true" shape="circle"></u-button>
				</view>
				<view class="save-video">
					<u-button text="下载视频" @click="savecar('video')" color="#0057FC" :plain="true" shape="circle"></u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:"",
				video:{
					url:"",
					image:""
				},
				show:false
			}
		},
		methods: {
			Tocurse(){
				uni.navigateTo({
					url:"/pages/tool/videoprint/videocourse/videocourse"
				})
			},
			submint(){
				let regex = /http[s]?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&:\-\+\%]*[/]*/;
				if(this.value.match(regex)!=null){
					this.$refs.uToast.show({
						type:"loading",
						message: "正在加载！"
					})
					var v =  this.value.match(regex)[0];
					this.$request.request("/TarBar/dyvideo/",{url:v}, "get").then(res => {
						if(res.code==200){
							this.video.url = res.data.url;
							this.video.image=res.data.cover;
							this.show = true;
						}else{
							this.$refs.uToast.show({
								message: res.msg
							})
						}
					}).catch()
				}else{
					this.$refs.uToast.show({
						message: "请输入正确的解析链接！"
					})
				}
			},
			savecar(text){
				if(text=="img"){
					uni.setClipboardData({
						data: this.video.url,
						success: function() {
							console.log("复制成功！")
						}
					});
				}else{
					uni.downloadFile({
						url: this.video.url,
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
			clear(){
				this.value="";
			},
			copy(){
				let that=this;
				wx.getClipboardData({
					success: function (res) {
						that.value=res.data;
					}
				});
			}
		}
	}
</script>

<style>
.video-content{
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: #fff;
}
.video{
	width: 95%;
	padding: 10px 0px;
	background: #fff;
}
.video-text{
	width: 100%;
	margin-top: 20px;
	background: #ffffff;
	box-shadow:  20px 20px 60px #d9d9d9,
	             -20px -20px 60px #d9d9d9;
	border-radius: 5px;
}
.video-tool{
	width: 100%;
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.clear-copy{
	display: flex;
	justify-content: space-between;
}
.copy{
	margin-left: 10px;
}
.btn{
	width: 100%;
	margin-top: 10px;
}

.video-jie{
	width: 95%;
}
.jie-video{
	margin-top: 10px;
}
.jie-video video{
	width: 100%;
	border-radius: 5px;
}
.jie-title{
	font-weight: bold;
	    margin-top: 10px;
	    font-size: 14px;
}
.jie-tool{
	width: 100%;
	margin-top: 15px;
	display: flex;
	justify-content: space-between;
}
.save-img{
	width: 48%;
}
.save-video{
	width: 48%;
}
</style>
