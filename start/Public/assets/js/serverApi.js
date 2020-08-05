const SERVER_URL = "127.0.0.1:5001/note/";


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
            'Accept': 'application/json'
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