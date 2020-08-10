const SERVER_URL = 'https://cranegallery.ir/api/note/';
const BACKGROUND_SYNC_SERVER = 'new-notes-sync';

function getAllNotes() {
    return fetch(SERVER_URL);
}

function getNoteById(id) {
    return fetch(SERVER_URL + id);
}

function sendData(noteData) {
    return fetch(SERVER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token'
        },
        body: JSON.stringify(noteData)
    });
}

function editData(noteData) {
    return fetch(SERVER_URL + noteData.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(noteData)
    });
}

function deleteData(id) {
    return fetch(SERVER_URL + id, {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ id: id })
    });
}