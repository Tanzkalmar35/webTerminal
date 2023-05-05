<script lang="ts">

    export let submitCommand;
    export let inputElement;
    export let inputValue = "";

</script>

<input
        autofocus
        data-theme="dracula"
        class="w-full p-5 text-lg focus:outline-none"
        bind:value={inputValue}
        bind:this={inputElement}
        on:keydown={() => submitCommand(event, inputValue)}
/>