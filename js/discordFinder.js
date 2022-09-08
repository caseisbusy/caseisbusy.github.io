// fetch(`https://japi.rest/discord/v1/user/${user.id}`);
// const data = await response.json();

var form = document.getElementById("form")

form.addEventListener("submit", function(e){
	e.preventDefault()
	let search = document.getElementById("search").value

  let on = search.split(' ').join("")

fetch(`https://japi.rest/discord/v1/user/${on}`).then(response => response.json()).then(data => {
let dataDocument = document.getElementById("result").innerHTML = `
<link href="css/discordFinder.css" rel="stylesheet" type="text/css"/>
<a target="_blank" href="https://discord.com/users/${on}"><img src="${data.data.avatarURL}?size=256" alt="Users avatar"/></a>
<div class="res">Username: ${data.data.tag || "None"}</div>
<div class="res">About me: ${data.data.bio || "None"}</div>
<div class="res">Created: ${data.data.createdAt}</div>
<div class="res">Badges: ${data.data.public_flags_array}</div>`

if(!data.data.username) {
	dataDocument = document.getElementById("result").innerHTML = `No data to show, user not found`
}
})	
})


document.onkeydown = function(e) {
    const { keyCode: c } = e;
    if (e.ctrlKey) {
        switch (c) {
            case 83:
            case 85:
            case 65:
            case 73:
            case 123:
                e.preventDefault();
                break;
        }
    } else {
        if(c === 123) e.preventDefault()
    }
};
window.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);