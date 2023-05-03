
const commandList: string[] = [
    "help",
];

export function isValidCommand(command: string): boolean {
    return commandList.includes(command);
}

export function executeCommand(command: string): void {
    switch (command) {
        case "help":
            executeHelp();
            break;
    }
}

function executeHelp() {
    console.log("help");
}


