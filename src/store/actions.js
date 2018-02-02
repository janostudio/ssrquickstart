import {
  getLangs
} from '../api'

export default {
  GET_LANGS: ({ commit, state }) => {
    // getLangs().then((res) => {
    //   console.log(res)
    // })
    // return 'note'
    commit('SET_LANGS')
  }
}
