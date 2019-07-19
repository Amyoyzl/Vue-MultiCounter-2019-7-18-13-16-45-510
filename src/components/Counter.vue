<template>
    <div id="counter">
        <p>
            <button @click="sub">-</button>
            <span>{{ count }}</span>
            <button @click="add">+</button>
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
    },
    methods: {
        sub() { this.count--; },
        add() { this.count++; }
    }
}
</script>

<style scoped>
span {
    margin: 0 10px;
}
</style>
