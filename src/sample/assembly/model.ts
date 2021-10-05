import { PersistentMap } from "near-sdk-as";

// exporting a constant notes so it can be used outside of this file ./models file.
// Also defined a key value for our notes, in our case we used 'n'and assigned a type of `sring`
export const notes = new PersistentMap<string, string[]>("n");