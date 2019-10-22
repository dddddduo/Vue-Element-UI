<template>
  <div id="home_one">
    <el-row :gutter="20">
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
        <div class="students-list">
          <div class="icon-list"><i class="el-icon-arrow-left" @click="leftClick"></i></div>
        </div>
      </el-col>
      <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
        <div class="students-list">
          <Calendar
            v-on:choseDay="clickDay"
            v-on:changeMonth="changeDate"
            :sundayStart="true"
            :markDateMore='checkList'
            ref="Calendar"
            :textTop="['日', '一', '二', '三', '四', '五', '六']"
          ></Calendar>
        </div>
      </el-col>
      <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
        <div class="students-list">
          <Calendar
            ref="Calendar1"
            v-on:choseDay="clickDay"
            v-on:changeMonth="changeDate"
            :sundayStart="true"
            :markDateMore='checkList'
            :textTop="['日', '一', '二', '三', '四', '五', '六']"
          ></Calendar>
        </div>
      </el-col>
      <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
        <div class="students-list">
          <Calendar
            ref="Calendar2"
            v-on:choseDay="clickDay"
            v-on:changeMonth="changeDate"
            :sundayStart="true"
            :markDateMore='checkList'
            :textTop="['日', '一', '二', '三', '四', '五', '六']"
          ></Calendar>
        </div>
      </el-col>
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
        <div class="students-list">
          <div class="icon-list"><i class="el-icon-arrow-right" @click="rightClick"></i></div>
        </div>
      </el-col>
    </el-row>
    <!-- // v-on:isToday="clickToday"
    // :markDate=arr // arr=['2018/4/1','2018/4/3'] 标记4月1日和4月3日 简单标记
    //:markDateMore=arr // 多种不同的标记
    // 第一个标记和第二个标记不能同时使用
    // :agoDayHide='1514937600' //某个日期以前的不允许点击  时间戳10位
    // :futureDayHide='1525104000' //某个日期以后的不允许点击  时间戳10位
    // :sundayStart="true" //默认是周一开始 当是true的时候 是周日开始
      arr=[{date:'2018/4/1',className:"mark1"}, {date:'2018/4/13',className:"mark2"}] -->
  </div>
</template>

<script>
import Calendar from 'vue-calendar-component'
export default {
  data () {
    return {
      checkList: [
        { date: '2019-10-11', className: 'calendar-mark-wh' },
        { date: '2019-10-15', className: 'calendar-mark-wh' },
        { date: '2019-10-18', className: 'calendar-mark-wh' }
      ]
    }
  },
  components: {
    Calendar
  },
  mounted () {
    let that = this
    this.$refs.Calendar1.NextMonth('');
    this.$refs.Calendar2.NextMonth('');
    this.$refs.Calendar2.NextMonth('');
    that.checkList[
      { date: '2019-10-11', className: 'calendar-mark-wh' },
      { date: '2019-10-15', className: 'calendar-mark-wh' },
      { date: '2019-10-18', className: 'calendar-mark-wh' }
    ]
  },
  methods: {
    clickDay(data) {
      console.log(1)
      console.log(data); //选中某天
    },
    leftClick () {
      this.$refs.Calendar.PreMonth('');
      this.$refs.Calendar1.PreMonth('');
      this.$refs.Calendar2.PreMonth('');
      // this.$refs.Calendars.ChoseMonth("2018-12-13");
    },
    rightClick () {
      this.$refs.Calendar.NextMonth('');
      this.$refs.Calendar1.NextMonth('');
      this.$refs.Calendar2.NextMonth('');
    },
    changeDate(data) {
      console.log(2)
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(3)
      console.log(data); //跳到了本月
    }
  }
}
</script>

<style lang="less">
.wh_jiantou1 {
  display: none !important;
}
#home_one {
  .students-list {
    .wh_container {
      .wh_content_all {
        .wh_top_changge {
          li {
            .wh_jiantou1 {
              display: none !important;
            }
            .wh_jiantou2 {
              display: none;
            }
          }
        }
      }
    }
    .icon-list {
      line-height: 333px;
      i {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>