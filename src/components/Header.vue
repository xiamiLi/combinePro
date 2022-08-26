<template>
  <div class="layout-header">
    <div class="wapper">
      <div class="left item">
        <img src="@/assets/logo.png" class="logoImg" alt="" @click="goToHome" />
        <ul class="sub-apps">
          <li v-for="item in microApps" :class="{ active: item.activeRule === current }" :key="item.name" @click="goto(item)">{{ item.name }}</li>
        </ul>
        </div>  
      <div class="right item">
        <span class="userinfo"><img src="@/assets/user-login.png" class="loginImg" alt="login" /> {{userDetail.uid}}</span>
        <span><img src="@/assets/logout.png" class="logoutImg" alt="logout" @click="logout" /></span>
      </div>
  </div>
  </div>
  
</template>
<script setup>
import { ref } from 'vue'
import microApps from '@/micro/app.ts'
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { localStorageFormat,session } from '@/utils/common'
import {  LOCALSTORAGE_KEY_MAP,SESSION_KEY_MAP } from '@/utils/constant'
const userStore = useUserStore()
const {userDetail}=storeToRefs(userStore)
const goto = (item) => {
  history.pushState(history.state, item.activeRule, item.activeRule)
}
const logout=()=>{
  localStorageFormat.remove(LOCALSTORAGE_KEY_MAP.userInfo)
  session.remove(SESSION_KEY_MAP.redirectUrl)
  history.pushState(history.state, 'null', '/login')
}
</script>
<style lang="less" scoped>
.layout-header {
  padding:0 20px;
  height: 60px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 60px;
  min-width: 900px;
  .wapper{
  display:flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between ;
  align-items:center;
  
 .left{
  display:flex;
  align-items:center ;
    .logoImg {
      height: 30px;
      vertical-align: middle;
  }
    .sub-apps {
    padding-left: 20px;
    list-style: none;
    margin: 0;
    min-width: 100px;
    flex:1;
    li {
      list-style: none;
      display: inline-block;
      padding: 0 20px;
      font-weight: 500;
      font-size: 18px;
      vertical-align: middle;
      cursor: pointer;
      &.active {
        color: #167d86;
        text-decoration: underline;
      }
      &:hover {
        color: #167d86;
        text-decoration: underline;
      }
    }
  }
 }
 .right{
  display:flex;
  align-items:center ;
  .userinfo{
    padding-right: 20px;
    .loginImg{
      width: 25px;
      vertical-align: sub;
    }
  }
  .logoutImg{
    width: 25px;
    vertical-align: sub;
    // padding-left: 10px;
    cursor: pointer;
  }
 }

}

}


</style>
