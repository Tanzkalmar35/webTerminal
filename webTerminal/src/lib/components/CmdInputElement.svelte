<script lang="ts">
    export let submitCommand;
    export let inputElement;
    export let inputValue = "";

</script>

<input
        autofocus
        data-theme="dracula"
        class="w-full px-5 py-2 text-lg focus:outline-none"
        bind:value={inputValue}
        bind:this={inputElement}
        on:keydown={() => submitCommand(event, inputValue)}
/>