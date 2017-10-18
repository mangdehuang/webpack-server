/**
 * Created by Administrator on 2017/10/18.
 */
/**
 * 需要在父组件中添加一个 router-view 来指明子组件渲染的位置
 */
const  user = {
    template:"<div>{{$route.params.id}} <router-view></router-view></div>"
};

const foo = {
    template:'<div>foo</div>'
};

const bar = {
    template:'<div>bar</div>'
}

/**
 * 路由表中 添加children属性 也是一个数组 来指明子路由
 * 路径是在父组件的基础上 进一步寻找  /就表示根路径
 * path:'' 来表示没有下一级是如何显示
 */
const router = new VueRouter({
    routes:[
        {   path:'/user/:id',component:user,
            children:[
                {
                    path:'foo',
                    component:foo
                },
                {
                    path:'bar',
                    component:bar
                },
                {
                    path:'',
                    component:{template:'<div>null</div>'}
                }
            ]
        },
        {
            path:'/foo',
            component:foo
        }
    ]
});

const vue = new Vue({
    router
}).$mount("#app");

//字符串
router.push('/user/23');
// <div>23 <div>null</div></div>

//对象
router.push({path:'/user/24/foo'});
//<div>24 <div>foo</div></div>
// 但是此时之前push进去的23不在了   但是回退一次时 就可以看到23的显示  在回退一次 就是空的
//是按栈的机构push进去   回退是一个一个pop出来   点击router-link会push进去

//命名路由
router.push({name:'user',params:{userId:123}});
//界面没什么反应

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }});


router.replace({path:'/user/25'});

router.push({path:'/user/26'});

router.go(-1);
