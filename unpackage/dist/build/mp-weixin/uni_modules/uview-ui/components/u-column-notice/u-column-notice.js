(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-column-notice/u-column-notice"],{1507:function(t,n,e){},"1aec":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uIcon:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(e.bind(null,"56a9"))}},u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__get_style([t.textStyle])),i=["link","closable"].includes(t.mode);t.$mp.data=Object.assign({},{$root:{s0:e,g0:i}})},o=[]},3359:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e("1608"));function u(t){return t&&t.__esModule?t:{default:t}}var o={mixins:[t.$u.mpMixin,t.$u.mixin,i.default],watch:{text:{immediate:!0,handler:function(n,e){t.$u.test.array(n)||t.$u.error("noticebar组件direction为column时，要求text参数为数组形式")}}},computed:{textStyle:function(){var n={};return n.color=this.color,n.fontSize=t.$u.addUnit(this.fontSize),n},vertical:function(){return"horizontal"!=this.mode}},data:function(){return{index:0}},methods:{noticeChange:function(t){this.index=t.detail.current},clickHandler:function(){this.$emit("click",this.index)},close:function(){this.$emit("close")}}};n.default=o}).call(this,e("543d")["default"])},3745:function(t,n,e){"use strict";var i=e("1507"),u=e.n(i);u.a},ac5b:function(t,n,e){"use strict";e.r(n);var i=e("1aec"),u=e("d316");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("3745");var c,r=e("f0c5"),a=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"30156c80",null,!1,i["a"],c);n["default"]=a.exports},d316:function(t,n,e){"use strict";e.r(n);var i=e("3359"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-column-notice/u-column-notice-create-component',
    {
        'uni_modules/uview-ui/components/u-column-notice/u-column-notice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ac5b"))
        })
    },
    [['uni_modules/uview-ui/components/u-column-notice/u-column-notice-create-component']]
]);
