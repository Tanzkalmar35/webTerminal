<script lang="ts">
    import TerminalWindowInput from "../lib/components/TerminalWindowInput.svelte";
    import {shellTexts} from "$lib/stores/Store";

</script>

<div data-theme="dracula" class="min-w-[100vw] min-h-[100vh] flex items-center justify-center">
    <div class="w-[97vw] h-[97vh] outline pl-[5vh] pt-[2vh] overflow-hidden">
        <TerminalWindowInput />
        <ul>
            {#each $shellTexts as shellText}
                <li><p>{shellText}</p></li>
            {/each}
        </ul>
    </div>
</div>
