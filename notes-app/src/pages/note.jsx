import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout';
import useLocalStorage from '../hooks/useLocalStorage';
import ReactMarkdown from 'react-markdown';

const Note = () => {
	const [notes, setNotes] = useLocalStorage('notes', []);
	const params = useParams();
	const loadedNote = useMemo(() => notes.filter((note) => note?.noteId === params?.noteId)[0], [notes, params]);
	const navigate = useNavigate();
	const handleBrowserHistoryBack = () => {
		navigate(-1);
	};
	const handleNoteDelete = (noteId) => {
		const newNotes = notes.filter((note) => note.noteId !== loadedNote?.noteId);
		console.log(noteId, newNotes);
		setNotes(newNotes);
		handleBrowserHistoryBack();
	};

	return (
		<Layout>
			<div className='flex flex-col w-full max-w-xl h-full rounded-sm'>
				<div className=' my-3 flex justify-between'>
					<button className='w-24 h-8 p-1 rounded-sm text-sm bg-gray-200' onClick={() => handleBrowserHistoryBack()}>
						Go back
					</button>
					<button className='w-24 h-8 p-1 rounded-sm text-sm bg-red-400 text-white' onClick={() => handleNoteDelete(loadedNote?.noteId)}>
						Delete note
					</button>
				</div>
				<div className='flex flex-col p-3 w-full max-w-xl bg-gray-200 rounded-sm'>
					<span className='flex flex-col w-full prose'>
						<ReactMarkdown>{loadedNote?.noteText}</ReactMarkdown>
					</span>
					<span className='items-self-end w-full text-sm text-right text-gray-500'>{loadedNote?.noteDate}</span>
				</div>
			</div>
		</Layout>
	);
};

export default Note;
