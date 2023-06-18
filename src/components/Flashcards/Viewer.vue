<script setup lang="ts">
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import Flashcard from './Flashcard.vue';

export default defineComponent({ components: { Flashcard } })
</script>

<template>
    <Flashcard front="ABC" back="XYZ"></Flashcard>
</template>