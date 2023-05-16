const { addNoteHandler, getAllNotesById, getAllNotes, changeNote, deleteNote } = require('./handler');

const routes = [
    {
        method : 'GET',
        path : "/notes",
        handler : getAllNotes,
    },
    {
        method : 'GET',
        path : "/notes/{id}",
        handler : getAllNotesById,
    },
    {
        method : 'POST',
        path : "/notes",
        handler : addNoteHandler ,
    },
    {
        method : 'PUT',
        path : "/notes/{id}",
        handler : changeNote,
    },
    {
        method : 'DELETE',
        path : "/notes/{id}",
        handler : deleteNote,
    },
]

module.exports = routes