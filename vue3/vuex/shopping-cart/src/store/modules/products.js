import shop from '../../api/shop';

const state = {
    all: []
}

const mutations = {
    setProducts (state, products) {
        console.log(products, 'mutations');
        state.all = products
    },
    decrementProductInventory(state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    }
}

const actions = {
    getAllProducts({commit}) {
        // console.log( '运行了');
        shop.getProducts((products) => {
                // vuex 制定了数据的流程
                // 修改数据到mutations
                commit('setProducts', products)
        })
    }
}

export  default {
    namespaced: true, // 模块的名字  store.products.state
    state, 
    mutations,
    actions
}