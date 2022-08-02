const baseUrl = '';
var header = {
	'content-type': 'application/json;charset=utf-8'
};
const request = (url = '', date = {}, type = 'GET') => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: baseUrl + url,
			data: date,
			header: header,
			dataType: 'json',
		}).then((response) => {
			if (response[1].statusCode == 403) {
				uni.reLaunch({
					url: "/pages/login/login",
				})
			} else {
				setTimeout(function() {
					uni.hideLoading();
				}, 200);
				let [error, res] = response;
				resolve(res.data);
			}
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
};
const axiosx = (url = '', date = {}, type = 'GET') => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: url,
			data: date,
			header: header,
			dataType: 'json',
		}).then((response) => {
			setTimeout(function() {
				uni.hideLoading();
			}, 200);
			let [error, res] = response;
			resolve(res.data);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
}
export default {
	request,
	axiosx
}
