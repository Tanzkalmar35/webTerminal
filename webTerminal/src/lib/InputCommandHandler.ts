import {clearTerminal, shellTexts} from "$lib/stores/Store";

// Variable declarations

const commandList: string[] = [
    "help",
    "clear",
    "whoami",
    "projects",
    "email",
    "github",
];

let userMode: "portfolio" | "free" = "portfolio";

/**
 * Writes a message into the terminal shell history
 *
 * @param message The message to write to the shell
 */
function writeToShell(message: string): void {
    shellTexts.update((shellTexts: String[]) => [...shellTexts, message]);
}

// Command checking
/**
 * Checks if a command is included in the command list
 *
 * @param command the command that is to be checked
 */
export function isValidCommand(command: string): boolean {
    return commandList.includes(command);
}

/**
 * Writes an error message for invalid command
 *
 * @param command the invalid command
 */
export function writeInvalidCommand(command: string): void {
    writeToShell(`Invalid command: ${command}`);
}

// Command handling

/**
 * Calls the right function for a command
 *
 * @param command the command
 */
export function executeCommand(command: string): void {
    switch (command) {
        case "help":
            writeToShell(executeHelp());
            break;
        case "clear":
            executeClear();
            break;
        case "whoami":
            executeAbout()
            break;
        case "email":
            executeContactEmail()
            break;
        case "github":
            executeLinkToGithub()
            break;
    }

}

/**
 * The help command.
 * Prints out all commands and a small summary of use cases
 */
function executeHelp(): string {
    return ""
        + "Not sure where to start? Try one of these commands: \n"
        + commandList.toString()
}

/**
 * The clear command.
 * Clears the terminal
 */
function executeClear(): void {
    shellTexts.update((shellTexts: String[]) => []);
    // make the initial input available again and clear it
    clearTerminal.set(true);
}

/**
 * Gives the user a short summary of who I am
 * TODO: implement
 */
function executeAbout() {

}

/**
 * Makes the terminal an email window
 * TODO: implement
 */
function executeContactEmail() {

}

/**
 * Opens a new tab with my github profile
 * TODO: implement
 */
function executeLinkToGithub() {

}

// Helper functions for command execution

