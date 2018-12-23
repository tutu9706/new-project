<template>
    <div>
        我是user
        <div class="user-list">
          <!-- v-for需要加入我们key值 需要动态绑定:key="" -->
          <router-link 
            style="padding:0 20px;"
            :to="'/user/'+item.tip+'/'+item.id" 
            :key="index" 
            v-for="(item,index) in userList"
          >{{item.userName}}</router-link>
        </div>
        <div class="user-info" v-if="userInfo.userName" style="font-size:20px;">
          <p>姓名：{{userInfo.userName}}</p>
          <p>性别：{{userInfo.sex}}</p>
          <p>爱好：{{userInfo.hobby}}</p>

        </div>
    </div>
</template>
<script>
let data = [
        {
            id:1,
            tip:'vip',
            userName:"leo1",
            sex:'男',
            hobby:'写代码'
        },
        {
            id:2,
            tip:'vip',
            userName:"leo2",
            sex:'男',
            hobby:'唱歌'
        },
        {
            id:3,
            tip:'common',
            userName:"leo3",
            sex:'男',
            hobby:'读书'
        }
    ]
export default {
  name: "component_name",
  data () {
    return {
      userList:data,
      userInfo:{},  //放入我们this.$route.param.userId 在 userList中对应的那个信息

    };
  },
  watch:{
    //浅度监控
    $route(){
      console.log("监控$route为："+this.$route.params.userId);
      this.getData(); 
    }

    // $route:{//深度监控
    //   handler(){
    //     console.log("监控$route为："+this.$route.params.userId);
    //   },
    //   deep:true
    // }
  },
  created(){//生命周期钩子函数， 编译之前
    //通过在Vue根实例的router配置传入 router 实例
    //$router router实例对象
    //$route 当前激活的路由信息对象，每个组件实例都会有
    //beforeRouteEnter(){}  进入组件前钩子函数
    //beforeRouteLeave(){}  离开组件前钩子函数
    this.getData();
  },
  methods:{
    getData(){
      // console.log(this.$route.params.userId);
      let id = this.$route.params.userId;
      if(id){//如果id存在我们就过滤userInfo，如果不存在我们就清空userInfo不现实任何人的信息
        this.userInfo = this.userList.filter((item)=>{
          return item.id == id;
        })[0]
      }else{
        this.userInfo = {}
      }
      // console.log(this.userInfo); 
    }
  }

}
</script>
<style>
</style>