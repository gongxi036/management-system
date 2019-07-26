<template>
  <div class="login">
    <div class="fixed-box">
      <div class="left-box">
        <img src="./image/login_left_img.png" alt="">
      </div>
      <el-form class="login-form right-box" :model="loginForm" ref="loginForm" :rules="loginFormRule" >
        <h1 class="title">运营中心管理平台</h1>
        <el-form-item class="form-item username" prop="username">
          <el-input
            type="text"
            id="usernameIpt"
            placeholder="请输入账号"
            autocomplete="off"
            autoFocus
            v-model="loginForm.username">
            <img class="icon-user" slot="prefix" src="./image/icon-user.png" />
          </el-input>
        </el-form-item>
        <el-form-item class="form-item password" prop="password">
          <el-input
            :type="passwordInputType"
            id="passwordIpt"
            placeholder="请输入密码"
            autocomplete="off"
            @keydown.enter="handleSubmit"
            v-model="loginForm.password">
            <img class="icon-password" slot="prefix" src="./image/icon-password.png" />
            <i
              class="icon-eye"
              slot="suffix"
              :class="passwordInputType === 'password' ? 'icon-eye-hide': 'icon-eye-show'"
              @click="togglePasswordInputType"></i>
          </el-input>
        </el-form-item>
        <el-button class="btn-login" type="primary" @click="handleSubmit" @keypress.enter="handleSubmit">登录</el-button>
        <p class="error-tip" v-show="errorTip">{{ errorTip }}</p>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { setToken } from '../../assets/js/storage/token.js'
import { login } from '@/api/login'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRule: {
        username: { rules: [{ required: true, message: '请输入账号' }] },
        password: { rules: [{ required: true, message: '请输入密码' }] }
      },
      passwordInputType: 'password',
      errorTip: ''
    }
  },
  methods: {
    togglePasswordInputType () {
      if (this.passwordInputType === 'password') {
        this.passwordInputType = 'text'
      } else {
        this.passwordInputType = 'password'
      }
    },
    handleSubmit (e) {
      e.preventDefault()
      this.$refs['loginForm'].validate(async (valid) => {
        if (valid) {
          // 登录
          // setToken('123456') //  todo 登录接口
          // this.$router.push('/')
          let res = await login({ username: this.loginForm.username, password: this.loginForm.password })
          console.log(res)
          if (res.flag) {
            localStorage.setItem('role', res.data)
            this.$router.push('/')
          } else {
            console.log(res.msg)
          }
        } else {
          // 登录表单校验失败
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    position: relative;
    height: 100%;
    background: #f2f7ff url("./image/login_bg.png") center center no-repeat;
    background-size: auto 100%;
    .fixed-box{
      position: fixed;
      left: 50%;
      top: 50%;
      width: 900px;
      height: 500px;
      transform: translate(-50%, -50%);
      .left-box{
        position: absolute;
        left: 0;
        width: 450px;
        height: 500px;
        box-shadow: 0 0 19px 1px rgba(20, 106, 255, 0.6);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        overflow: hidden;
        &>img{
          display: inline-block;
          height: 100%;
          vertical-align: bottom;
        }
      }
      .login-form.right-box{
        position: absolute;
        right: 0;
        box-sizing: border-box;
        padding: 66px 65px 56px;
        background-color: #fff;
        height: 500px;
        width: 450px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0 0 19px 1px rgba(20, 106, 255, 0.6);
        text-align: center;
        .title{
          font-size: 26px;
          color: #48a2ef;
          margin: 0;
        }
        .form-item{
          margin-top: 35px;
          margin-bottom: 35px;
          padding: 0 10px;
          height: 54px;
          line-height: 54px;
          background-color: #edf3ff;
          border-radius: 4px;
          font-size: 16px;
          /deep/ .el-input{
            display: flex;
            justify-content: center;
            align-items: center;
            .el-input__prefix{
              img{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
              }

            }
            .el-input__suffix{
              img{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
              }
            }
            input{
              padding-left: 35px;
              width: 100%;
              height: 54px;
              border: none!important;
              background-color: transparent!important;
              outline: none;
              &::-webkit-input-placeholder {
                color: #7c9abb;
              }
              // &:-webkit-autofill {
              //   -webkit-box-shadow: 0 0 0 1000px #edf3ff inset;
              // }
              &:focus{
                border: none;
                outline: none;
              }
            }
          }
          .icon-eye{
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -10px;
            height: 20px;
            width: 20px;
            cursor: pointer;
            &.icon-eye-hide{
              background: url("./image/icon-eye-hide.png") center no-repeat;
              background-size: 20px 9px;
            }
            &.icon-eye-show{
              background: url("./image/icon-eye-show.png") center no-repeat;
              background-size: 20px 9px;
            }
          }
        }
        .btn-login{
          display: block;
          margin-top: 55px;
          width: 100%;
          height: 54px;
          border: 0;
          color: #fff;
          font-size: 20px;
          text-align: center;
          border-radius: 4px;
          background: #48a2ef;
        }
        .error-tip{
          display: inline-block;
          position: relative;
          margin: 10px auto 0;
          height: 20px;
          line-height: 20px;
          color: #ff5028;
          text-align: center;
          font-size: 14px;
          &:before{
            content: '';
            position: absolute;
            top: 50%;
            left: -10px;
            width: 18px;
            height: 18px;
            background: url("./image/icon-error.png") center no-repeat;
            background-size: 100%;
            transform: translate(-100%, -50%);
          }
        }
      }
    }
  }
</style>
