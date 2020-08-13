<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-form-item label="类型:">
            <el-select v-model="value" placeholder="请选择" style="width: 120px;">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="日期:">
            <el-date-picker
                v-model="value2"
                type="datetimerange"
                align="center"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['00:00:00', '23:59:59']">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="关键字:">
            <el-select v-model="search_key" style="width: 80px" placeholder="标题">
              <el-option v-for="item in searchOption" :key="item.value" :value="item.value" :label="item.label">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-input v-model="search_keyWord"  placeholder="请输入内容">
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="danger">搜索</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="danger" class="pull-right">新增</el-button>
        </el-col>
      </el-row>
    </el-form>

    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column prop="title" label="标题" width="680"></el-table-column>
      <el-table-column prop="category" label="类型" width="130"></el-table-column>
      <el-table-column prop="date" label="日期" width="200"></el-table-column>
      <el-table-column prop="user" label="管理员" width="100"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="small">删除</el-button>
          <el-button type="success" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-row class="black-space-30">
      <el-col :span="12">
        <el-button>批量删除</el-button>
      </el-col>
      <el-col :span="12">
        <el-pagination
            class="pull-right"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            background
            layout="total,sizes,prev, pager, next,jumper"
            :total="1000">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "@vue/composition-api";

export default {
  name: "index",
  setup(props){
    const options = reactive([
      {value:1,label:"国际信息"},
      {value:2,label:"国内信息"},
      {value:3,label:"行业信息"},
    ])

    const searchOption = reactive([
      {value:"id",label:"ID"},
      {value:"title",label:"标题"}
    ])
    const value = ref('');
    const value2 = ref('');
    const search_key = ref('');
    const formInline = reactive({})
    const search_keyWord = ref('');
    const handleSizeChange = (val) => {
      console.log(val)
    }

    const handleCurrentChange = (val) => {
      console.log(val)
    }
    const tableData = reactive( [{
      title:"AchoBeta荣获一等奖",
      category:"国内信息",
      date: '2019-09-10 19:31:20',
      user:"管理员"
    },{
      title:"AchoBeta荣获一等奖",
      category:"国内信息",
      date: '2019-09-10 19:31:20',
      user:"管理员"
    },{
      title:"AchoBeta荣获一等奖",
      category:"国内信息",
      date: '2019-09-10 19:31:20',
      user:"管理员"
    },{
      title:"AchoBeta荣获一等奖",
      category:"国内信息",
      date: '2019-09-10 19:31:20',
      user:"管理员"
    }]);
    return {
      options,
      value,
      formInline,
      value2,
      searchOption,
      search_key,
      search_keyWord,
      tableData,
      handleCurrentChange,
      handleSizeChange
    }
  }
}
</script>

<style scoped>
.box{
  background-color: red;
  height: 20px;
}
</style>