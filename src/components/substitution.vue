<template>
    <div>
        <div>substitution: {{us1p}}</div>
        <input v-model="us1p">
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class SubstitutionPage extends Vue {
    us1p: string = ""
}
</script>