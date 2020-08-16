<template>
  <div id="category">
    <el-button type="danger">添加一级分类</el-button>
    <hr  style="margin-left: -30px;margin-right: -30px;margin-top: 30px;margin-bottom: 30px;background-color: #e9e9e9; height: 1px; border: none;"/>
    <div>
      <el-row :gutter="30">
        <el-col :span="8">
          <div class="category-wrap">
            <div class="category">
              <h4>
                <svg-icon icon-class="plus"></svg-icon>
                新闻
                <div class="button-group">
                  <el-button size="mini" type="danger" round>编辑</el-button>
                  <el-button size="mini" type="success" round>添加子级</el-button>
                  <el-button size="mini" round>删除</el-button>
                </div>
              </h4>
              <ul>
                <li>
                  国内
                  <div class="button-group">
                    <el-button size="mini" type="danger" round>编辑</el-button>
                    <el-button size="mini" round>删除</el-button>
                  </div>
                </li>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
              </ul>
            </div>
            <div class="category">
              <h4>
                <svg-icon icon-class="minus"></svg-icon>
                新闻
              </h4>
              <ul>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <h4 class="menu-title">
            一级分类编辑
          </h4>
          <el-form label-width="120px" :model="form" class="form-wrap">
            <el-form-item label="一级分类名称:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="二级分类名称:">
              <el-input v-model="form.region"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="danger">确定</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted, watchEffect } from "@vue/composition-api";
export default {
  name: "category",
  setup(){
    const form = reactive({
      name: '',
      region: '',
      type: ''
    })

    return {
      form
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/config";
ul{
  padding: 0;
  margin:0;
}
h4{
  margin: 0;
  padding: 0;
}
.category-wrap{
  div:first-child{
    &:before { top: 20px }
  }
  div:last-child{
    &:before { bottom: 22px }
  }
}
.category{
  line-height: 44px;
  position: relative;
  cursor: pointer;
  &:before{
    content: '';
    position: absolute;
    left:22px;
    top: 0;
    width: 32px;
    bottom: 0;
    border-left: 1px dotted #000;
  }
  h4{
    padding-left: 40px;
  }
  svg{
    position: absolute;
    left: 13px;
    top: 15px;
    font-size: 17px;
    background-color: #fff;
  }
  li{
    list-style: none;
    position: relative;
    padding-left: 36px;
    margin-left: 24px;
    &:before{
      content: '';
      position: absolute;
      left: 0;
      top: 20px;
      width: 32px;
      border-bottom: 1px dotted #000;
    }
  }
  li, h4{
    @include webkit(transition, all .3s ease 0s);
    &:hover {
      background-color: #f3f3f3;
      .button-group{
        display: block;
      }
    }
  }
}
.button-group{
  display: none;
  position: absolute;
  z-index: 2;
  right: 11px;
  top: 0;
  font-size: 12px;
}
.menu-title{
  line-height: 44px;
  background-color: #f3f3f3;
  padding-left: 22px;
}
.form-wrap{
  width: 410px;
  padding-top: 26px;
}
</style>