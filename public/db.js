let db;

const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
    //store object 'pending'
    const db = event.target.result;
    db.createObjectStore("pending", {autoIncrement: true});
};

request.onsuccess = function(event) {
    db = event.target.result

    //Check status of app
    if (navigator.onLine) {
        checkDatabase();
    }
};

//This function will save a transaction while offline to the pending DB created above
function saveToPending(record) {
    const transaction = db.transaction.objectStore(["pending"], "readwrite");
    const store = transaction.objectStore("pending");
    store.add(record);
}

function checkDB() {
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");
    const grabAll = store.getAll();

    grabAll.onsuccess = function() {
        if (grabAll.result.length > 0) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(grabAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            }).then(response => response.json()).then(() => {
                const transaction = db.transaction(["pending"], "readwrite");
                const store = transaction.objectStore("pending");
                //clear when finished
                store.clear();
            });
        }
    };
}

window.addEventListener("online", checkDB);