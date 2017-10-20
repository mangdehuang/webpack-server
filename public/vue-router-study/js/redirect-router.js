/**
 * Created by Administrator on 2017/10/19.
 */
var Foo = {
    template:'<div>foo</div>'
};

var router = new VueRouter({
    routes:[
        //重定向 到指定路径
        {path:'/foo',component:Foo},
        {path:'/bar',redirect:'/foo'},

        //重定向到指定路由 path必须
        {name:'foo1',path:'/foo',component:Foo},
        {path:'/baz',redirect:{name:'foo1'},alias:'/baz1'}
    ]
});

const vue = new Vue({
    router
}).$mount("#app");