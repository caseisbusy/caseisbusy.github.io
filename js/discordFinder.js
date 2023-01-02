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
		ACTIVE_DEVELOPER: "Active Developer",
		NITRO: "Discord Nitro",
		BOOSTER_1: "Nitro Boost",
		BOOSTER_2: "Nitro Boost",
		BOOSTER_3: "Nitro Boost",
		BOOSTER_4: "Nitro Boost",
		BOOSTER_5: "Nitro Boost",
		BOOSTER_6: "Nitro Boost",
		BOOSTER_7: "Nitro Boost",
		BOOSTER_8: "Nitro Boost",
		BOOSTER_9: "Nitro Boost",
		BOOSTER_10: "Nitro Boost",
		BOOSTER_11: "Nitro Boost",
		BOOSTER_12: "Nitro Boost",
		BOOSTER_13: "Nitro Boost",
		BOOSTER_14: "Nitro Boost",
		BOOSTER_15: "Nitro Boost",
		BOOSTER_16: "Nitro Boost",
		BOOSTER_17: "Nitro Boost",
		BOOSTER_18: "Nitro Boost",
		BOOSTER_19: "Nitro Boost",
		BOOSTER_20: "Nitro Boost",
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
<a target="_blank" href="https://discord.com/users/${on}"><div class="parent"><img class="upfp" src="${data.data.avatarURL}?size=256" alt="Users avatar"/></a><div><p class="res">Username: ${data.data.tag || "None"}</p><p class="res">About me: ${data.data.bio || "None"}</p><p class="res">Created: ${fullDate}</p><p class="res">Badges: ${badges.length ? badges.map(flag => badgestops[flag]).join(", ") : "None" }</p></div></div>
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