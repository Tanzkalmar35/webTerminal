import {sharedFunction, shellTexts} from "./stores/Store";
import {get} from "svelte/store";

const commandList: string[] = [
    "help",
    "clear",
];

function writeToShell(message: string): void {
    shellTexts.update((shellTexts: String[]) => [...shellTexts, message]);
}

export function isValidCommand(command: string): boolean {
    return commandList.includes(command);
}

export function writeInvalidCommand(command: string): void {
    writeToShell(`Invalid command: ${command}`);
}

export function executeCommand(command: string): void {
    switch (command) {
        case "help":
            writeToShell(executeHelp());
            break;
        case "clear":
            executeClear();
            break;
    }
}

function executeHelp(): string {
    return ""
        + "Not sure where to start? Try one of these commands: \n"
        + commandList.toString()
}

function executeClear(): void {
    shellTexts.update((shellTexts: String[]) => []);
    // make the initial input available again and clear it
    const clearInput = get(sharedFunction);
    clearInput();
}


