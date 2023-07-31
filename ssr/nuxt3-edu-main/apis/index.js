// 首页接口  统一封装
//  hooks   自动被找到
export function useIndexDataApi() {
    // 通用方法     数据拦截 =》useFetch
    return useHttpGet('IndexData', "/index", {
        lazy: true
    })
}