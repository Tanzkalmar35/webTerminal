<script lang="ts">

    // Importing methods related to command processing
    import {executeCommand, isValidCommand, writeInvalidCommand} from "../InputCommandHandler.ts";
    import CmdInputElement from "$lib/components/CmdInputElement.svelte";

    let inputElement;

    export let currentCommand: string = ""; // The current command

    /**
     * This function is called when the user submits a command.
     * It checks if the command is valid and executes it if so.
     *
     * @param e The event that the keyboard delivers on every click
     * @param inputValue The value of the input element
     */
    function submitCommand(e: KeyboardEvent, inputValue: string) {

        if (e.code !== "Enter") return; // Making sure this function only fires when the user presses enter
        if (inputValue === "") return; // Returning if the user submits an empty command

        currentCommand = inputValue; // storing the current command

        inputElement.disabled = true; // Disabling the input element

        // Printing out an error message and returning if the command is invalid
        if (!isValidCommand(currentCommand)) {writeInvalidCommand(currentCommand); return}

        executeCommand(currentCommand); // Executing the command

    }

</script>


<div data-theme="dracula" class="flex w-[90vw]">

    <!-- The info text of where the user currently is (welcome@portfolio) -->
    <p class="flex items-center text-lg">
        <span data-theme="dracula" class="text-primary">welcome</span>
        <span data-theme="dracula">@</span>
        <span data-theme="dracula" class="text-secondary">portfolio</span>
        <span data-theme="dracula">:$</span>
        <span data-theme="dracula" class="ml-3">~</span>
    </p>

    <!-- The terminal input element -->
    <CmdInputElement bind:inputElement={inputElement} submitCommand={submitCommand} />
</div>