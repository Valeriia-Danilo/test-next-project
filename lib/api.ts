import axios from "axios";
import { NoteListResponse } from "@/types/note";
import { Note } from "@/types/note";



axios.defaults.baseURL = "https://next-v1-notes-api.goit.study";

export const getNotes = async () => {
    const res = await axios.get<NoteListResponse>("/notes");
    return res.data;
};

export const getOneNote = async (id: string) => {
    const res = await axios.get<Note>(`/notes/${id}`);
    return res.data;
};
