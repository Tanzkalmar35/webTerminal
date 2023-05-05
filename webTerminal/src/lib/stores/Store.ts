import { writable } from 'svelte/store';

// The store for the whole text of the shell
export const shellTexts = writable<String[]>([]);

//
export const cmdInputs = writable({});