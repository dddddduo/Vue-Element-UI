<template>
  <div>
    <el-submenu v-for="(item, index) in navlist" :key="index" :index="item.code">
      <template slot="title">
        <i :class="item.icon" class="iconfont"></i>
        <span>{{item.menuName}}</span>
      </template>
      <el-submenu v-for="(son, index) in item.children" :key="index" v-if="son.menuType === 'list'" :index="son.code">
        <template slot="title">
          <span>{{son.menuName}}</span>
        </template>
        <el-menu-item v-for="(son1, index) in son.children" :key="index" @click.native="goto(son1)" v-if="son1.menuType === 'page'" :index="son1.url">
          <span>{{son1.menuName}}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-for="(son, index) in item.children" :key="index" @click.native="goto(son)" v-if="son.menuType === 'page'" :index="son.url">
        <span>{{son.menuName}}</span>
      </el-menu-item>
    </el-submenu>
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
  ul {
    li {
      .el-submenu__title {
        padding-left: 78px !important;
        font-size: 15px;
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
  ul {
    li {
      .el-submenu__title {
        padding-left: 78px !important;
        font-size: 15px;
      }
    }
  }
}
</style>
