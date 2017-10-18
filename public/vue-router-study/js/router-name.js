/**
 * Created by Administrator on 2017/10/18.
 */
/**
 * 需要在父组件中添加一个 router-view 来指明子组件渲染的位置
 */
const  user = {
    template:"<div>{{$route.params.userId}}</div>"
};
/**
 * 多层路径
 */
const router = new VueRouter({
    routes:[
        {
            name:'user',
            path:'/user/p1/p2/p3/:userId',
            component:user,
        }
    ]
});

const vue = new Vue({
    router
}).$mount("#app");

