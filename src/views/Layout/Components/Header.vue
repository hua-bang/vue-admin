<template>
  <div id="header-wrap">
    <div class="pull-left header-icon" @click="navMenuState">
      <svg-icon icon-class="menu" class-name="menu"/>
    </div>
    <div class="pull-right">
      <div class="user-info pull-left">
        管理员
      </div>
      <div class="pull-left  header-icon"><svg-icon icon-class="exit" class-name="menu"/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  setup(props, {root}) {
    const navMenuState = () => {
      root.$store.commit('app/SET_COLLAPSE')
    }

    return{
      navMenuState
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#header-wrap{
  position: fixed;
  top: 0;
  right: 0;
  left: $navMenu;
  height: $layoutHeight;
  background-color: #fff;
  @include webkit(box-shadow,0 3px 16px 0 rgba(0,0,0,0.1));
  @include webkit(transition,all .3s ease 0s);
  line-height: 75px;
}
.open{
  #header-wrap{
    left: $navMenu;
  }
}
.close{
  #header-wrap{
    left: $navMenuMin;
  }
}

.header-icon{
  padding: 0 32px;
  svg{
    margin-bottom: -6px;
    font-size: 25px;
    cursor: pointer;
  }
}
.user-info{
  height: 100%;
  padding: 0 32px;
  border-right: 1px solid #ededed;
  font-size: 14px;
  + .header-icon{
    padding: 0 32px;
  }
}
</style>