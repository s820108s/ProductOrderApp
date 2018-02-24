<template>
<div id="app"> 
 <router-view></router-view>
 <systemHeader class ="test"></systemHeader>
 <systemMenu></systemMenu>
 <mainPage></mainPage>
 
</div>
</template>

<script>
import SystemMenu from '@/components/SystemMenu'
import MainPage from '@/components/MainPage'
import SystemHeader from '@/components/SystemHeader'
export default {
  name: 'app',
  components: {
    'systemMenu': SystemMenu,
    'mainPage': MainPage,
    'systemHeader': SystemHeader
  }
}
</script>
