<script setup lang="ts">
import Flashcard from './Flashcard.vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue';

class SRSItemQueue {
    id: string = '';
    queue: string[] = [];
}

class Session extends SRSItemQueue {
    index: number = 0;
}

export default defineComponent({
    data() {
        return {
            session: new Session(),
        }
    },
    computed: {
        current: function (): string | undefined {
            if (this.session.index < this.session.queue.length)
                return this.session.queue[this.session.index];
        }
    },
    mounted() {
        console.log('** mounted **')
        if (!!localStorage.getItem('srs-queue')) {
            console.log('** found srs-queue **');
            let srs = JSON.parse(localStorage.getItem('srs-queue')!);
            Object.assign(Session, srs);
            this.session = srs;
            this.session.index = 0;
        }
    },
    methods: {
        // Advance to next card & mark correct.
        next: function () {
            console.log('** next **');
            this.session.index += 1;
        },
        // Advance to next card, mark incorrect, & reinsert & back of queue.
        repeat: function () {
            console.log('** repeat **');
            this.session.index += 1;
        }
    },
});
</script>

<template>
    <v-container style="max-width: 800px">
        <p>
            {{ JSON.stringify(session) }}
        </p>

        <p>
            {{ current }}
        </p>
        <Flashcard v-if="current" :card-id="current" :next="next" :repeat="repeat"></Flashcard>
    </v-container>
</template>

<style>
.text-h1 {
    font-family: 'Open Sans' !important;
    /* line-height: 72pt; */
}
</style>