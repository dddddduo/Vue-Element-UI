<template>
  <div id="home_one1">
    <el-row>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="3">
        <div class="students-list">
          <i class="el-icon-arrow-left" @click="leftClick"></i>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
        <div class="students-list">
          <Calendar
            v-on:choseDay="clickDay"
            v-on:changeMonth="changeDate"
            :sundayStart="true"
            :markDate='checkList'
            :textTop="['日', '一', '二', '三', '四', '五', '六']"
          ></Calendar>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
        <div class="students-list">
          <ele-calendar
                :render-content="renderContent"
                :data="datedef"
                :prop="prop"
          ></ele-calendar>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
        <div class="students-list">
          <ele-calendar
                :render-content="renderContent"
                :data="datedef"
                :prop="prop"
          ></ele-calendar>
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="3">
        <div class="students-list">
          <i class="el-icon-arrow-right" @click="rightClick"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import eleCalendar from 'ele-calendar'
import 'ele-calendar/dist/vue-calendar.css' 
export default {
  data () {
    return {
      datedef:[
        {date:"2019-10-26"},
        {date:"2019-10-30"},
      ],
      prop:'date' //对应日期字段名
    }
  },
  components: {
    eleCalendar
  },
  mounted () {
    // this.value = '2019-10-11'
    console.log(this.dateCell)
  },
  methods: {
    renderContent(h,parmas) { //设置lunarcalendar=true,parmas返回值包含农历..//  parmas返回当前日期和传入data对应内容
    console.log(h)
      const loop = data =>{
        return (
          data.defvalue.value ? (
            <div><div style="background: #00c3d0;color:#fff;border-radius: 50%;">{data.defvalue.text}</div></div>
          ) : <div>{data.defvalue.text}</div>
        )
      }
      return (
      <div style="width:40px;height:40px;border-radius: 50%;text-align:center;line-height:40px;border:1px solid #eee;color:#333;margin:10px;">
        {loop(parmas)}
      </div>
      );
    },
  }
}
</script>

<style lang="less">
#home_one1 {
  .el-date-table-calendar {
    tr {
      th {
        width:40px !important;
        height:40px !important;
        line-height: 40px;
        text-align: center;
      }
    }
    .el-date-table-calendar__row {
      td {
        text-align: center;
        margin: 0 auto;
      }
    }
  }
}
</style>