<script lang="ts">
    import TerminalWindowInput from "../lib/components/TerminalWindowInput.svelte";
    import {clearTerminal, shellTexts} from "$lib/stores/Store";

    // The banner text that gets rendered when the shell is first loaded
    const asciiNameBanner =
        "███        ███            ███                                                       ███ ███                     █████████            ███ \n" +
        "███        ███            ███                                                       ███  ██                     ███                  ███        ██ \n" +
        "███   ██   ███    ███     ███    ████    ███     ████ ███ ███     ███               ███     ████ ███ ███        ███          ███     ███              ███     ███ ███ \n" +
        "███  ███   ███  ██   ███  ███  ███     ███  ███   ███  ██  ███  ██   ███            ███      ███  ██  ███       ███████    ███  ███  ███ ███   ███  ███  ███   ███  ███ \n" +
        "███ ██ ███ ███ █████████  ███ ███     ███    ███  ███  ██  ███ █████████            ███      ███  ██  ███       ███       ███   ███  ███   ███ ███ ███   ███   ███  ███ \n" +
        "██ ██    █████ ██         ███  ███     ███  ███   ███  ██  ███ ██                   ███      ███  ██  ███       ███       ███   ███  ███   ███ ███ ███   ███   ███  ███ \n" +
        "███        ███   █████    ███    ████    ███     ████  ██  ███   █████    ██        ███     ████  ██  ███       ███         ███ ████ ███ ███   ███   ███ ████ ████  ███ \n \n \n" +
            "Type help to get started..."

    export let initialCmdInput;
    let terminalDiv;

    $: if ($clearTerminal) {

        terminalDiv.innerHTML = '<ul>{#each $shellTexts as shellText}<li><p>{shellText}</p><TerminalWindowInput/></li>{/each}</ul>';

        clearTerminal.set(false);
    }

</script>

<div data-theme="dracula" class="min-w-[100vw] min-h-[100vh] flex items-center justify-center">
    <div bind:this={terminalDiv} class="w-[97vw] h-[97vh] outline pl-[5vh] pt-[2vh] overflow-hidden">
        <pre>{asciiNameBanner}</pre>
        <TerminalWindowInput bind:this={initialCmdInput} />
            <ul>
                {#each $shellTexts as shellText}
                    <li>
                        <p>{shellText}</p>
                        <TerminalWindowInput />
                    </li>
                {/each}
            </ul>
    </div>
</div>
