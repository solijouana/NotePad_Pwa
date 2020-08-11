const SERVER_URL = 'https://cranegallery.ir/api/note/';
const SERVER_URL_Sub = 'https://cranegallery.ir/api/subscription/';
const BACKGROUND_SYNC_SERVER = 'new-notes-sync';


function postSubscription(sub) {
    // return fetch(SERVER_URL_Sub, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    //         'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token'
    //     },
    //     body: JSON.stringify(sub)
    // });

    console.log('Subscription Sent to server', sub);
}

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