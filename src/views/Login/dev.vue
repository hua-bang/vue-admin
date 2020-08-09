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
              <el-input v-model.number="ruleForm.code" minlength="6" maxlength="6"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
import {validateDemo} from "@/utils/validate"
import {reactive,ref,onMounted} from "@vue/composition-api";


export default {
  name: "dev",
  setup(props, context) {

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
    console.log(model.value)


    /**
     * 生命周期函数
     * */
    onMounted(()=>{
      console.log("挂载完成")
    })

    const toggleMenu = (data => {
      console.log(menuTab)
      menuTab.forEach(element => {
        element.current = false
      })
      data.current = true
      model.value = data.type
    })
    const submitForm = (formName => {
      context.refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    })

    return {
      menuTab,
      model,
      toggleMenu,
      submitForm,
      ruleForm,
      rules
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
