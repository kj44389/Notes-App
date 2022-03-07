import { Routes, Route } from 'react-router-dom';

import Note from './pages/note';
import NoteList from './pages/noteList';

const App = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<NoteList />} />
				<Route path='/note/:noteId' element={<Note />} />
			</Routes>
		</div>
	);
};
export default App;
