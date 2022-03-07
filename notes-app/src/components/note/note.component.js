import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const NoteComponent = ({ note, deleteNote }) => {
	const { noteText, noteDate, noteId } = note;

	return (
		<div className='flex flex-col sm:flex-row w-full my-4 bg-gray-200 p-3 rounded-sm'>
			<div className='flex flex-col w-full sm:s-4/5 space-y-2'>
				<span className='flex text-sm w-full h-16 text-ellipsis overflow-hidden  prose' style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical' }}>
					<ReactMarkdown>{noteText}</ReactMarkdown>
				</span>

				<Link to={'/note/' + noteId}>
					<span className='text-sm text-gray-500'>{noteDate}</span>
				</Link>
			</div>
			<div className='flex w-full sm:w-1/5 justify-center items-center'>
				<button
					className='bg-red-400 text-white text-sm p-2 rounded-sm'
					onClick={() => {
						deleteNote(noteId);
					}}>
					Delete note
				</button>
			</div>
		</div>
	);
};

export default NoteComponent;
