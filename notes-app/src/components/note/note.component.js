import React from 'react'

const NoteComponent = ({ note }) => {
  const { noteText, noteDate } = note;

  // TODO: add router link to date
  return (
    <div className="flex flex-col sm:flex-row w-full my-4 bg-gray-200 p-3">
      <div className="flex flex-col w-full sm:s-4/5 space-y-2">
        <span className="flex text-sm w-full h-16 text-ellipsis overflow-hidden"
        style={{"display":"-webkit-box","-webkit-line-clamp": "3", "-webkit-box-orient": "vertical"}}>{noteText}</span>
        <span className="text-sm text-gray-500">{noteDate}</span>
      </div>
      <div className="flex w-full sm:w-1/5 justify-center items-center">
        <button className="bg-red-400 text-white text-sm p-2 rounded-sm">Delete note</button>
      </div>
    </div>
  )
}

export default NoteComponent