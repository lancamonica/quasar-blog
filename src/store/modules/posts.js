import axios from 'axios'

const state = {
  posts: [],
  detailsPost: {},
  updatePost: {},
  newPost: {},
  deletePost: {}
}

const getters = {
  postsList: state => state.posts,
  detailsPost: state => state.detailsPost,
  putEditPost: state => state.updatePost,
  newPost: state => state.newPost,
  postDelete: state => state.deletePost
}

const mutations = {
  setPosts (state, data) {
    state.posts = data
  },
  setDetailsPost (state, data) {
    state.detailsPost = data
  },
  setPutPost (state, data) {
    state.updatePost = data
  },
  setNewPost (state, data) {
    state.newPost = data
  },
  setDeletePost (state, data) {
    state.deletePost = data
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
  },

  async getPost ({ commit }, id) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `posts/${id}`
      })

      commit('setDetailsPost', data)
    } catch {}
  },

  async updatePost ({ commit }, content) {
    try {
      const { data } = await axios({
        method: 'PUT',
        url: `posts/${content.id}`,
        data: content
      })

      commit('setPutPost', data)
    } catch {}
  },

  async addPost ({ commit }, content) {
    try {
      const { data } = await axios({
        method: 'POST',
        url: 'posts',
        data: content
      })

      commit('setNewPost', data)
    } catch {}
  },

  async deletePost ({ commit }, id) {
    try {
      const { data } = await axios({
        method: 'DELETE',
        url: `posts/${id}`
      })

      commit('setDeletePost', data)
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
