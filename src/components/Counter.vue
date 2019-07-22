<template>
    <div id="counter">
        <p>
            <button @click="sub"> - </button>
            <span>{{ count }}</span>
            <button @click="add"> + </button>
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
        add() {
            this.count ++;
            this.$store.commit('add')
        },
        sub() {
            this.count --;
            this.$store.commit('sub')
        }
    },
    beforeDestroy() {
        this.$store.commit('subNumber', this.count);
    }
}
</script>

<style scoped>
span {
    margin: 0 20px;
}
</style>
