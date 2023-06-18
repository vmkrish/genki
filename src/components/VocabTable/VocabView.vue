<script setup lang="ts">
import BulmaTable from './BulmaTable.vue';
import VocabVTable from './VocabVTable.vue';
import VocabVDTable from './VocabVDTable.vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
})

</script>
<template>
    <VocabVTable />
    <VocabVDTable />
    <BulmaTable />
</template>