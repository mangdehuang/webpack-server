/**
 * Created by Administrator on 2017/10/19.
 */
const Foo = {
    template:"<div>foo</div>"
};
const Bar = {
    template:"<div>Bar</div>"
};
const Baz = {
    template:"<div>Baz</div>"
};

//在router中声明componets属性 default是默认的  key对应名字
const router = new VueRouter({
    routes:[
        {
            path:"/first",
            components:{
                default:Foo,
                a:Bar,
                b:Baz
            }
        }
    ]
});
const vue = new Vue({
    router
}).$mount("#app");