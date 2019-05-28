import base from '../http'


export function xxx(){
    return base.get(`http://xxx.xxx/xxx`)
}


export function replyAdd (data) {
  return base.post('/article/comment/reply/add', {
    ...data
  })
}