<script lang="ts">
import { defineComponent } from 'vue';
import {
    VCard,
    VCardItem,
    VCardSubtitle,
    VCardTitle,
} from 'vuetify/components';
export default defineComponent({
    props: {
        front: String,
        back: String
    },
    data() {
        return {
            showBack: false
        }
    }
});
</script>

<template>
    <v-container style="max-width: 500px">
        <v-card variant="tonal" style="margin:auto;" >
            <v-container
                style="min-height: 300px; margin: auto;"
                justify="center" vertical-align="middle"
                @click="showBack = !showBack"
                v-touch:swipe.left="() => { console.log('Left swipe') }"
                v-touch:swipe.right="() => { console.log('Right swipe') }"
            >
                <v-card-item style="height: 100%" vertical-align="middle" text-align="middle">
                    <v-card-title vertical-align="middle">
                        {{ front }}
                    </v-card-title>
                    <v-card-subtitle v-if="showBack">Subtitle</v-card-subtitle>
                </v-card-item>
            </v-container>
        </v-card>
        <v-card-actions v-if="showBack" style="padding: 10px 0px">
            <v-btn variant="tonal">ABC</v-btn>
            <v-btn variant="tonal">ABC</v-btn>
            <v-btn variant="tonal">ABC</v-btn>
            <v-btn variant="tonal">ABC</v-btn>
            <v-btn variant="tonal">ABC</v-btn>
            <v-btn variant="tonal">ABC</v-btn>
        </v-card-actions>
    </v-container>
</template>

<style>
.v-card .v-card-title {
    line-height: 72pt;
    font-size: 72pt;
}

.v-card {
    text-align: center;
    vertical-align: center;
}
</style>