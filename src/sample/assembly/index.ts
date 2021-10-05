import { context, logging } from "near-sdk-as";
import {  notes } from "./model";

/* 
  Created a new function getNotes, with context.sender, 
  To get the user's AccountId
*/

export function getNotes(): string[] | null {
  return notes.get(context.sender);
}

// This takes a value, note and each note is added to an array of notes

export function addNote(note: string): void {
  const sender = context.sender;
  let notesArray: string[] = []
  // Check is a key for the current user already exists
  if (notes.contains(sender)) {
    // Assign the already existing notes to a user who's already logged in or has a key
    notesArray = notes.get(sender) as string[];
  }

  // we push the new note to an array of note and set it in the notesArray
  notesArray !== null && notesArray.push(note);
  notes.set(sender, notesArray);

  logging.log("Note added successfully");
}

export function deleteNote(noteIndex: u32): void {
  // assign the notes array of current acoount
  let notesArray = notes.get(context.sender);
  if (notesArray != null) {
    const newNotes: string[] = [];
    for (let index = 0; index < notesArray.length; index++) {
      if (index != noteIndex) {
        newNotes.push(notesArray[index]);
      }
    }

    // set the value of the account phonebook to the new array
    // phonebooks.delete(context.sender);
    notes.set(context.sender, newNotes);
    logging.log("Note deleted!");
  }
}