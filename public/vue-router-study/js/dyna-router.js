    /**
 * Created by Administrator on 2017/10/12.
 */

    /**
     * 将参数传入到组件中 通过$route.params 他是一个对象 key是路由表中对应的：后面的内容 value是router-link中的值
     * 一个组件可在路由表中出现多次 显示不同的内容
     *
     */
    const user = {
        template:"<div>user {{$route.params.id}} {{$route.params.post_id}}</div>"
    };


    const router = new VueRouter({
        routes:[
            {path:'/user/:id',component:user},
            {path:'/user/:id/post/:post_id',component:user}
        ]
    });

    const app = new Vue({
        router
    }).$mount("#app");