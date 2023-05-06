<script lang="ts">

    import {sharedFunction} from "$lib/stores/Store";
    import cmdInput from "./TerminalWindowInput.svelte";

    export let submitCommand;
    export let inputElement;
    export let inputValue = "";

    function enableInputElement() {
        cmdInput.disabled = false;
        cmdInput.focus;
    }

    $sharedFunction = enableInputElement;

</script>

<input
        autofocus
        data-theme="dracula"
        class="w-full px-5 py-2 text-lg focus:outline-none"
        bind:value={inputValue}
        bind:this={inputElement}
        on:keydown={() => submitCommand(event, inputValue)}
/>