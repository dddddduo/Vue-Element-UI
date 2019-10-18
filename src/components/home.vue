<template>
  <div class="base-layout-wraper">
    <div class="base-layout">
      <div class="header">
        <!-- <header></header> -->
      </div>
      <div class="side-bar">
        <side-bar ref="sideBar" />
      </div>
      <div class="side-container">
        <div class="side-container-view">
          <div class="title-route">
            <h3>{{titleName}}</h3>
          </div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { company, financingIndex } from "@/service";
import sideBar from "./sideBar"
export default {
  components: {
    sideBar
  },
  data() {
    return {
      dialogVisible: false,
      titleName: ''
    };
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route: {
      handler: function(val, oldVal) {
        let that = this;
        that.titleName = val.name;
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
    const that = this
    // 获取路由的name
    that.titleName = that.$route.name
    // 测试接口
    company().then(res => {
      console.log(res)
    })
    // '?signed=' + '' + '&ns_type=' + 4 + '&detail_info=1'
    financingIndex({
      signed: 'True',
      ns_type: 4,
      detail_info: 1
    }).then(res => {
      console.log(res)
    })
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
.base-layout {
  height: 100%;
  display: flex;
  transition: width 0.4s ease;
  .header {
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #324157;
  }
  .side-container {
    transition: all 0.4s ease;
    overflow-x: auto;
    position: absolute;
    top: 100px;
    left: 230px;
    right: 0;
    .side-container-view {
      background: #fff;
      padding: 20px 124px 20px 40px;
      box-sizing: border-box;
      .title-route {
        padding: 14px 0 27px 0;
        text-align: center;
        h3 {
          font-size: 20px;
          // font-weight: 600;
          color: #272727;
        }
      }
    }
  }
}
</style>
