import request from '@/utils/request'

export function addArticle(params) {
  return request({
    url: '/add',
    method: 'post',
    params
  })
}
