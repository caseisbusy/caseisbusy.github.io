// fetch(`https://japi.rest/discord/v1/user/${user.id}`);
// const data = await response.json();

var form = document.getElementById("form")

form.addEventListener("submit", function(e){
	e.preventDefault()
	let search = document.getElementById("search").value

  let on = search.split(' ').join("")

fetch(`https://japi.rest/discord/v1/user/${on}`).then(response => response.json()).then(data => {
	let badgestops = {
    HOUSE_BRAVERY: "HypeSquad Bravery",
    HOUSE_BRILLIANCE: "HypeSquad Brilliance",
    HOUSE_BALANCE: "HypeSquad Balance",
    BUGHUNTER_LEVEL_1: "BugHunter_lvl(1)",
    BUGHUNTER_LEVEL_2: "BugHunter_lvl(2)",
    HYPESQUAD_EVENTS: "Hypesquad Event",
    EARLY_VERIFIED_DEVELOPER: "Early Verified Developer",
    VERIFIED_DEVELOPER: "Verified Developer",
    DISCORD_PARTNER: "Discord Partner",
    PARTNERED_SERVER_OWNER: "Server Partner",
    EARLY_SUPPORTER: "Early Supporter",
    DISCORD_EMPLOYEE: "Discord Employee",
		ACTIVE_DEVELOPER: "Active Developer"
	};
	  let badges = data.data.public_flags_array
	
let timestamp = data.data.createdTimestamp
let date = new Date(timestamp)
let fullDate = date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds()
let dataDocument = document.getElementById("result").innerHTML = `
<link href="css/discordFinder.css" rel="stylesheet" type="text/css"/>
<a target="_blank" href="https://discord.com/users/${on}"><img src="${data.data.avatarURL}?size=256" alt="Users avatar"/></a>
<div class="res">Username: ${data.data.tag || "None"}</div>
<div class="res">About me: ${data.data.bio || "None"}</div>
<div class="res">Created: ${fullDate}</div>
<div class="res">Badges: ${badges.length ? badges.map(flag => badgestops[flag]).join(", ") : "None" }</div>
`

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