<script setup lang="ts">
import vocab from '../../assets/vocab.json'
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
})
</script>

<template>
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
                    <a class="japanese-text" target="_blank"
                        v-bind:href="entry.Kanji != null ? `https://jisho.org/search/${entry.Kanji}` : ''">{{ entry.Kanji
                            || '-' }}</a>
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
@import 'bulma/css/bulma.css';

.japanese-text {
    font-size: 1.2em;
}

.vocab-row {
    margin-bottom: 0;
}
</style>
