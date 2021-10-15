<template>
  <div class="q-pa-lg">
    <div class="row justify-between">
      <q-input color="grey-9" v-model="text" label="Pesquisar" rounded outlined>
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-btn size="15px" flat round color="grey-9" icon="add">
        <q-tooltip v-model="showing">Novo Post</q-tooltip>
      </q-btn>
    </div>
    <div class="q-pa-md row justify-center">
      <card>
        <template v-slot:image>
          <div class="col-6">
            <q-img class="card__image" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Categoria
              </div>
            </q-img>
          </div>
        </template>
        <template v-slot:text>
          <h1 class="text-h4">Título 1</h1>
          <span class="sub-title q-mb-md text-body1 ellipsis-3-lines">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </span>
        </template>
        <template v-slot:data>
          <span class="text-body2">Autor: Monica do caralho</span>
          <span class="text-body2">Data de criação: 13/10/2021</span>
          <span class="text-body2">Última Alteração: 13/10/2021</span>
        </template>
        <template v-slot:button>
          <div class="row justify-end">
            <q-btn size="11px" flat round color="grey-9" icon="edit">
              <q-tooltip v-model="showing">Editar</q-tooltip>
            </q-btn>
            <q-btn size="11px" flat round color="grey-9" icon="delete">
              <q-tooltip v-model="showing">Excluir</q-tooltip>
            </q-btn>
          </div>
        </template>
      </card>
      <card>
        <template v-slot:image>
          <div class="col-6">
            <q-img class="card__image" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Categoria
              </div>
            </q-img>
          </div>
        </template>
        <template v-slot:text>
          <h1 class="text-h4">Título 2</h1>
          <span class="sub-title q-mb-md text-body1 ellipsis-3-lines">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </span>
        </template>
        <template v-slot:data>
          <span class="text-body2">Autor: Monica do caralho</span>
          <span class="text-body2">Data de criação: 13/10/2021</span>
          <span class="text-body2">Última Alteração: 13/10/2021</span>
        </template>
        <template v-slot:button>
          <div class="row justify-end">
            <q-btn size="11px" flat round color="grey-9" icon="edit">
              <q-tooltip v-model="showing">Editar</q-tooltip>
            </q-btn>
            <q-btn size="11px" flat round color="grey-9" icon="delete">
              <q-tooltip v-model="showing">Excluir</q-tooltip>
            </q-btn>
          </div>
        </template>
      </card>
      <card>
        <template v-slot:image>
          <div class="col-6">
            <q-img class="card__image" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Categoria
              </div>
            </q-img>
          </div>
        </template>
        <template v-slot:text>
          <h1 class="text-h4">Título 3</h1>
          <span class="sub-title q-mb-md text-body1 ellipsis-3-lines">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </span>
        </template>
        <template v-slot:data>
          <span class="text-body2">Autor: Monica do caralho</span>
          <span class="text-body2">Data de criação: 13/10/2021</span>
          <span class="text-body2">Última Alteração: 13/10/2021</span>
        </template>
        <template v-slot:button>
          <div class="row justify-end">
            <q-btn size="11px" flat round color="grey-9" icon="edit">
              <q-tooltip v-model="showing">Editar</q-tooltip>
            </q-btn>
            <q-btn size="11px" flat round color="grey-9" icon="delete">
              <q-tooltip v-model="showing">Excluir</q-tooltip>
            </q-btn>
          </div>
        </template>
      </card>
      <card>
        <template v-slot:image>
          <div class="col-6">
            <q-img class="card__image" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Categoria
              </div>
            </q-img>
          </div>
        </template>
        <template v-slot:text>
          <h1 class="text-h4">Título 4</h1>
          <span class="sub-title q-mb-md text-body1 ellipsis-3-lines">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </span>
        </template>
        <template v-slot:data>
          <span class="text-body2">Autor: Monica do caralho</span>
          <span class="text-body2">Data de criação: 13/10/2021</span>
          <span class="text-body2">Última Alteração: 13/10/2021</span>
        </template>
        <template v-slot:button>
          <div class="row justify-end">
            <q-btn size="11px" flat round color="grey-9" icon="edit">
              <q-tooltip v-model="showing">Editar</q-tooltip>
            </q-btn>
            <q-btn size="11px" flat round color="grey-9" icon="delete">
              <q-tooltip v-model="showing">Excluir</q-tooltip>
            </q-btn>
          </div>
        </template>
      </card>
      <card>
        <template v-slot:image>
          <div class="col-6">
            <q-img class="card__image" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Categoria
              </div>
            </q-img>
          </div>
        </template>
        <template v-slot:text>
          <h1 class="text-h4">Título 5</h1>
          <span class="sub-title q-mb-md text-body1 ellipsis-3-lines">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </span>
        </template>
        <template v-slot:data>
          <span class="text-body2">Autor: Monica do caralho</span>
          <span class="text-body2">Data de criação: 13/10/2021</span>
          <span class="text-body2">Última Alteração: 13/10/2021</span>
        </template>
        <template v-slot:button>
          <div class="row justify-end">
            <q-btn size="11px" flat round color="grey-9" icon="edit">
              <q-tooltip v-model="showing">Editar</q-tooltip>
            </q-btn>
            <q-btn size="11px" flat round color="grey-9" icon="delete">
              <q-tooltip v-model="showing">Excluir</q-tooltip>
            </q-btn>
          </div>
        </template>
      </card>
      <card>
        <template v-slot:image>
          <div class="col-6">
            <q-img class="card__image" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Categoria
              </div>
            </q-img>
          </div>
        </template>
        <template v-slot:text>
          <h1 class="text-h4">Título 6</h1>
          <span class="sub-title q-mb-md text-body1 ellipsis-3-lines">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </span>
        </template>
        <template v-slot:data>
          <span class="text-body2">Autor: Monica do caralho</span>
          <span class="text-body2">Data de criação: 13/10/2021</span>
          <span class="text-body2">Última Alteração: 13/10/2021</span>
        </template>
        <template v-slot:button>
          <div class="row justify-end">
            <q-btn size="11px" flat round color="grey-9" icon="edit">
              <q-tooltip v-model="showing">Editar</q-tooltip>
            </q-btn>
            <q-btn size="11px" flat round color="grey-9" icon="delete">
              <q-tooltip v-model="showing">Excluir</q-tooltip>
            </q-btn>
          </div>
        </template>
      </card>
      <card>
        <template v-slot:image>
          <div class="col-6">
            <q-img class="card__image" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Categoria
              </div>
            </q-img>
          </div>
        </template>
        <template v-slot:text>
          <h1 class="text-h4">Título 7</h1>
          <span class="sub-title q-mb-md text-body1 ellipsis-3-lines">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </span>
        </template>
        <template v-slot:data>
          <span class="text-body2">Autor: Monica do caralho</span>
          <span class="text-body2">Data de criação: 13/10/2021</span>
          <span class="text-body2">Última Alteração: 13/10/2021</span>
        </template>
        <template v-slot:button>
          <div class="row justify-end">
            <q-btn size="11px" flat round color="grey-9" icon="edit">
              <q-tooltip v-model="showing">Editar</q-tooltip>
            </q-btn>
            <q-btn size="11px" flat round color="grey-9" icon="delete">
              <q-tooltip v-model="showing">Excluir</q-tooltip>
            </q-btn>
          </div>
        </template>
      </card>
      <card>
        <template v-slot:image>
          <div class="col-6">
            <q-img class="card__image" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Categoria
              </div>
            </q-img>
          </div>
        </template>
        <template v-slot:text>
          <h1 class="text-h4">Título 8</h1>
          <span class="sub-title q-mb-md text-body1 ellipsis-3-lines">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </span>
        </template>
        <template v-slot:data>
          <span class="text-body2">Autor: Monica do caralho</span>
          <span class="text-body2">Data de criação: 13/10/2021</span>
          <span class="text-body2">Última Alteração: 13/10/2021</span>
        </template>
        <template v-slot:button>
          <div class="row justify-end">
            <q-btn size="11px" flat round color="grey-9" icon="edit">
              <q-tooltip v-model="showing">Editar</q-tooltip>
            </q-btn>
            <q-btn size="11px" flat round color="grey-9" icon="delete">
              <q-tooltip v-model="showing">Excluir</q-tooltip>
            </q-btn>
          </div>
        </template>
      </card>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        color="grey-9"
        v-model="current"
        :max="5"
      />
    </div>
  </div>
</template>

<script>
import Card from 'components/Card.vue'

export default {
  components: {
    Card
  },
  name: 'PageIndex'
}
</script>
