import axios from 'axios'

const state = {
  authors: [],
  detailsAuthor: {},
  updateAuthor: {},
  deleteAuthor: {}
}

const getters = {
  authorsList: state => state.authors,
  detailsAuthor: state => state.detailsAuthor,
  putEditAuthor: state => state.updateAuthor,
  authorDelete: state => state.deleteAuthor
}

const mutations = {
  setAuthors (state, data) {
    state.authors = data
  },

  setDetailsAuthor (state, data) {
    state.detailsAuthor = data
  },

  setPutAuthor (state, data) {
    state.updateAuthor = data
  },

  setDeleteAuthor (state, data) {
    state.deleteAuthor = data
  }
}

const actions = {
  async getAuthors ({ commit }, params) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'authors',
        params
      })

      commit('setAuthors', data)
    } catch {}
  },

  async getAuthor ({ commit }, id) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `authors/${id}`
      })

      commit('setDetailsAuthor', data)
    } catch {}
  },

  async updateAuthor ({ commit }, content) {
    try {
      const { data } = await axios({
        method: 'PUT',
        url: `authors/${content.id}`,
        data: content
      })

      commit('setPutAuthor', data)
    } catch {}
  },

  async addAuthor (context, content) {
    try {
      const { data } = await axios({
        method: 'POST',
        url: 'authors',
        data: content
      })

      return data
    } catch {}
  },

  async deleteAuthor ({ commit }, id) {
    try {
      const { data } = await axios({
        method: 'DELETE',
        url: `authors/${id}`
      })

      commit('setDeleteAuthor', data)
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
