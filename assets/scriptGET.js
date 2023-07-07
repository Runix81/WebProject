async function start(){
    let url = "https://jsonplaceholder.typicode.com/users/";
    let response = await fetch(url);

    let users = await response.json();
    console.log(users);

    let section = document.getElementById("users");
    let elem = "";

    users.forEach(element => {
        let elemName = `<h2>${element.name} </h2>`
        elem+=elemName;
        section.innerHTML = elem;
    });
}

start();