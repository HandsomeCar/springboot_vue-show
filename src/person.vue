<template>
  <div>
    <table>
      <tr>
        <td>编号</td>
        <td>名字</td>
        <td>性别</td>
      </tr>
      <tr v-for="person in personEnt" :key="person">
        <td>{{person.id}}</td>
        <td>{{person.name}}</td>
        <td>{{person.sex}}</td>
      </tr>
    </table>
  </div>
</template>




<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Person",
  data(){
    return {
      personEnt:[
        {
          id: 1,
          name: '张三',
          sex: '男'
        },
        {
          id: 2,
          name: '李四',
          sex: '女'
        }
      ]
    }
  },
  created() {
    var that=this;
    axios.get('http://localhost:8081/person/selectAll').then(function (resp) {
      that.personEnt=resp.data;
    })
  }

}
</script>

<style scoped>

</style>
