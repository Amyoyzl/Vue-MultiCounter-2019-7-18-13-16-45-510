<template>
    <div id="counterSum">
        总和：{{ sum }}
    </div>
</template>

<script>
export default {
    name: "CounterSum",
    computed: {
        sum() {
            return this.$store.state.countSum
        }
    }
}
</script>
