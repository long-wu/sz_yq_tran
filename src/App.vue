<template>
  <!-- <Header></Header> -->
  <el-header style="height: 60px">
    <nav>
      <div class="logo">
        <span style="top:10px;left:35px;position:absolute">
          <img class="header-logo" src="@/assets/img/logo_1627899410263.png" alt="logo" >
        </span>
        
        <el-divider direction="vertical"></el-divider>
        <span class="logo-text">{{$t('nav.title')}}</span>
      </div>
      <ul>
        <li class="nav-content">
          <a href="">
            <span class="nav-content-span">{{$t('nav.home')}}</span>
            <!-- <span class="nav-content-span">{{$t('nav.home')}}</span> -->
          </a>
          <a href="">
            <span class="nav-content-span">{{$t('nav.background')}}</span>
            <!-- <span class="nav-content-span">{{$t('nav.home')}}</span> -->
          </a>
          <a href="">
            <span class="nav-content-span">{{$t('nav.team')}}</span>
            <!-- <span class="nav-content-span">{{$t('nav.home')}}</span> -->
          </a>
        </li>
      </ul>
      <div class="language">
        <el-switch
        :change="changeLanguage(value)"
        v-model="value"
        active-text="中"
        inactive-text="EN"
        active-color="#13ce66"
        inactive-color="#13ce66"
        active-value="100"
        inactive-value="0"
      />
      </div>
    </nav>
  </el-header>
  <el-divider />
    <div class="params-button">
      <el-button  type="text" @click="drawer = true"><span class="params-text">{{$t('body.params')}}</span></el-button>
    </div >

    <el-drawer v-model="drawer" :show-close="true"
    title="" 
    direction="ltr"
    size="30%">
    <el-form :model="form" style="margin-top:50px">
      <span class="drawer-title">{{$t('body.params')}}</span>
      <el-divider />
      <el-form-item  :label-width="formLabelWidth" style="margin-top:50px">
        <span class="drawer-label">隔离天数</span>
        <el-input style="background-color:#9f9e9e " v-model="form.days" autocomplete="off" />
      </el-form-item>
      <el-form-item  :label-width="formLabelWidth" style="margin-top:50px">
        <span class="drawer-label">开始天数</span>
        <el-input v-model="form.beginDays" autocomplete="off" />
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" style="margin-top:50px">
        <span class="drawer-label">实施力度</span>
        <el-input v-model="form.dimension" autocomplete="off" />
      </el-form-item>
    </el-form>
    <div class="demo-drawer__footer">
      <el-button style="height:30px;width:100%;margin-top:50px;background-color:#bff;font-size:1rem;font-family: Barlow-Medium;">CONFIRM</el-button>
    </div>
    </el-drawer>
  <L7-map></L7-map>
</template>



<script setup>
import { reactive,ref } from 'vue'
const drawer = ref(false)

const form = reactive({
  days: '',
  beginDays:'',
  dimension:'',
})
</script>

<script>
import L7Map from '@/view/map';

export default {
  name: 'App',
  components: {
    L7Map,
  },
  data() {
    return {
      value: true,
    }
  },
  methods: {
    changeLanguage(){
      if(this.value==100){
        this.$i18n.locale='zh' 
      }
      else{
        this.$i18n.locale='en'
      }
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin:0;
}
body{
  background-color: #0c0c0c;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
.l7-control-logo, .amap-copyright, .amap-logo {
  display: none !important;
}
nav {
  padding: 0 4rem;
  top:0;
  height:5.5rem;
  line-height:100px;
  display: flex;
  justify-content:space-between;
}

nav li{
  width: 60rem;
  text-align: center;
  float: left;
  
}

nav a {
  display:inline-block;
  font-weight: bold;
  color: #d7dfe7;
  text-decoration: none;
  width: 20%;
  
}

.nav-content-span:hover{
  color: #fff;
}

.nav-content{
  list-style: none;
}
.nav-content-span{
  display: inline-block;
  padding: 0 3 rem;
  color: #a6a6a8;
  font-size: 1.4rem;
  letter-spacing: .1rem;
  font-family: Barlow-Medium;
  font-weight: 400;
}

.params-window{
  width: 30rem;
  height: 50rem;
  top:7.8rem;
}

.log{
  width: 200px;
  height: 200px;
  margin: 10%;
}
.header-logo{
  
  height: 50px;
  padding-top:10px;
}

.language span{
  font-size: 1rem;
  letter-spacing: .1rem;
  font-family: Barlow-Medium;
  color: #a6a6a8;
}
.logo-text{
  font-size: 0.5rem;
  letter-spacing: .1rem;
  font-family: Barlow-Medium;
  color: #fff;
}


.params-button{
  position: absolute;
  margin-top: 1rem;
  margin-left: 2rem;
}

.params-text{
  position: absolute;
  padding-left: 2rem;
  line-height: 1.5rem;
  letter-spacing: 1px;
  border-left: .2rem solid #bff;
  cursor: pointer;
  font-family: Barlow-Medium;
  color: #fff;
  font-size: 1.4rem;
}
/*输入框背景颜色*/
.el-input__wrapper{
  background-color:#121213;
}
/*抽屉背景颜色*/
.el-drawer.ltr{
  padding: 0;
  background-color: #0c0c0c !important;
}
.drawer-label{
  font-family: "Barlow-Regular";
  line-height: 1.6rem;
  letter-spacing: .02rem;
  color: #9f9e9e;
}
.drawer-title{
  color: #fff;
  font-size: 1.5rem;
  font-family: "Barlow-Medium";
  letter-spacing: 1px;
  margin-top:20px;
  position: absolute;
  left: 20px;
  top:50px;
}
</style>
