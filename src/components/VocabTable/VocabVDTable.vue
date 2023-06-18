<script setup lang="ts">
import vocab from '../../assets/vocab.json'

interface Vocab extends Object {
    Lesson: string;
    Kana: string;
    Kanji?: string;
    Meaning: string;
}
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import { VDataTable } from 'vuetify/labs/components';

export default defineComponent({
})
</script>

<template>
    <span>VDataTable</span>
    <div id="data-table">
        <v-data-table items-per-page="100" :headers="[
            { title: 'Kana', align: 'start', key: 'Kana' },
            { title: 'Kanji', align: 'start', key: 'Kanji' },
            { title: 'Meaning', align: 'end', key: 'Meaning' },
        ]" :group-by="[{ key: 'Lesson' }, { key: 'Type' }]" :items="vocab" item-value="Kana"
            class="elevation-1"></v-data-table>
    </div>
</template>

<style lang="scss" scoped>
.japanese-text {
    font-size: 1.2em;
}

.vocab-row {
    margin-bottom: 0;
}
</style>
