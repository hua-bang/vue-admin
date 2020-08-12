<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li v-for="item in menuTab" :key="item.id" :class="{'current':item.current}" @click="toggleMenu(item)">{{item.txt}}</li>
      </ul>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium">
        <el-form-item prop="username" class="item-form">
          <label>邮箱</label>
          <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="password" class="item-form">
          <label>密码</label>
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
        </el-form-item>

        <el-form-item prop="rePassword" class="item-form" v-if="model === 'register'">
          <label>确认密码</label>
          <el-input type="password" v-model="ruleForm.rePassword" autocomplete="off" minlength="6" maxlength="20"></el-input>
        </el-form-item>

        <el-form-item prop="code" class="item-form">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input v-model="ruleForm.code" minlength="6" maxlength="6"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block" @click="getCode()" :disabled="codeButtonStatus" >{{codeButtonStatus?'发送中':'获取验证码'}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block" :disabled="loginButtonStatus">{{model==='login'?"登录":"注册"}}</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
import sha1 from "js-sha1";
import { getSms,  register, login } from "@/api/login";
import { reactive, ref, onMounted } from "@vue/composition-api";


export default {
  name: "dev",
  setup(props, context) {
    console.log("自动部署")
    console.log("自动部署*2")
    const root = context.root
    let validateCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'));
      }else{
        callback();
      }
    };
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    let validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      }else {
        callback();
      }
    };
    let validateRePassword = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请输入重复密码'));
      }else if(value !== ruleForm.password){
        callback(new Error('请确认密码'))
      }else{
        callback()
      }
    }
    const ruleForm = reactive({
      username:'',
      password: '',
      rePassword:'',
      code: ''
    })

    const codeButtonStatus = ref(false)

    const rules = reactive({
      username: [
        { validator: validateUsername, trigger: 'blur' }
      ],
      password: [
        { validator: validatePassword, trigger: 'blur' }
      ],
      rePassword: [
        { validator: validateRePassword, trigger: 'blur' }
      ],
      code: [
        { validator: validateCode, trigger: 'blur' }
      ]
    })

    const menuTab = reactive([
        {txt: "登录", current: true, type:'login'},
        {txt: "注册", current: false, type:'register'}
    ])

    const model = ref("login")
    const loginButtonStatus = ref(true)


    /**
     * 生命周期函数
     * */
    onMounted(()=>{
    })

    const toggleMenu = (data => {
      menuTab.forEach(element => {
        element.current = false
      })
      data.current = true
      model.value = data.type
      loginButtonStatus.value = true
      context.refs.ruleForm.resetFields()
    })

    const submitForm = (formName => {
      context.refs[formName].validate((valid) => {
        if (valid) {
          const {username,password,code} = ruleForm;
          const data = {username,password,code}
          data.password = sha1(data.password)
          model.value === 'register'?userRegister(data):userLogin(data)
        } else {
          root.$message.error("请正确输入表单信息")
          return false;
        }
      });
    })

    const userRegister = ((data)=>{
      register(data).then(res=>{
        let data = res.data
        root.$message.success(data.message)
        toggleMenu(menuTab[0])
      }).catch(err => {
        console.log(err)
      })
    })

    const userLogin = ((data)=>{
      root.$store.dispatch('app/actionLogin',data).then(res =>{
        let data = res.data
        root.$message.success(data.message)
          root.$router.push({
            name: "Console"
          })
      }).catch(err => {
        console.log(err)
      })
    })

    const getCode = (() => {
      codeButtonStatus.value = true
      if(ruleForm.username === ''){
          root.$message.error("邮箱不能为空");
          return false
      }
      let data = {
        username:ruleForm.username,
        module: model.value
      }

      //请求接口
      getSms(data).then(res => {
        codeButtonStatus.value = false
        let data = res.data
        root.$message.success(data.message)
        loginButtonStatus.value = false
      }).catch((err)=>{
        codeButtonStatus.value = false
        console.log(err)
      })
    })

    return {
      menuTab,
      model,
      toggleMenu,
      submitForm,
      ruleForm,
      rules,
      getCode,
      loginButtonStatus,
      codeButtonStatus
    }
  }
};
</script>

<style lang="scss" scoped>
#login{
  height: 100vh;
  background-color: #344a5f;
}
.login-wrap{
  width: 330px;
  margin: auto;
}
.menu-tab{
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;
  line-height: 36px;
  padding-inline-start: 0;
  li {
    display: inline-block;
    width: 88px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    margin: 0;
    cursor: pointer;
  }
  .current{
    background-color: rgba(0,0,0,.1);
  }
}
.login-form{
  label{
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: #fff;
  }
  .item-form{
    margin-bottom: 10px;
  }
  .block{
    display: block;
    width: 100%;
  }
  .login-btn{
    margin-top: 14px;
  }
}
</style>
