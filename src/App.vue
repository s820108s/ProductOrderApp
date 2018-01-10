<template>
<div id="app">
  <el-col :span="5">   
    <el-menu  default-active="1" class="el-menu-vertical-demo" router>
      <el-submenu index="1">
        <template slot="title">
          <router-link to="/"><i class="el-icon-menu"></i>
          <span>應用程式</span>
          </router-link>
        </template>
        <el-menu-item-group>
          <router-link to="/components"><el-menu-item index="1-1">Function 1</el-menu-item>
          </router-link>
          <el-menu-item index="2">Function 2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
 </el-row>
 <router-view></router-view>
</div>
</template>

<style>
  .el-menu {
    background-color: "#00FF00";
    text-color: "#fff";
    active-text-color: "#ffd04b";
    width: "device-width"    
  }
</style>
