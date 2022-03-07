import React, {useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NoteComponent from '../components/note/note.component';
import { v4 } from 'uuid';
import Layout from '../components/layout'

const NoteList = () => {

     const [notes, setNotes] = useState([]) 
     const [inputValue, setInputValue] = useState("")

     useEffect(() =>{console.log(inputValue)},[inputValue])
     useEffect(() => { console.log(notes) }, [notes])
     
     const formatDate = (date) => {
          const days = `${date.getDate()< 10 ? '0'+date.getDate() : date.getDate()}`
          const months = `${(date.getMonth()+1)< 10 ? '0'+(date.getMonth()+1) : (date.getMonth()+1)}`

          return `${days}/${months}/${date.getFullYear()}`;
     }
     const handleInputChange = (value) => {
          setInputValue(value);
     }
     const handleNoteAdd = () => { 
          if (inputValue === '') return;
          let date = new Date()
          console.log(formatDate(date))
          const newNote = {noteId: v4(), noteText: inputValue.trim(), noteDate: formatDate(date)}
          setInputValue("");
          setNotes((prev)=>[...prev, newNote])
     }
     const handleNoteDelete = (value) => { }

  return (
       <Layout>
            {/* notes input */}
            <div className="flex flex-col min-w-xs max-w-xl w-full space-y-2 items-center">
                 <h3 className="mt-3 font-medium text-gray-500 self-start">Note</h3>
                 <textarea name="note" onChange={(e) => handleInputChange(e.target.value)} placeholder="Note text"
                      className="border-[1px] p-2 h-32 w-full text-sm"
                         value={inputValue}></textarea>
                 <button className="p-1 bg-white w-28 h-8 border-[1px] text-sm"
                      onClick={ ()=>handleNoteAdd()}>Add note</button>
            </div>
            {/* notes list */}
            <div className="flex flex-col min-w-sm max-w-xl w-full h-full items-center">
                 <h2 className="font-bold text-xl text-gray-500">Latest notes</h2>
                 {notes.map((note) => {
                      const { noteId } = note;
                      return <NoteComponent key={noteId} note={note}></NoteComponent>
                 })}
            </div>
    </Layout>
  )
}

export default NoteList