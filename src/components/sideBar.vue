<template>
  <div class="sidebar">
    <el-col :span="24" class="main">
      <aside>
        <el-menu
          :default-active="activeIndex"
          :collapse-transition="true"
          :collapse="isCollapse"
          background-color="rgb(50, 65, 87)"
          text-color="#fff"
          :unique-opened="true"
          active-text-color="#fff">
          <Menu :navlist="menuData"></Menu>
        </el-menu>
      </aside>
    </el-col>
  </div>
</template>

<script>
import Menu from "./menu"
export default {
  data() {
    return {
      isCollapse: false,
      menuData: [
        {
          icon: "iconHRrenshirenshiguanli",
          index: "home",
          menuName: "首页",
          url: "/",
          code: "home",
          menuType: "list",
          children: [
            {
              menuName: '首页1',
              menuType: "list",
              code: "home-1",
              children: [
                {
                  index: "home_one",
                  url: "/home_one",
                  code: "home-1.home_one",
                  menuName: "首页1-1",
                  menuType: "page"
                },
                {
                  index: "home_one1",
                  url: "/home_one1",
                  code: "home-1.home_one1",
                  menuName: "首页1-2",
                  menuType: "page"
                }
              ]
            },{
              menuName: '首页2',
              menuType: "list",
              code: "home-2",
              children: [
                {
                  index: "home_two",
                  url: "/home_two",
                  code: "home-2.home_two",
                  menuName: "首页2-1",
                  menuType: "page"
                },
                {
                  index: "home_two1",
                  url: "/home_two1",
                  code: "home-2.home_two1",
                  menuName: "首页2-2",
                  menuType: "page"
                }
              ]
            }
          ]
        },
        {
          icon: "iconshangpinguanli",
          index: "list",
          menuName: "商品列表",
          url: "/",
          code: "list",
          menuType: "list",
          children: [
            {
              index: "list_one",
              url: "/list_one",
              code: "list.list_one",
              menuName: "商品列表1",
              menuType: "page"
            },
            {
              index: "list_two",
              url: "/list_two",
              code: "list.list_two",
              menuName: "商品列表2",
              menuType: "page"
            }
          ]
        }
      ],
      activeIndex: ""
    };
  },
  components: {
    Menu
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route: {
      handler: function(val, oldVal) {
        let that = this;
        that.activeIndex = val.path;
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
    let that = this;
    that.activeIndex = that.$route.path;
    // console.log(that.activeIndex)
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  position: absolute;
  top: 100px;
  bottom: 0px;
  overflow: hidden;
}

.main aside {
  flex: 0 0 230px;
  width: 230px;
}

.main .menu-collapsed {
  flex: 0 0 60px;
  width: 60px;
}

.main .menu-expanded {
  flex: 0 0 230px;
  width: 230px;
}

.main .content-container {
  flex: 1;
  overflow-y: scroll;
  padding: 20px;
}

.main .content-container .content-wrapper {
  background-color: #fff;
  box-sizing: border-box;
}

.main .content-container .breadcrumb-container .title {
  width: 200px;
  float: left;
  color: #475669;
}

.main .content-container .breadcrumb-container .breadcrumb-inner {
  float: right;
}

.main aside .el-menu {
  height: 100%;
  background: rgb(50, 65, 87) !important;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
}

.el-menu-item,
.el-submenu__title {
  color: rgb(191, 203, 217);
}

.el-menu li {
  margin-left: -5px !important;
}

.el-menu .el-menu-item {
  text-align: center;
}

.el-submenu__title:hover {
  background: #495562;
  color: #fff;
}

.el-submenu__title.isactive {
  background: red;
  color: #fff;
}

.el-submenu .el-menu-item:hover {
  background: #495562;
}

.el-menu-item:first-child {
  text-align: center;
}

.el-menu-item.is-active {
  color: #fff;
}

.el-menu .el-submenu .tubiao {
  width: 16px;
  height: 16px;
  margin-right: 30px;
  margin-left: 20px;
  margin-bottom: 12px;
}

.main aside .collapsed {
  width: 60px;
}

.main aside .collapsed .item {
  position: relative;
}

.main aside .collapsed .submenu {
  position: absolute;
  top: 0px;
  left: 60px;
  z-index: 99999;
  height: auto;
  display: none;
}

.container .header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  font-size: 22px;
  color: #fff;
  background: #00c3d0;
  overflow: hidden;
}

.head_right {
  position: fixed;
  right: 60px;
  top: 13px;
  width: 47%;
  height: 70px;
}

.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}

.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}

.header-right {
  float: right;
  padding-right: 50px;
}

.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}

.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}

.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}

.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}

.btn-bell .el-icon-bell {
  color: #fff;
}

.user-name {
  margin-left: 10px;
}

.user-avator {
  margin-left: 20px;
}

.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}

.el-dropdown-menu__item {
  text-align: center;
}

/* 头部 */

.bbox img {
  width: 100%;
}

.logobox {
  width: 7.7%;
  height: 72%;
  float: left;
  margin-top: 25px;
  margin-left: 3%;
}

.logobox img {
  width: 100%;
}

.title {
  float: left;
  height: 100%;
  margin-left: 5%;
}

.title h3 {
  font-size: 22px;
  line-height: 100px;
}

.btnbox {
  overflow: hidden;
  float: right;
  margin-top: 10px;
}

.btnbox p {
  float: right;
  color: #f7f7f7;
  font-size: 12px;
  cursor: pointer;
}

.btnbox i {
  float: right;
  display: block;
  height: 11px;
  width: 1px;
  background: #fff;
  margin: 2.5px 10px 0;
}

.userbox {
  width: 50%;
  overflow: hidden;
  margin-top: 40px;
  float: right;
  position: absolute;
  right: 0;
}

.userbox .userimg {
  float: right;
  width: 14px;
  height: 17px;
  margin-right: 10px;
}

.userbox .userimg img {
  width: 100%;
}

.userbox .account p {
  float: right;
  font-size: 16px;
  color: #f7f7f7;
}

.userbox .account span {
  float: right;
  font-size: 16px;
  color: #f7f7f7;
  line-height: 22px;
  margin-top: 2px;
}

.userbox .surname p {
  float: right;
  font-size: 16px;
  color: #f7f7f7;
}

.userbox .surname span {
  float: right;
  font-size: 16px;
  color: #f7f7f7;
  line-height: 22px;
  margin-right: 20px;
  margin-top: 2px;
}
</style>
