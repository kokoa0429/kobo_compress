<template lang="pug">
  div
    v-card(max-width="500")
      v-list-item()
        v-list-item-content
          v-list-item-title client1
      v-card-text こんちは　これはテキストです。
      v-img(contain max-height="200" src="https://object-storage.tyo1.conoha.io/v1/nc_5859d8b501e84608bec10e6fbff7d1ea/iachara/icon/3398/162082478102525504.jpg")
      v-card-actions
        v-spacer
        div 転送量 14.25KB 元 335.56KB (4.24%)
    v-btn(fab bottom right color="green" icon outlined fixed style="margin-bottom:20px" @click="dialog = true")
      v-icon(dark) mdi-pencil
    v-dialog(v-model="dialog")
      v-card
        v-card-title 投稿
        v-card-text
          v-text-field(label="post content")
          v-file-input(label="File attachment")
        v-card-actions
          v-spacer
          v-btn.white--text(color="blue") 投稿！
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  methods: {
    sushiClick: async function () {
      alert(await api.sushi("sushi"))
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>
