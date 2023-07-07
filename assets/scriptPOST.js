async function userSubmit(event){
    event.preventDefault();
    let url = "https://jsonplaceholder.typicode.com/users/";
    let name = document.getElementsByTagName("input")[0].value;
    let response = await fetch(url, 
        {
            method: "POST",
            headers: {
                "Content-Type": "aplication/json"
            },
            body: JSON.stringify({name})

        });
        let result = await response.json();
        console.log(response.status);
        console.log(result);
        
}

let form = document.getElementById("form");
form.addEventListener("submit", userSubmit);

