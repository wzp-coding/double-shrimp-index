# duixia2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serven
```

### Compiles and minifies for production
```
npm run build  
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### element ui
## less less-loader

### 登录

git config --global user.name "xxx"
git config --global user.email "xxxx@qq.com"

### 连接分支

git remote add origin https://gitee.com/Sinlon/front-end-of-prawn

1.在本地新建一文件夹用来存放项目代码 （eg:xny）

2.进入该文件，右键选择 git bush here，打开命令窗后，输入初始化命令：git init

3.命令行：git remote add origin 后面是项目所在远程仓库地址（不是远程分支名称，而是仓库地址）

4.拉取远程分支到本地：git fetch origin dev(dev是你要拉取的远程分支名称)

5.在本地创建dev分支并且切换到该分支：git checkout -b dev(本地分支名称)

6.拉取分支到本地：git pull origin dev(远程分支名称)



### 推送分支

git add . 

git commit -m "wonasnkda"

git push --set-upstream origin xxx

git push 


### 合并master到你的分支，同步master

1 创建本地master分支

2 命令行：git remote add origin 后面是项目所在远程仓库地址（不是远程分支名称，而是仓库地址）

3 拉取远程分支到本地：git fetch origin dev(dev是你要拉取的远程分支名称)

4.在本地创建dev分支并且切换到该分支：git checkout -b dev(本地分支名称)

5.拉取分支到本地：git pull origin dev(远程分支名称)

6 在master分支上 git pull 

7 在切换到你的分支上，git merge master




vuex是实现**组件全局状态**（数据）管理的一种机制，可以方便**组件之间的数据共享**。




### 安装Vuex

安装依赖包

npm install vuex -s
```

导入vuex包

import Vuex from 'vuex'
Vue.use(Vuex)
```

创建store对象

```
const store = new Vuex.Store({
	//state 中存放的就是全局共享的数据
	state:{count:0}
})
```

将store对象挂载到vue实例中,所有的组件即可从中获取数据

```
new Vue({
	el:"#app",
	render:h => h(app),
	router,
	store
})
```

#### vueui的安装vuex

```
去安装依赖下载vuex
去插件安装@vue/cli-plugin-vuex
才能够生成已经导入的文件
```

### 使用vuex的Store保存数据

#### 访问vuex中的数据的第一种方式

```
this.$store.state.xxx
补充:在template中放入插值表达式{{$store.state.xxx}}可以省略this
```

#### 访问vuex中的数据的第二种方式

```
xxx.vue从vuex中按需导入mapstate函数,
import {mapState} from 'vuex'
```

通过导入的mapstate函数，将当前组件需要的全局世聚，映射为当前组件的computed计算属性：

```
//将全局组件映射为当前组件的计算属性
computed:{
	...mapState(['count'])
}
```



### mutation用于变更Store中的数据

#### 注意事项

1. vuex是**不允许在子组件修改**vuex中的数据的，是不合法的修改
2. **只能通过mutation**变更store数据，并可以**监控所有数据的变化**

#### 使用方式

```
在vuex中定义:
mutations:{
	函数名xxx(state中的数据名){
		//方法体
	}
}
```

```
子组件中使用:
methods:{
	xxx(){
		this.$store.commit('mutations中的函数名xxx')
	}
}
```





