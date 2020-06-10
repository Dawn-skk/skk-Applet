<template>
  <div>
    <input type="text" v-model="userName">
    <input type="text" v-model="pass">
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name:'Login',
    data () {
    return {
      userName:'',
      pass:''
    }
  },
  methods: {
    submit(){
      if(this.userName&&this.pass!='')
      {
        Axios({
        url:'http://dyzuis.cn:8080/test/jwlogin',
        method:'post',
        data:{
          "jwusername": this.userName,
          "jwpassword": this.pass
        }
      }).then(res=>{
        if(res.data.code=='0')
        {
          alert(res.data.describe)
          this.$router.replace('/home').catch(arr=>{})
          console.log(res.data.describe)
        }else{
          alert(res.data.describe+'，请检查账号密码是否正确')
          console.log(res.data.describe)
        }
      })
      }else{
        alert('请检查账号或密码')
      }
    }
  }
}
</script>

<style>

</style>