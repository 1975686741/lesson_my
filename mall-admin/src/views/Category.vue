<template>
    <el-card class="category-container">
        <template #header>
            <div class="header">
                <el-button type="primary" :icon="Plus" @click="handleAdd">增加</el-button>
                <el-popconfirm
                    title="确定要删除吗？"
                    confirmButtonText="确定"
                    cancelButtonText="取消"
                    @confirm="handleDelete"
                >
                    <template #reference>
                        <el-button type="danger" :icon="Delete">批量删除</el-button>
                    </template>
                </el-popconfirm>
            </div>
        </template>
        <el-table
            ref="multipleTable"
            tooltip-effect="dark"
            style="width:100%"
            :data="state.tableData"
        >

        </el-table>
    </el-card>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Plus, Delete } from '@element-plus/icons-vue'
import { getCategoryData } from '@/service/category.js'
const state = reactive({
    tableData: [],
    currentPage: 1, // 当前页
    pageSize: 10,
    total: 0, // 总条数
    level: 1,
    parent_id: 0
})
const multipleTable = ref(null)
const handleAdd = () => {
}
const handleDelete = () => {
}
onMounted = () => {
    getCategory()
}
const getCategory = async () => {
   const data = await getCategoryData({
        params: {
            pageNumber: state.currentPage,
            pageSize: state.pageSize,
            categoryLevel: level,
            parentId:state.parent_id
        }
    })
}
</script>

<style  scoped>

</style>