<template>
	<view class="content">
		<nav-bar title="版本详情"></nav-bar>
		<view class="steps">
			<view class="cu-timeline">
				<view class="cu-time">07-20</view>
				<view class="cu-item text-blue">
					<view class="bg-blue content">
						<text>v1.0</text> 1.0版本开发完成
					</view>
				</view>
			</view>
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
	.content {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
		box-sizing: border-box;
		padding-top: 30px;
	}

	.steps {
		width: 90%;
		min-height:600px;
	}
	.cu-timeline {
		height: 120px;
		display: block;
		background-color: #ffffff;
	}
	
	.cu-timeline .cu-time {
		width: 120upx;
		text-align: center;
		padding: 20upx 0;
		font-size: 26upx;
		color: #888;
		display: block;
	}
	
	.cu-timeline>.cu-item {
		padding: 30upx 30upx 30upx 120upx;
		position: relative;
		display: block;
		z-index: 0;
	}
	
	.cu-timeline>.cu-item:not([class*="text-"]) {
		color: #ccc;
	}
	
	.cu-timeline>.cu-item::after {
		content: "";
		display: block;
		position: absolute;
		width: 1upx;
		background-color: #ddd;
		left: 60upx;
		height: 100%;
		top: 0;
		z-index: 8;
	}
	
	.cu-timeline>.cu-item::before {
		content: "🏷️";
		display: block;
		position: absolute;
		top: 36upx;
		z-index: 9;
		width: 50upx;
		height: 50upx;
		text-align: center;
		border: none;
		line-height: 50upx;
		left: 36upx;
		background-color:#2979ff;
		border-radius: 50%;
		color: #fff;
	}
	.cu-timeline>.cu-item>.content {
		padding: 30upx;
		border-radius: 6upx;
		display: block;
		line-height: 1.6;
		background-color:#2979ff;
		color: #fff;
	}

</style>
