<template>
  <div>
    <table>
      <tr>
        <td>编号</td>
        <td>名字</td>
        <td>性别</td>
      </tr>
      <tr v-for="App in personEnt" :key="App">
        <td>{{ App.id }}</td>
        <td>{{ App.name }}</td>
        <td>{{ App.sex }}</td>
      </tr>
    </table>
  </div>

  <div class="hello">
    <h1>{{ "666666666666"}}</h1>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
  </div>
</template>




<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "App",
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
