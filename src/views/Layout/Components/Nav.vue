<template>
  <div id="nav-wrap">
    <h1 class="logo">
      <img src="../../../assets/logo.png" alt="">
    </h1>
    <el-menu default-active="1-1" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="transparent" text-color="#fff" style="border-right:none" active-text-color="#fff" router>
      <template v-for="(item,index) in routers">
        <el-submenu v-if="!item.hidden" :key="item.id" :index="index+''">
          <!--        一级菜单-->
          <template slot="title">
            <svg-icon :iconClass="item.meta.icon" className="menu"/>
            <span slot="title">{{item.meta.name}}</span>
          </template>
          <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">{{subItem.meta.name}}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "@vue/composition-api";
export default {
  name: "Nav",
  setup(prop,{root}) {
    /**
     * 数据
     */
    const isCollapse = ref(false)

    const routers = reactive(root.$router.options.routes)

    return {
      isCollapse,
      routers
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#nav-wrap{
  position: fixed;
  top: 0;
  left: 0;
  width: $navMenu;
  height: 100vh;
  background: #344a5f;
  svg{
    font-size: 20px;
    margin-right: 10px;
  }
}
.logo{
  text-align: center;
  img{
    margin: 20px auto 20px;
    width: 92px;
  }
}

</style>