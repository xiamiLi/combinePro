<template>
  <div class="wapper">
  <div v-if='token' class="login">Login</div>
  <div v-else class="login-container">
    <div><img src="@/assets/logo.svg" class="logoImg" alt=""  /></div>
    <div><a class="btn-link" @click="handlerLogin()">SIMS enabled login</a></div>
  </div>
  </div>
  
  
</template>
<script setup lang="ts">
import AuthService from '@/utils/authService';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
import {useInitLogin } from './index'
const {
      query: { token = '', redirect = '' },
    } = useRoute()
    const handlerLogin=()=>{
      const loginAuth = new AuthService()
      loginAuth.start() //authorization
    }
    onMounted(() => {
      useInitLogin(token as string, redirect as string)
    })
    // init login
    // useInitLogin(token as string, redirect as string)
</script>
<style lang="less" scoped>
.wapper{
  width: 100%;
  height: 100vh;
   display: flex;
    justify-content: center;
    align-items: center;
  background: linear-gradient(135deg, #a7cee0 50%, #d0dea7);
  .login {
  margin-top: 60px;
  text-align: center;
}
.login-container{
    width: 400px;
    height: 300px;
    margin-top: -160px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 4px solid red;
    background-color: rgba(255, 255, 255, 0.25);
backdrop-filter: blur(6px);
-webkit-backdrop-filter: blur(6px);
border: 1px solid rgba(255, 255, 255, 0.18);
box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
-webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
border-radius: 12px;
-webkit-border-radius: 12px;
color: rgba(255, 255, 255, 0.75);
    


  .logoImg{
    height: 50px;
    margin-bottom: 30px;
  }
  .btn-link{
  position: relative;
    display: block;
    margin: 10px 0;
    font-size: 18px;
    font-family: "DBSans", sans-serif;
    color: #fff !important;
    background: #167D87;
    cursor: pointer;
    font-weight: 600;
    padding: 20px 40px;
    transition: all 0.2s cubic-bezier(0.865, 0.14, 0.095, 0.87);
    text-align: center;
    border-radius: 4px;
}
}

}


</style>
