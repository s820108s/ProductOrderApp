<template>
<div id="app">
  <el-col :span="5">   
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>應用程式</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">Function 1</el-menu-item>
          <el-menu-item index="1-2">Function 2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
 </el-row>
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
