const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let myLeads = ["rahul", "sultan", "ranjit"];

inputBtn.addEventListener("click", ()=>{
    myLeads.push(inputEl.value);
    console.log(myLeads);
});

        let listItems = myLeads.map(lead => `<li>${lead}</li>`).join('');
        ulEl.innerHTML = listItems;

