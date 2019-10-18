import { LYD } from '../config/LYD'

// 例如：
// 如果post接口是json格式，需在最后加上'json'
// export const posts1 = params => LYD.POST("/def/post/jiekou", params, 'json')
// export const posts = params => LYD.POST("/def/post/jiekou", params)
// 如果get接口无参数，不需要传params
// export const gets = params => LYD.GET("/def/get/jiekou", params)
// 测试接口
export const company = params => LYD.GET("/api/financial_square/financing_index")

export const financingIndex = params => LYD.GET("/api/company", params)