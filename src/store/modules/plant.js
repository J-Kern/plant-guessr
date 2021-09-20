import plants from '../../api/plants'

const state = () => ({
    all: [],
    current: {
        id: {
            type: Number
        },
        germanName: {
            type: String
        },
        latinName: {
            type: String
        },
        images: {
            type: Array
        }
    }
})

const getters = {}

const actions = {
    getAllProducts( {commit} ) {
        plants.getAllPlants(plants => {
            commit('setPlants', plants)
        })
    }
}

const mutations = {
    setPlants (state, plants) {
        state.all = plants
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}