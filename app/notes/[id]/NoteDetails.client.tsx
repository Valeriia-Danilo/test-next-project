'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getOneNote } from '@/lib/api';
import Loading from '@/app/loading';
import { useRouter } from 'next/navigation';

const NoteDetailsClient = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getOneNote(id),
    refetchOnMount: false,
  });

  if (isLoading) return <Loading />;

  if (error || !note) return <p>Some error...</p>;

  const formattedDate = note.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note.createdAt}`;

  const handleClick = () => {
    console.log(note.title);
  };

  const handleGoBack = () => {
    const isSure = confirm('Are you sure?');
    if (isSure) {
      router.back();
    }
  };

  return (
    <div>
      <button onClick={handleGoBack}>Back</button>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={handleClick}>Edit</button>
      <p>{formattedDate}</p>
    </div>
  );
};

export default NoteDetailsClient;
