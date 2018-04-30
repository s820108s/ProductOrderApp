<template>
<div id="app"> 


<el-container style="height: 500px; border: 1px solid #eee">
 <el-header>   <systemHeader></systemHeader>  </el-header>

<el-container  >
   <el-aside width="200px">    <systemMenu></systemMenu>    </el-aside >   
   <el-main>      <router-view></router-view>  </el-main>
</el-container>
</el-container>
</div>
</template>

<script>
import SystemMenu from '@/components/SystemMenu'
import SystemHeader from '@/components/SystemHeader'
export default {
  name: 'app',
  components: {
    'systemMenu': SystemMenu,
    'systemHeader': SystemHeader
  }
}
</script>

<style> 
  .el-aside {
    color: #00FF00;
    border-style: solid;
    border-width: 0px 1px 0px 0px;
    background-color: rgb(238, 241, 246);    
      }
</style>
