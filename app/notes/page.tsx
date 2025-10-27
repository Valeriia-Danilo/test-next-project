import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/lib/api";

const Notes = async () => {
const res = await getNotes();
    

    return (
        <section>
            <h1>Notes List</h1>
            {res?.notes?.length > 0 && <NoteList notes={res.notes} />}
        </section>
);
}

export default Notes;