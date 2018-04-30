 <template>
 <el-col :span="2">   
    <el-menu  default-active="1" class="el-menu-vertical-demo" router >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-question"></i>
          <span>關於我</span>          
        </template>
        <el-menu-item-group>
          <router-link :to="{ name: 'IntroductionPage' }">
            <el-menu-item index="IntroductionPage">自我介紹</el-menu-item>   
          </router-link>     
          <router-link :to="{ name: 'LearnPath' }">
          <el-menu-item index="LearnPath">學習歷程</el-menu-item>   
          </router-link>     
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
 </el-row>
 </template>

