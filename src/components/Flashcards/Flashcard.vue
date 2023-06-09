<script setup lang="ts">
defineProps<{
    cardId?: string;
    next: () => void;
    repeat: () => void;
}>()
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    VCard,
    VCardItem,
    VCardSubtitle,
    VCardTitle,
} from 'vuetify/components';

import { NewDefaultSRSItem, SRSItemFromJson } from './SRSItem.ts';
import type { SRSItem } from './SRSItem.ts';

enum Direction {
    Left = 'left',
    Right = 'right',
    Top = "top",
    Bottom = "bottom",
}

export default defineComponent({
    data() {
        return {
            showBack: false,
            myData: '',
            srsItem: <SRSItem | undefined> NewDefaultSRSItem(),
        }
    },
    watch: {
        myData(newVal, oldVal) {
            console.log(`new: ${newVal}, old: ${oldVal}`);
            if ((!!newVal) && (newVal != localStorage.getItem('myData'))) {
                localStorage.setItem('myData', newVal);
            }
        },
        cardId(newVal, oldVal) {
            console.log(`** found new card-id: ${oldVal} => ${newVal} **`);
            if (oldVal && localStorage.getItem(oldVal)) {
                localStorage.setItem(oldVal, JSON.stringify(this.srsItem));
            }
            if (newVal && localStorage.getItem(newVal)) {
                this.srsItem = SRSItemFromJson(localStorage.getItem(newVal)!);
            }
        },
        srsItem: {
            handler: function(newVal, oldVal) {
                console.log(`srsItem: ${JSON.stringify(oldVal)} => ${JSON.stringify(newVal)}`);
                if (!oldVal || newVal.last != oldVal.last) {
                    console.log('srsItem: updating localstorage')
                    localStorage.setItem('srs', JSON.stringify(newVal));
                }
            },
            deep: true,
        },
    },
    mounted() {
        console.log('** mounted **')
        if (!!localStorage.getItem('myData')) {
            console.log('** found myData **');
            this.myData = localStorage.getItem('myData')!;
        }
        if (this.cardId && localStorage.getItem(this.cardId)) {
            console.log('** found card-id **');
            this.srsItem = SRSItemFromJson(localStorage.getItem(this.cardId)!);
        } else if (!!localStorage.getItem('srs')) {
            console.log('** found srs **');
            this.srsItem = SRSItemFromJson(localStorage.getItem('srs')!);
        }
        window.addEventListener('keyup', (ev) => {
            switch(ev.key) {
                case 'ArrowDown':
                    this.showBack = !this.showBack;
                    break;
                case 'ArrowLeft':
                    if (this.showBack) { this.yes(); }
                    break;
                case 'ArrowRight':
                    if (this.showBack) { this.no(); }
                    break;
            }
        });
    },
    methods: {
        swipe: (dir: Direction) => { console.log(dir + ' swipe') },
        yes: function() {
            this.myData = 'yes';
            if (!!this.srsItem) {
                this.srsItem.correct();
            }
            this.next();
        },
        no: function() {
            this.myData = 'no';
            if (!!this.srsItem) {
                this.srsItem.incorrect();
            }
            this.repeat();
        }
    },
});
</script>

<template>
    <v-container style="max-width: 700px">
        <v-card variant="tonal" style="margin:auto;">
            <v-container
                    style="min-height: 300px; margin: auto;"
                    justify="center"
                    vertical-align="middle"
                    @click="showBack = !showBack"
                    @keyup.down="showBack = !showBack"
                    v-touch:swipe.left="() => { console.log('Left swipe') }"
                    v-touch:swipe="swipe">
                <v-card-item style="height: 200px" vertical-align="middle" text-align="middle">
                    <v-card-title vertical-align="middle" class="text-xs-h1 text-smAndUp-h1">
                        <ruby>
                        {{ srsItem?.front }} <rt v-if="showBack">furigana</rt>
                        </ruby>
                    </v-card-title>
                    <v-card-subtitle>{{ cardId }} / {{ myData }}</v-card-subtitle>
                </v-card-item>
                <v-card-text v-if="showBack" class="text-h3 pa-2" style="font-family: 'Open Sans'">
                    {{ srsItem?.back }} <br />
                    Level: {{srsItem?.level }} <br />
                    {{ srsItem?.last.toLocaleDateString() }}
                </v-card-text>
            </v-container>
        </v-card>
        <v-card-actions v-if="showBack" style="padding: 0px;margin: 0px">
            <v-container style="padding: 0">
                <v-row class="d-flex justify-space-between">
                    <v-col cols="auto">
                        <v-btn variant="tonal" @click="yes">
                            Yes
                        </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn variant="tonal" @click="no">
                            No
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-actions>
    </v-container>
</template>

<style>
.v-card .v-card-title {
    line-height: 72pt;
    /* font-size: 72pt; */
}

.v-card .v-card-text {
    line-height: 24pt;
    /* font-size: 72pt; */
}

.v-card {
    text-align: center;
    vertical-align: center;
}

.text-h1 {
    font-family: 'Open Sans' !important;
    /* line-height: 72pt; */
}

.text-xs-h1 {
    font-size: 48pt !important;
}

.v-col {
    display: flex;
}
</style>