<script lang="ts">
import { defineComponent } from 'vue';
import {
    VCard, VContainer,
} from 'vuetify/components';

function isValidJson(s: string): boolean {
    try {
        JSON.parse(s);
    } catch (e) {
        return false;
    }
    return true;
}

export default defineComponent({
    data() {
        return {
            key: "",
            text: "",
            message: "",
        };
    },
    computed: {
        isValid: function() {
            return isValidJson(this.text);
        },
        isGetValid: function() {
            return !!this.key;
        },
        lsValue: function() {
            if (this.isGetValid) {
                return localStorage.getItem(this.key);
            }
        },
        lsList: function() {
            let out: any[] = [];
            if (localStorage.getItem(this.key + '00000')) {
                console.log('Fetch start time:')
                console.log((new Date()).getTime())
                // for (let i = 0; i < 10000; i++) {
                // out.push(localStorage.getItem(this.key + String(i).padStart(5, '0')));
                // }
                console.log('Fetch end time:')
                console.log((new Date()).getTime())

            }
            return out;
        }
    },
    methods: {
        yes: function () { },
        submit: function() {
            if (this.isValid && this.isGetValid) {
                console.log('Start time:')
                console.log((new Date()).getTime())
                // localStorage.setItem(this.key, this.text);
                for (let i = 0; i < 10000; i++) {
                    localStorage.setItem(this.key + String(i).padStart(5, '0'), this.text);
                }
                console.log('End time:')
                console.log((new Date()).getTime())
                this.message = `Set: ${this.key} complete.`
            }
        },
    },
    components: { VContainer }
});
</script>

<template>
    <VContainer>
        <VContainer>
            <p>Key: <input v-model="key" class="textinput" /></p>
        </VContainer>
        <VContainer>{{ lsValue }}</VContainer>
        <VContainer>{{ lsList ? lsList[0] : undefined }}</VContainer>
        <VContainer>
            <textarea v-model="text" class="textinput fullwidth"></textarea>
            <button @click="submit" :disabled="!isValid"
                :class="[isValid ? 'enabled' : 'disabled']" class="fullwidth">Set</button>
        </VContainer>
        <VContainer v-if="!!message">
            {{ message }}
        </VContainer>
    </VContainer>
</template>

<style>
.textinput {
    border: 1px solid darkgray;
    border-radius: 5px;
    font-family: monospace;
    padding: 3px;
    margin: 3px;
}

textarea {
    height: 300px;
    line-height: 1.2;
}

button {
    border-radius: 5px;
    padding: 3px;
}

.fullwidth {
    width: 95%;
    margin: 3px;
}

.enabled {
    background-color: burlywood;
    border: 1px solid black;
}

.disabled {
    background-color: lightgray;
    border: 1px solid darkgray;
}

.v-container {
    /* margin: 0px; */
    padding: 2px 0px;
}
</style>