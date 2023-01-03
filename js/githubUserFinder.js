var form = document.getElementById("form")

form.addEventListener("submit", function(e){
	e.preventDefault()
	let search = document.getElementById("search").value

  let on = search.split(' ').join("")

fetch(`https://api.github.com/users/${on}`).then(response => response.json()).then(data => {
console.log(data) 
let dataDocument = document.getElementById("result").innerHTML = `
<link href="css/githubUserFinder.css" rel="stylesheet" type="text/css"/>
<a target="_blank" href="https://github.com/${on}"><div class="parent"><img class="upfp" src="${data.avatar_url}?size=256" alt="Users avatar"/></a><div><p class="res">Name: ${data.name || "None"}</p><p class="res">Bio: ${data.bio || "None"}</p><p class="res">Followers: ${data.followers}</p><p class="res">Public Repos: ${data.public_repos}</p><p class="res">Company: ${data.company || "No company"}</p></div></div>
`/*`
<link href="css/githubUserFinder.css" rel="stylesheet" type="text/css"/>
<a target="_blank" href="https://github.com/${on}"><img src="${data.avatar_url}"/></a>
<div class="res">Name: ${data.name || "None"}</div>
<div class="res">Bio: ${data.bio || "None"}</div>
<div class="res">Followers: ${data.followers}</div>
<div class="res">Public Repos: ${data.public_repos}</div>
<div class="res">Company: ${data.company || "No Company"}</div>
`*/
if(!data.avatar_url) {
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