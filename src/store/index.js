import Vuex from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        plants,
        quizHistory
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})