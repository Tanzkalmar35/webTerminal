<script lang="ts">

    import {executeCommand, isValidCommand, writeInvalidCommand} from "../InputCommandHandler.ts";

    let terminalInputElement;

    let currentCommand: string = "";

    function submitCommand(e: KeyboardEvent) {
        if (e.code !== "Enter") return;
        if (terminalInputElement.value === "") return;

        currentCommand = terminalInputElement.value;
        terminalInputElement.value = "";

        if (!isValidCommand(currentCommand)) {writeInvalidCommand(currentCommand); return}

        executeCommand(currentCommand);
    }

</script>


<div data-theme="dracula" class="flex w-[90vw]">
    <p class="flex items-center text-lg">
        <span data-theme="dracula" class="text-primary">welcome</span>
        <span data-theme="dracula">@</span>
        <span data-theme="dracula" class="text-secondary">portfolio</span>
        <span data-theme="dracula">:$</span>
        <span data-theme="dracula" class="ml-3">~</span>
    </p>
    <input
            bind:this={terminalInputElement}
            autofocus
            data-theme="dracula"
            class="w-full p-5 text-lg focus:outline-none"
            on:keydown={submitCommand}
    />
</div>