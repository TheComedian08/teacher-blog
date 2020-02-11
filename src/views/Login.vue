<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" name="login" prepend-icon="person" type="text" v-model="email" />
                  <v-text-field
                    id="password"
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
                <v-btn @click="login">Login</v-btn>
              </v-card-actions>
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
    }
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
    }
  }
}
</script>
