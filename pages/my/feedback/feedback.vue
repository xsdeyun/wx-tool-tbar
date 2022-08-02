<template>
	<view class="feedback-content">
		<view class="text-value">
			<u--textarea v-model="value" height="100" placeholder="请输入内容" ></u--textarea>
		</view>
		<view class="btn">
			<u-button type="info" color="#000" shape="circle" text="确定提交"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:"",
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.feedback-content{
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: #fff;
}
.text-value{
	width: 90%;
	margin-top: 20px;
	background: #ffffff;
	box-shadow:  20px 20px 60px #d9d9d9,
	             -20px -20px 60px #d9d9d9;
	border-radius: 5px;
}
.btn{
	    width: 90%;
	    margin-top: 20px;
}
</style>
