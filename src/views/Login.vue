<template>
  <v-app id="login">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-tabs :centered="centered" grow class="elevation-2" prev-icon="favorite" next-icon="favorite">
                <v-tab v-for="(tab, index) in tabs" :key="index + tab.type">
                  <v-toolbar-title>
                    {{ `${tab.type} form` }}
                  </v-toolbar-title>
                </v-tab>
                <v-tabs-slider />
                <v-tab-item v-for="(tab, index) in tabs" :key="index">
                  <v-card-text>
                    <v-form>
                      <v-text-field
                        :label="tab.type"
                        :name="tab.type"
                        prepend-icon="person"
                        type="text"
                        v-model="email"
                      />
                      <v-text-field
                        label="Password"
                        name="password"
                        prepend-icon="lock"
                        type="password"
                        v-model="password"
                      />
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn @click="() => (tab.funcName === 'login' ? login() : register())">{{ tab.type }}</v-btn>
                  </v-card-actions>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-snackbar v-if="snackbar.isShow">Вы вошли под учетной записью {{ snackbar.email }}</v-snackbar>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Login',
  data: () => ({
    email: null,
    password: null,
    snackbar: {
      isShow: false,
      email: null
    },
    tabs: [
      {
        type: 'Login',
        funcName: 'login'
      },
      {
        type: 'Register',
        funcName: 'register'
      }
    ],
    centered: false,
    grow: false,
    vertical: false
  }),
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
          this.$router.push('/')
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
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
#login .v-slide-group__prev {
  display: none !important;
}
</style>
