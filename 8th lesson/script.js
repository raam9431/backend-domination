// Callbacks, Promises, and async/await 

function connectToServer() {
    console.log("connecting to server...");
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("connected...");
            resolve("resolve wala connected...")
        }, 2000);
    })
}

function getCourse() {
    console.log("getting courses...");
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(["course 1", "course 2", "course 3"])
        }, 2000);
    })
}

connectToServer()
    .then(function (response) {
        console.log(response);
        return getCourse();
    })
    .then(function (response) {
        console.log(response);
    })
    .catch()

// async/await 
// async function getCourse(){
//     await 
// }