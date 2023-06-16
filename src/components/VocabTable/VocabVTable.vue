<script setup lang="ts">
import vocab from '@/assets/vocab.json'

import { VTable } from 'vuetify/components'

defineProps<{
}>()
</script>

<template>
    <span>VTable</span>
    <div id="table">
        <v-table height="600px" style="border:1px;border-color:black;border-style: solid;">
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
</template>

<style lang="scss" scoped>
.japanese-text {
    font-size: 1.2em;
}

.vocab-row {
    margin-bottom: 0;
}
</style>
