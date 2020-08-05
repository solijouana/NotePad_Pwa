// var xhr=new XMLHttpRequest();
// xhr.open("Get","https://reqres.in/api/users/2");
// xhr.responseType="json";

// xhr.onload=function(){

//     console.log(xhr.response);

// }

// xhr.onerror=function(){
//     console.log("error");

// }

// xhr.send();

fetch("https://reqres.in/api/users/1")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (res) {
        console.log(res);
        console.log(res.data);

        var firstName = document.getElementById('firstName');
        var lastName = document.getElementById('lastName');
        var avatar = document.getElementById('avatar');
        firstName.innerHTML = res.data.first_name;
        lastName.innerHTML = res.data.last_name;
        avatar.src = res.data.avatar;
    })
    .catch(function (err) {
        console.log(err);
    });

fetch("./about.html").then(function (res) {
    return res.text();
}).then(function (result) {
    document.getElementById('about').innerHTML = result;
});

fetch("https://reqres.in/api/users", {
    method: 'Post',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: 'Soheil',
        job: 'Developer'
    }),
    mode: 'cors',
    cache: 'default'
}).then(function (response) {
    return response.json();
}).then(function (res) {
    console.log(res);
    document.getElementById('about').innerHTML = res.name;
}).catch(function (err) {
    console.log(err);

});