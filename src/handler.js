const { nanoid } = require("nanoid");
const notes = require('./notes.js')

const addNoteHandler = (request,h) => {
    const { title, tags, body } = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNotes = {
        id,
        title,
        tags,
        body,
        createdAt,
        updatedAt,
    };
    notes.push(newNotes);

    const isSucsess = notes.filter((note) => note.id === id).length > 0;

    if(isSucsess) {
        const response = h.response({
            status : 'success',
            message : "Notes Sucsess to Create!!!",
            data : {
                noteId : id,
            }
        })
            response.code(201);
            return response;
        }  
            const response = h.response({
                status: 'fail',
                message: 'Catatan gagal ditambahkan',
            });
          response.code(500);
          return response;

}

// Get All Data

const getAllNotes = (request, h) => {
    const response = h.response({
        status :'success',
        message : "Notes Sucsess to Get!!!",
        data : {
            notes,
        }
    });
    response.code(201);
    return response;
}


// Get Data By ID

const getAllNotesById = (request, h) => {
    const { id } = request.params;
    const note = notes.filter((note) => note.id === id)[0];
    if (note !== undefined) {
        const response = h.response({
            status :'success',
            message : "Notes Sucsess to Get!!!",
            data : {
                note,
            }
        });
        response.code(201);
        return response;
    } const response = h.response({
        status : 'failed',
        message : 'Fail to GET Notes'
    })
    response.code(500);
    return response;
}

// Change Note Handler 

const changeNote = (request,h) => {
    const { id } = request.params;
    const { title, tags, body } = request.payload;
    const updatedAt = new Date().toISOString();
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        }
        const response = h.response({
            status :'success',
            message : "Notes Sucsess to Change!!!",
        });
        response.code(200);
        return response;
    } const response = h.response({
        status : 'failed',
        message : 'Fail to Change Id Not FOUND'
    })
    response.code(404);
    return response;
}

// Delete Note Handler 

const deleteNote = (request,h) => {
    const {id} = request.params;
    const index = notes.findIndex((note) => note.id === id);
    if (index!== -1) {
        notes.splice(index, 1);
        const response = h.response({
            status :'success',
            message : "Notes Sucsess to Delete!!!",
        });
        response.code(200);
        return response;
    }

};
module.exports = { 
    addNoteHandler, 
    getAllNotes,
    getAllNotesById ,
    changeNote,
    deleteNote,
}