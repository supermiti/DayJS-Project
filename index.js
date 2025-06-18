dayjs.extend(window.dayjs_plugin_utc); //plugin for utc
dayjs.extend(window.dayjs_plugin_timezone); //plugin for timezones

let identifier = null;

function jspopup(){
    const popup = document.getElementById("jspopup"); //variable popup | gets the id of div class "popup"
    const container = document.getElementById("details");

    if (popup.style.visibility === "hidden") { // .style.visibility | checks the CSS variable of "VISIBILITY" under jspopup
        popup.style.visibility = "visible";
        container.style.opacity = "50%"; // dark overlay
    }
    else {
        popup.style.visibility = "hidden";
        container.style.backgroundColor = "";
        container.style.opacity = "100%"; // dark overlay
    }
}

function timezone(){
    const region = document.getElementById("timezone").value;
    document.getElementById("region").textContent = region;
    
    clearInterval(identifier); //upon clicking Apply, clears the running time of the previous one

    identifier = setInterval(()=> {
        if (region) {
            document.getElementById("time").textContent = dayjs().tz(region).format("HH:mm:ss");
            document.getElementById("day").textContent = 
            dayjs().tz(region).format("dddd") + 
            ", " + 
            dayjs().tz(region).format("D") +
            " " +
            dayjs().tz(region).format("MMMM") +
            ", " +
            dayjs().tz(region).format("YYYY")
        }
    },1000);
    
    jspopup();
}