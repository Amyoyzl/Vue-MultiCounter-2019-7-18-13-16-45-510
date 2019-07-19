<template>
    <div id="counterSum">
        总和：{{ sum }}
    </div>
</template>

<script>
export default {
    name: "CounterSum",
    props: ["sum"]
}
</script>
