<template>
  <v-dialog v-model="isShow" width="50%">
    <v-card>
      <v-tabs centered grow>
        <v-tab v-for="(tab, index) in tabs" :key="index + tab.type">
          <v-card-title>{{ `${tab.type} form` }}</v-card-title>
        </v-tab>
        <v-tabs-slider />
        <v-tab-item v-for="(tab, index) in tabs" :key="index">
          <v-card-text>
            <v-form>
              <v-text-field :label="tab.type" :name="tab.type" prepend-icon="person" type="text" v-model="email" />
              <v-text-field label="Password" name="password" prepend-icon="lock" type="password" v-model="password" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text @click="() => (tab.funcName === 'login' ? login() : register())">{{ tab.type }}</v-btn>
          </v-card-actions>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'LoginDialog',
  props: {
    isShowLoginDialog: Boolean
  },
  data: () => ({
    email: null,
    password: null,
    tabs: [
      {
        type: 'Login',
        funcName: 'login'
      },
      {
        type: 'Register',
        funcName: 'register'
      }
    ]
  }),
  computed: {
    isShow: {
      get() {
        return this.isShowLoginDialog
      },
      set() {
        this.$emit('handleLoginDialog')
      }
    }
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.snackbar = {
            isShow: true,
            email: res.email
          }
          this.isShow = false
        })
        .catch(err => console.log(err))
    },
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.snackbar = {
            isShow: true,
            email: res.email
          }
          this.isShow = false
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
