<script lang="ts">
    let count = 0;

    function increaseCount() {
        count += 1;
        console.log(count);
    }

</script>

<button on:click={increaseCount}>
    CLick me {count}
</button>
