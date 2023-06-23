<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
    data() {
        return {
            myData: false
        }
    },
    mounted() {
        if (localStorage.getItem("myData")) {
            this.myData = localStorage.myData;
        }
    },
    watch: {
        data(newData) {
            localStorage.myData = newData;
        }
    }
})
</script>