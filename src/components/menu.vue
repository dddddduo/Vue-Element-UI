<template>
  <div>
    <el-submenu v-for="(item, index) in navlist" :key="index" v-if="item.menuType === 'list'" :index="item.code">
      <template slot="title">
        <i :class="item.icon" class="iconfont"></i>
        <span>{{item.menuName}}</span>
      </template>
      <Menu :navlist="item.children" v-if="item.children.length"></Menu>
    </el-submenu>
    <el-menu-item v-for="(item, index) in navlist" :key="index" @click.native="goto(item)" v-if="item.menuType === 'page'" :index="item.url">
      <span>{{item.menuName}}</span>
    </el-menu-item>
  </div>
</template>
 
<script>
export default {
  name: "Menu",
  props: ["navlist"],
  data() {
    return {};
  },
  methods: {
    goto(item) {
      console.log(item);
      this.$router.push(item.url);
    }
  }
};
</script>

<style lang='less' scope>
.el-submenu {
  .el-submenu__title {
    background: rgb(50, 65, 87) !important;
    span {
      color: rgb(191, 203, 217);
      font-size: 16px;
    }
    .iconfont {
      font-size: 18px;
      color: #bfcbd9;
      display: inline-block;
      margin-right: 16px;
      margin-left: 20px;
    }
    .el-submenu__icon-arrow {
      color: #bfcbd9;
      font-size: 16px;
    }
  }
  .el-submenu__title:hover {
    background: #495562;
    span {
      color: #fff;
      font-size: 16px;
    }
  }
  .tubiao {
    width: 16px;
    height: 16px;
    margin-right: 23px;
    margin-left: 20px;
  }
  .el-menu {
    .el-menu-item {
      text-align: center;
      font-size: 14px;
      background: rgb(50, 65, 87) !important;
      span {
        color: rgb(191, 203, 217);
      }
    }
  }
}
.is-opened {
  .el-submenu__title {
    background: #495562 !important;
    .iconfont {
      color: #00c3d0;
    }
    span {
      color: #fff;
    }
  }
  .el-menu {
    .el-menu-item {
      background: #495562 !important;
    }
    .is-active {
      span {
        color: #fff;
      }
    }
    .el-menu-item.is-active {
      color: #fff !important;
    }
  }
}
</style>
