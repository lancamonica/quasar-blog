import axios from 'axios'

const state = {
  posts: []
}

const getters = {
  postsList: state => state.posts
}

const mutations = {
  setPosts (state, data) {
    state.posts = data
  }
}

const actions = {
  async getPosts ({ commit }, params) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'posts',
        params
      })

      commit('setPosts', data)
    } catch {}
  }
}

export default {
  namespaced: true,

  state,
  getters,
  mutations,
  actions
}
