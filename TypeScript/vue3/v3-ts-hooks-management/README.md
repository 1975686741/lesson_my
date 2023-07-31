# typescript 业务点
    1. 登录业务
          1. v-model username password
          2. interface LoginInfo {
          3. username: string;
          4. password: string
          5. }

    const param = reactive<LoginInfo> {
        usermane: 'admin',
        password: '123456'
    }

    el-input v-model="param.username"
    import type {FormInstance, FormRules } from 'element-plus'
    const rules: FormRules = {
    }   
    const login = ref<FormInstance>()
    formEl: FormInstance | undefined
    
    interface ObjectList {
        [key: string] : string[]
    }


    2. 权限深入定制方案
          1. 登录 localStorage.getItem('ms_username')
                1. 要排除登录页本身  不然会死循环
          2. 角色  设置权限数组
                1. usePermissStore 
                      1. key  设置当前
                      2. defaultList  admin user
                      3. 权限数组 to.permiss  判断是否在里面
          3. 路由守卫
                1. document.title
                2. 登录拦截
                3. 角色拦截