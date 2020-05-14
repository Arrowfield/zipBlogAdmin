import request from '@/utils/request'

export function addArticle(params) {
  return request({
    url: '/user/3',
    method: 'get',
    params
  })
}
