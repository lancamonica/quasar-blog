<template>
  <div class="q-pa-md">
    <q-table
      title="Autores"
      :data="authorsList"
      :columns="columns"
      row-key="name"
      :filter="filter"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn size="md" flat round icon="add" :to="{ name: 'AuthorsForm' }" >
          <q-tooltip>Novo Autor</q-tooltip>
        </q-btn>
      </template>
      <template v-slot:header="authorsList">
        <q-tr :props="authorsList">
          <q-th
            v-for="col in authorsList.cols"
            :key="col.name"
            :authorsList="authorsList"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="authorsList">
        <q-tr :authorsList="authorsList" :key="authorsList.row.id">
          <q-td
            v-for="col in authorsList.cols"
            :key="col.name"
            :authorsList="authorsList"
          >
            {{ col.value }}
          </q-td>
          <q-td auto-width>
            <div class="justify-end">
              <q-btn size="md" color="grey-9" flat round icon="edit" @click="authorEdit(authorsList.row.id)" >
                <q-tooltip>Editar</q-tooltip>
              </q-btn>
              <q-btn size="md" color="grey-9" flat round icon="delete">
                <q-tooltip>Excluir</q-tooltip>
              </q-btn>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      authorsList: 'authors/authorsList'
    })
  },

  methods: {
    ...mapActions({
      getAuthors: 'authors/getAuthors'
    }),

    authorEdit (id) {
      this.$router.push({ name: 'DetailsAuthorEdit', query: { id } })
    }
  },

  async created () {
    try {
      const data = await this.getAuthors()
      return data
    } catch (err) {
      console.log(err)
    }
  },

  data () {
    return {
      filter: '',
      columns: [
        { name: 'name', label: 'Nome', align: 'left', field: 'name' },
        { name: 'email', label: 'E-mail', align: 'left', field: 'email' }
      ]
    }
  },

  name: 'AuthorsList'
}
</script>
