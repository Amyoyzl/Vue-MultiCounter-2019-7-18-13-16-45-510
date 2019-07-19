<template>
    <div id="counter">
        <p>
            <button v-on:click="$emit('change-counter', -1,  count--)"> - </button>
            <span>{{ count }}</span>
            <button v-on:click="$emit('change-counter', 1, count++)"> + </button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
            count: 0
        }
    }
}
</script>

<style scoped>
span {
    margin: 0 20px;
}
</style>
