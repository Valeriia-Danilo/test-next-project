import axios from "axios";
import { NoteListResponse, Note, Category } from "@/types/note";



axios.defaults.baseURL = "https://next-v1-notes-api.goit.study";

export const getNotes = async (categoryId?: string) => {
    const res = await axios.get<NoteListResponse>("/notes", {
        params: { categoryId },
    });
    return res.data;
};

export const getOneNote = async (id: string) => {
    const res = await axios.get<Note>(`/notes/${id}`);
    return res.data;
};

export const getCategories = async () => {
    const res = await axios.get<Category[]>(`/categories`);
    return res.data;
};