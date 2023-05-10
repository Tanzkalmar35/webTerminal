<script>
    import {clearTerminal, shellTexts} from "$lib/stores/Store";
    import TerminalWindowInput from "$lib/components/TerminalWindowInput.svelte";

    let initialCmdInput;

    $: if ($clearTerminal) {
        initialCmdInput.value = ""
        initialCmdInput.removeAttribute("disabled")
        initialCmdInput.focus()
    }

</script>

<div>
    <TerminalWindowInput bind:cmdInput={initialCmdInput}/>
    <ul>
        {#each $shellTexts as shellText}
            <li>
                <p>{shellText}</p>
                <TerminalWindowInput/>
            </li>
        {/each}
    </ul>
</div>
