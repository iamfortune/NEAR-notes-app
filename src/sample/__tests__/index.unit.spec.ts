import { addNote, deleteNote, getNotes } from "../assembly";
import { context, PersistentMap, VMContext } from "near-sdk-as";
import { notes } from "../assembly/model";

const contract = "note_app";

describe("Notes", () => {
  beforeEach(() => {
    if (notes.contains(context.sender)) {
      notes.delete(context.sender);
    }
    addNote("I am a note");
  });

  it("verifies a note is added from addNote", () => {
    expect(notes.get(context.sender)).toBeTruthy("The user key has been created on the map with a new note");
  });

  
  it("deletes contact by calling deleteNote()", () => {
    deleteNote(0);
    expect(notes.get(context.sender)).toStrictEqual([], 'Message at index "0" deleted');
  });
});