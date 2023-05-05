import {shellTexts} from "./stores/Store";

const commandList: string[] = [
    "help",
];

function writeToShell(message: string): void {
    shellTexts.update((shellTexts) => [...shellTexts, message]);
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
            executeHelp();
            break;
    }
}

function executeHelp() {
 writeToShell("help");
}


