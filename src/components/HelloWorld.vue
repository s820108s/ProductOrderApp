<template>
  <div class="product">
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column label="圖片">
         <template slot-scope="scope">
                <img :src=pic />
         </template>
        </el-table-column>
      </el-table>
    </el-main>
</div>
</template>

<script>
export default {
  name: 'product',
  data () {
    const item = {
      date: '2018-01-09',
      name: '泱泱',
      address: '泱泱我老婆'
    }
    return {
      tableData: Array(20).fill(item),
      pic: 'https://4.bp.blogspot.com/-hN5tTUr0CU8/WMgPkELE9aI/AAAAAAAAVbU/7SmFV-TwRcQcT3AmMtaPJZky62-4WkoRACKgB/s280/33.jpg'
    }
  }
}
</script>

<style>
  .img{
    width: 100%;
    height: auto;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }  
  .el-aside {
    color: #333;
  }
</style>