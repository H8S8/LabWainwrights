const wainwrightsList = document.querySelector('#wainwrights-list');
let allWainwrights;

const getAllWainwrights = async() => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    allWainwrights = await response.json();

    listWainwrights(allWainwrights);
}

const listWainwrights = (wainwrightsToDisplay) => {

    while(wainwrightsList.firstChild){
        wainwrightsList.removeChild(wainwrightsList.firstChild);
    }

    wainwrightsToDisplay.forEach((wainwright) => {
        wainwrightsList.appendChild(createWainwrightListItem(wainwright));
    });
}

const createWainwrightListItem = (wainwright) => {

    const newWainwright = document.createElement('li');
    newWainwright.id = wainwright.id;

    const name = document.createElement('p');
    name.id = "name";
    name.innerText = wainwright.name;
    newWainwright.appendChild(name);

    const heightMetres = document.createElement('p');
    heightMetres.id = "heightMetres";
    heightMetres.innerText = wainwright.heightMetres;
    newWainwright.appendChild(heightMetres);

    return newWainwright;

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const filterValue = event.target["filterProperty"].value;
    
    const filtered = allWainwrights.filter(wainwright => {
        return wainwright.name.toLowerCase().includes(filterValue.toLowerCase());
    });
    listWainwrights(filtered);

    event.target['filterProperty'].value = "";
});

getAllWainwrights();