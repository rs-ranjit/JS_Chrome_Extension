const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");

let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads);
}

tabBtn.addEventListener("click", ()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            myLeads.push(tabs[0].url);
            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            renderLeads(myLeads);
    });
});

deleteBtn.addEventListener("dblclick", ()=>{
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
});

inputBtn.addEventListener("click", ()=>{
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLeads(myLeads);

});

function renderLeads(leads){
    let listItems = leads.map(lead => `<li><a href="${lead}" target="_blank">${lead}</a></li>`).join('');
    ulEl.innerHTML = listItems;

//alternative of using map
// for(i=0;i<myLeads.length;i++){
//     const li = document.createElement("li")
//     li.textContent = myLeads[i];
//     ulEl.append(li);
// }

//another alternative

// let listItems = "";
// for(i=0;i<myLeads.length;i++){
//     listItems += "<li>" + myLeads[i] + "</li>";
//     console.log(typeof(listItems));
// }
//  ulEl.innerHTML = listItems;
}


