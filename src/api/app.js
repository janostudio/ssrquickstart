import http from '@/config/http'

// 获取语言包
export const getLangs = (queryParams) => {
  return http.get('/queryLanguagePackage', queryParams)
}


// export default {
//   getLangs
// }
