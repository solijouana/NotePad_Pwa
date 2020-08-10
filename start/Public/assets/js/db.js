var db = function () {
    const DB_NAME = 'pwa-note-DB';
    const TABLE_NAME = 'note';

    var dbPromise = idb.open(DB_NAME, 1, function (db) {
        if (!db.objectStoreNames.contains(TABLE_NAME)) {
            db.createObjectStore(TABLE_NAME, { keyPath: 'id' });
        }
    });

    var getNote = function (id) {
        return dbPromise.then(function (db) {
            return db.transaction(TABLE_NAME, 'readwrite')
                .objectStore(TABLE_NAME)
                .get(id);
        });
    }

    var readAllNote = function () {
        return dbPromise.then(function (db) {
            return db.transaction(TABLE_NAME, 'readonly')
                .objectStore(TABLE_NAME)
                .getAll();
        });
    };

    var writeNote = function (data) {
        return dbPromise.then(function (db) {
            var tx = db.transaction(TABLE_NAME, 'readwrite');
            var store = tx.objectStore(TABLE_NAME);
            store.put(data);
            return tx.complete;
        });
    };

    var deleteNote = function (id) {
        return dbPromise.then(function (db) {
            var tx = db.transaction(TABLE_NAME, 'readwrite')
                .objectStore(TABLE_NAME)
                .delete(id);

            return tx.complete;
        });
    };

    var clearAll = function () {
        return dbPromise.then(function (db) {
            var tx = db.transaction(TABLE_NAME, 'readwrite')
                .objectStore(TABLE_NAME)
                .clear();

            return tx.complete;
        });
    };

    return {
        getNote: getNote,
        writeNote: writeNote,
        readAllNote: readAllNote,
        clearAll: clearAll,
        deleteNote: deleteNote
    };
}();