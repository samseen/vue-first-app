<template>
    <base-layout page-title="All Memories">
        <memory-list :memories="memories"></memory-list>
    </base-layout>
</template>

<script>
import MemoryList from '../components/memories/MemoriesList.vue';

export default {
    components: {
        MemoryList
    },
    computed: {
        memories() {
            return this.$store.getters.memories;
        }
    }
};
</script>