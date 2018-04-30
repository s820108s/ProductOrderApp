<template>
<div>
<el-header>
<router-link :to="{ name: 'MainPage' }">
   <img :src=pic height="80" width="80" class="pic-Circle"/>  
   </router-link>    
</el-header>
</div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      pic: 'https://scontent.ftpe3-1.fna.fbcdn.net/v/t1.0-9/11170350_1032323796785374_7306333596432575528_n.jpg?oh=f708003b4d07114114e396130a5d97e3&oe=5B1575AB'
    }
  }
}
</script>

<style>
   .el-header {
    height: 80px !important;
    background-color: #E6E6FA;    
    border-width: 2px 100px 4px 20px;
  }
  .pic-Circle{      
    border-radius:50%;
  }
</style>
