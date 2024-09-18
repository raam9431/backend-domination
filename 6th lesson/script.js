// Callbacks, Promises, and async/await


// function getSongs(){
//     setTimeout(function() {
//         console.log("songs aa gaye");        
//     }, 2000)
// }

// function getMoreSongs(){
//     setTimeout(function(){
//         console.log("more songs aa gaye");
//     }, 3200)
// }


// getSongs();
// getMoreSongs();

// function connectToServer(abcd){
//     console.log("connecting to server.......");
//     setTimeout(function(){
//         console.log("server connected");
//         abcd();
//     }, 2000)
// }

// function fetchCourses(cbfn){
//     console.log("fetching courses...");
//     setTimeout(() => {
//         cbfn(["course 1", "course 2", "course 3"]);
//     }, 2000);
// }

// connectToServer(function(){
//     fetchCourses(function(data){
//         console.log(data);
//     });
// });

function connectToServer(abcd) {
    console.log("connecting to server...");
    setTimeout(function () {
        console.log("connected to server");
        abcd(["lolo 1", "lolo 2", "lolo 3"]);
    }, 2000)
}

function fetchCourses(cbfn) {
    console.log("fectching courses");
    setTimeout(() => {
        cbfn(["course 1", "course 2", "course 3"]);
    }, 2000);
}

function showCourses(yoyo) {
    console.log("showCourses");
    setTimeout(() => {
        yoyo(["yoyo 1", "yoyo 2", "yoyo 3"])
    }, 2000);
}

function showMoreCourse(nana) {
    console.log("showing more courses");
    setTimeout(() => {
        nana(["nana 1", "nana 2", "nana 3"]);
    }, 2000);
}

connectToServer(function (hobo) {
    console.log(hobo);
    fetchCourses(function (data) {
        console.log(data);
        showCourses(function (params) {
            console.log(params);
            showMoreCourse(function (laram) { 
                console.log(laram);
            });
        })
    })
});