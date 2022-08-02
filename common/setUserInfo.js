export default() => {
    return new Promise((resolve, reject) => {
        uni.getUserProfile({
            desc: '用于完善个人资料' // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        })
        .then((response) => {
            if (response[1].errMsg === 'getUserProfile:ok') {
                uni.setStorageSync('userInfo', response[1].userInfo); //存储用户信息
                resolve(response[1]);//返回的信息 
            }else {
                uni.showToast({
                    title: '授权失敗',
                    icon: 'error'
                });
            }
        }).catch((reject) => {
             console.log('拒绝授权',reject)
        })
    })
}