<template>
  <!-- <Header></Header> -->
  <el-header style="height: 5.5rem;">
    <nav>
      <div class="logo">
        <img class="header-logo" src="@/assets/img/logo_1627899410263.png" alt="logo" >
        <el-divider direction="vertical"></el-divider>
        <span class="logo-text">COVID-19-PREDICTION</span>
      </div>
      <ul>
        <li class="nav-content">
          <a href="">
            <span class="nav-content-span">HOME</span>
            <!-- <span class="nav-content-span">{{$t('nav.home')}}</span> -->
          </a>
          <a href="">
            <span class="nav-content-span">BACKGROUND</span>
            <!-- <span class="nav-content-span">{{$t('nav.home')}}</span> -->
          </a>
          <a href="">
            <span class="nav-content-span">TEAM</span>
            <!-- <span class="nav-content-span">{{$t('nav.home')}}</span> -->
          </a>
        </li>
      </ul>
      <div class="language">
          <el-switch
            :change="changeLanguage(value)"
            active-text="中"
            inactive-text="EN"
            v-model="value"
            active-color="#aba9a9"
            inactive-color="#aec9e1"
            active-value="100"
            inactive-value="0">
          </el-switch>
      </div>
    </nav>
  </el-header>
  <L7-map></L7-map>
</template>

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
      // if(this.value==100){
      //   this.$i18n.locale='zh' 
      // }
      // else{
      //   this.$i18n.locale='en'
      // }
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
  line-height:7.8rem;
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
  
  height: 40px;
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
</style>
