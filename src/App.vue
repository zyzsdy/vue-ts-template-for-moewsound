<template>
    <div class="container-fluid">
        <nav>
            <ul class="nav nav-pills">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/substitution">Substitution</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
  @import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
}
</script>