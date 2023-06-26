<script setup lang="ts">
import FlashcardViewOnly from './FlashcardViewOnly.vue';
import vocabDb from '../../assets/vocab.json';  // Move to post-init?
</script>

<script lang="ts">
import { defineComponent } from 'vue';

interface Vocab extends Object {
    Lesson: string;
    Kana: string;
    Kanji?: string;
    Meaning: string;
};

class VocabView {
    vocab: Vocab[];

    constructor(vocab_: Vocab[]) {
        this.vocab = vocab_;
    }
}

export default defineComponent({
    data() {
        return {
            vocab: Array<Vocab>(),
            index: 0,
        }
    },
    computed: {
        vocab_view: function(): VocabView {
            if (this.vocab) {
                return new VocabView(this.vocab);
            }
            return new VocabView([]);
        },
        current: function(): Vocab | undefined {
            if (this.index < this.vocab_view.vocab.length) {
                return this.vocab_view.vocab[this.index];
            }
        }
    },
    mounted() {
        console.log('** mounted **');
        this.index = 0;
        this.vocab = vocabDb;
    },
    methods: {
        // Advance to next card & mark correct.
        next: function () {
            console.log('** next **');
            this.index += 1;
        },
        // Advance to next card, mark incorrect, & reinsert & back of queue.
        repeat: function () {
            console.log('** repeat **');
            this.index += 1;
        }
    },
});
</script>

<template>
    <v-container style="max-width: 800px">
        <!-- <p>{{ JSON.stringify(vocab) }}</p>
        <p>{{ current }}</p> -->
        <FlashcardViewOnly v-if="current"
            :front="current.Kanji"
            :back="current.Meaning"
            :next="next"
            :repeat="repeat"
            :furigana="current.Kana">
        </FlashcardViewOnly>
    </v-container>
</template>

<style>
.text-h1 {
    font-family: 'Open Sans' !important;
    /* line-height: 72pt; */
}
</style>