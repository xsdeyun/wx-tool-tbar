(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tool/videoprint/videoprint"],{"0437":function(e,t,n){"use strict";(function(e){n("b70e");u(n("66fd"));var t=u(n("a45f"));function u(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},1057:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return u}));var u={uToast:function(){return n.e("uni_modules/uview-ui/components/u-toast/u-toast").then(n.bind(null,"6680"))},"u-Textarea":function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u--textarea/u--textarea")]).then(n.bind(null,"7879"))},uTag:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-tag/u-tag")]).then(n.bind(null,"d377"))},uButton:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-button/u-button")]).then(n.bind(null,"b03a"))}},o=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"661c":function(e,t,n){},"666b":function(e,t,n){"use strict";n.r(t);var u=n("ccc6"),o=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);t["default"]=o.a},a45f:function(e,t,n){"use strict";n.r(t);var u=n("1057"),o=n("666b");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("b67e");var i,s=n("f0c5"),r=Object(s["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);t["default"]=r.exports},b67e:function(e,t,n){"use strict";var u=n("661c"),o=n.n(u);o.a},ccc6:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{value:"",video:{url:"",image:""},show:!1}},methods:{Tocurse:function(){e.navigateTo({url:"/pages/tool/videoprint/videocourse/videocourse"})},submint:function(){var e=this,t=/http[s]?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&:\-\+\%]*[/]*/;if(null!=this.value.match(t)){this.$refs.uToast.show({type:"loading",message:"正在加载！"});var n=this.value.match(t)[0];this.$request.request("/TarBar/dyvideo/",{url:n},"get").then((function(t){200==t.code?(e.video.url=t.data.url,e.video.image=t.data.cover,e.show=!0):e.$refs.uToast.show({message:t.msg})})).catch()}else this.$refs.uToast.show({message:"请输入正确的解析链接！"})},savecar:function(t){var n=this;"img"==t?e.setClipboardData({data:this.video.url,success:function(){console.log("复制成功！")}}):e.downloadFile({url:this.video.url,success:function(t){var u=n;200===t.statusCode&&e.saveVideoToPhotosAlbum({filePath:t.tempFilePath,success:function(){u.$refs.uToast.show({message:"保存成功！"})}})}})},clear:function(){this.value=""},copy:function(){var e=this;wx.getClipboardData({success:function(t){e.value=t.data}})}}};t.default=n}).call(this,n("543d")["default"])}},[["0437","common/runtime","common/vendor"]]]);