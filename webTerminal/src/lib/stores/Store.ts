import { writable } from 'svelte/store';

export const shellTexts = writable<String[]>([]);