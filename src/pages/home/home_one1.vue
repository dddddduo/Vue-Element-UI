<template>
  <div id="home_one1">
    <ele-calendar
          :render-content="renderContent"
          :data="datedef"
          :prop="prop"
    ></ele-calendar>
  </div>
</template>

<script>
import eleCalendar from 'ele-calendar'
import 'ele-calendar/dist/vue-calendar.css' 
export default {
  data () {
    return {
      datedef:[
        {"date":"2019-10-26","content":null,"cid":null},
        {"date":"2019-10-30","content":null,"cid":null},
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
      const loop = data =>{
        return (
          data.defvalue.value ? (<div><div class="current" style="background: #1989FA;">{data.defvalue.text}</div>
          </div>) : <div>{data.defvalue.text}</div>
        )
      }
      return (
      <div  style="min-height:60px;">
        {loop(parmas)}
      </div>
      );
    },
  }
}
</script>

<style lang="less" scoped>
.is-selected {
  color: #1989FA;
}
.current {
  background: #1989FA;
}
</style>