import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/lib/api";

type Props = {
    params: Promise<{slug: string[]}>
};

const NotesByCategory = async ({ params }: Props) => {
    const { slug } = await params;
    const category = slug[0] === "all" ? undefined : slug[0];
    const res = await getNotes(category);
  return (
    <div>
          <h2>Notes List</h2>
          {res.notes.length > 0 && <NoteList notes={res.notes}/>}
    </div>
  )
}

export default NotesByCategory;
