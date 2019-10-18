const btnSearch = document.getElementById('btnSearch');
const divResult = document.getElementById('divResult');


btnSearch.addEventListener("click",getRepos);

async function getRepos()
{
    clear();
    const respository = document.getElementById('txtSearch').value;
    const url = "https://api.github.com/users/" + respository + "/repos";

    const response = await fetch(url);
    const result = await response.json();
    
    //console.log(result);

    result.forEach(i=>{

        const divTable = document.createElement('div');
        divTable.className = "style__divTable";
        divResult.appendChild(divTable);


        const itemList = document.createElement('li');
        itemList.textContent = i.name;
        itemList.className = "style__itemsList col-md-2";
        divTable.appendChild(itemList);
        divTable.appendChild(itemList);

        const line = document.createElement('hr');
        divTable.appendChild(line);

    });
}

function clear(){
    while(divResult.firstChild)
    {
        divResult.removeChild(divResult.firstChild)
    }
}
