<script lang="ts">

    let terminalInputElement;

    let currentCommand: string = "";

    const allCommands: Array<string> = [
        "help",
        "about",
        "projects",
        "contact",
        "clear",
        "exit",
    ];

    function commandSubmit(e: KeyboardEvent) {
        if (e.code === "Enter") {
            currentCommand = terminalInputElement.value;
            allCommands.includes(currentCommand) ? console.log(currentCommand + " Command submitted") : "";

            terminalInputElement.value = "";
        }
    }

</script>


<div data-theme="dracula" class="absolute flex bottom-[0] w-[90vw] m-[2.5vh]">
    <p class="flex items-center pl-5 text-lg">
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
            on:keydown={commandSubmit}
    />
</div>