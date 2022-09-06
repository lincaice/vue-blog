import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 注册
export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}

// 获取验证码
export function getValidCode(params) {
  return request({
    url: '/user/getValidCode',
    method: 'get',
    params
  })
}