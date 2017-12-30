<template>
 <fish-layout class="demo3" sider="l">
    <nav slot="header">
      <div class="logo">Easy Product App</div>
    </nav>

    <div slot="sider">
    <fish-menu mode="inline" style="width: 200px;">
        <fish-option index="0" content="應用程式"></fish-option>
        <fish-submenu index="1" mode="inline">
          <template slot="title">後臺管理</template>
          <router-link to="/CreateProduct">
          <fish-option index="1-0" content="新增產品"></fish-option>
          </router-link>
          <fish-option index="1-1" content="查詢產品"></fish-option>
        </fish-submenu>
      </fish-menu>
    </div>
    
     <router-view></router-view>
  
  </fish-layout>
</template>

<script>
export default {
  name: 'demo-layout-base'
}
</script>

</script>
<style>
.fish.layout.demo3 > .header {
    padding: 0;
    background: #e0f0fa;
  }
  .fish.layout.demo3 .has-sider > .content {
    margin: 20px;
    padding: 0.7em 1em;
  }
  .fish.layout.demo3 .logo {
    padding: 1em;
  }
  .logo {
    padding: 0.7em .8em;
    font-weight: bold;
    font-size: 1.2rem;
  }
</style>
