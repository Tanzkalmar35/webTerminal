/**
 * @file Store.ts
 * This file contains the stores that are used in the application
 */

import {writable} from 'svelte/store';

/**
 * Stores the all texts that are displayed in the terminal
 */
export const shellTexts = writable<String[]>([]);

/**
 * A boolean for handling whether the terminal should be cleared
 */
export const clearTerminal = writable<boolean>(false)
