<template>
  <!--    新增弹窗-->
  <el-dialog title="新增" :visible.sync="dialogInfo" @close="close" width="700px">
    <el-form label-width="70px" :model="form">
      <el-form-item label="类型：">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题：">
        <el-input v-model="form.name" aria-placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="概况：">
        <el-input type="textarea" v-model="form.type"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogInfo = false">取 消</el-button>
        <el-button type="danger" @click="dialogInfo = false">确 定</el-button>
      </span>
  </el-dialog>
</template>

<script>
import {reactive, ref, watch, watchEffect} from "@vue/composition-api";
export default {
  name: "dialogInfo",
  props:{
    flag:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context){
    const dialogInfo = ref(false)
    const form = reactive({
      name:'',
      region:'',
      type:''
    })

    const close = () => {
      dialogInfo.value = false
      context.emit('close',false);
    }

    watchEffect(()=>dialogInfo.value = props.flag)

    return {
      dialogInfo,
      form,
      close,
      watch
    }
  },
  //单向数据流，父-->子，不能反向改
}
</script>

<style scoped>

</style>