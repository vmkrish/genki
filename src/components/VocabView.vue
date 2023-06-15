<script setup lang="ts">
import vocab from '../assets/vocab.json'

import { VTable } from 'vuetify/components'
import { VDataTable } from 'vuetify/labs/components';

interface Vocab extends Object {
    Lesson: string;
    Kana: string;
    Kanji?: string;
    Meaning: string;
}

defineProps<{
//   vocab: Vocab[],
}>()
</script>

<template>
<span>VTable</span>
<div id="table">
    <v-table height="600px">
        <thead>
            <th> L </th>
            <!-- <th> Kana </th> -->
            <th> Kanji </th>
            <th> Meaning </th>
        </thead>
        <tbody>
            <tr v-for="item in vocab">
                <td>{{ item.Lesson }}</td>
                <!-- <td>{{ item.Kana }}</td> -->
                <td>{{ item.Kanji }}</td>
                <td>{{ item.Meaning }}</td>
            </tr>
    </tbody>

    </v-table>
</div>

<span>VDataTable</span>

<div id="data-table">
    <v-data-table
        items-per-page="100"
        :headers="[
            { title: 'Kana', align: 'start', key: 'Kana' },
            { title: 'Kanji', align: 'start', key: 'Kanji' },
            { title: 'Meaning', align: 'end', key: 'Meaning' },
        ]"
        :group-by="[{key: 'Lesson'}, {key: 'Type'}]"
        :items="vocab"
        item-value="Kana"
        class="elevation-1"></v-data-table>
</div>

<div>
<div class="columns">
    <div class="column is-1"><strong>Lesson</strong></div>
    <div class="column is-3"><strong>Kana</strong></div>
    <div class="column is-3"><strong>Kanji</strong></div>
    <div class="column is-6"><strong>Meaning</strong></div>
</div>

<template v-for="entry in vocab">
    <div class="columns is-gapless vocab-row">
        <div class="column is-1">
            <span>{{ entry.Lesson }}</span>
        </div>
        <div class="column is-3">
            <span class="japanese-text">{{ entry.Kana }}</span>
        </div>
        <div class="column is-3">
            <a class="japanese-text" target="_blank" v-bind:href="entry.Kanji != null ? `https://jisho.org/search/${ entry.Kanji }` : ''">{{ entry.Kanji || '-' }}</a>
        </div>
        <div class="column is-6">
            <span class="japanese-text">{{ entry.Meaning }}</span>
        </div>
    </div>
    <hr class="tight">
</template>
</div>
</template>

<style lang="scss" scoped>
@import "../assets/main.css";

.japanese-text {
    font-size: 1.2em;
}

.vocab-row {
    margin-bottom: 0;
}

// v-table  {
//     padding: 10px;
// }
</style>
