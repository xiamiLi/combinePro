<template>
<div class="wapper">
<p class="title tracking-in-expand-fwd">Welcome {{userDetail.uid }}</p>
</div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const {userDetail}=storeToRefs(userStore)
</script>
<style lang="less" scoped>
@keyframes tracking-in-expand-fwd{0%{letter-spacing:-.5em;transform:translateZ(-700px);opacity:0}40%{opacity:.6}100%{transform:translateZ(0);opacity:1}}
.wapper {
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title{
  font-size:20px;
  text-align:center
}
.tracking-in-expand-fwd {
	-webkit-animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

}
</style>