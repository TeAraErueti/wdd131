const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById("currentyear").innerText = currentYear;
document.getElementById('lastModified').innerText = document.lastModified;

const Button = document.querySelector('#menu');
const navigation = document.querySelector('.navMenu');

Button.addEventListener('click', () => {
    navigation.classList.toggle('show');
    Button.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Albuquerque New Mexico",
        location: "Albuquerque, New Mexico",
        dedicated: "2000, March, 5",
        area: 34000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-137883-wallpaper.jpg"
    },
    {
        templeName: "Anchorage Alaska",
        location: "Anchorage, Alaska",
        dedicated: "1999, January, 9",
        area: 11937,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/400x225/anchorage-temple-lds-253274-wallpaper.jpg"
    },
    {
        templeName: "Boise Idaho",
        location: "Boise, Idaho",
        dedicated: "1984, May, 25",
        area: 35325,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/400x250/1-Boise-Idaho-Temple-1968984.jpg"
    },
    {
        templeName: "San Antonio Texas",
        location: "San Antonio, Texas",
        dedicated: "2005, May, 22",
        area: 16800,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-antonio-texas/400x250/san-antonio-temple-lds-352484-wallpaper.jpg"
    },
    {
        templeName: "San Salvador El Salvador",
        location: "San Salvador, El Salvador",
        dedicated: "2011, August, 21",
        area: 27986,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-salvador-el-salvador/400x250/san-salvador-el-salvador-temple-lds-848547-wallpaper.jpg"
    },
];


templeCards(temples);
const homeHeader = document.querySelector('#homeHeader');

function templeCards(filteredTempleArray) {
    document.querySelector(".container").innerHTML = "";


    filteredTempleArray.map((temple) => {
        //Create temple card elements
        const tCard = document.createElement("div");
        tCard.classList = 'card';
        const templeCardName = document.createElement('h3');
        const templeCardLocation = document.createElement('p');
        const templeCardDedication = document.createElement('p');
        const templeCardArea = document.createElement('p');
        const templeCardImg = document.createElement('img');

        //Give attributes to img. Lazy loading
        templeCardImg.setAttribute("src", temple.imageUrl)
        templeCardImg.setAttribute("alt", `${temple.templeName} temple`)
        templeCardImg.setAttribute("width", "400px")
        templeCardImg.setAttribute("height", "225px")
        templeCardImg.setAttribute("loading", "lazy")

        //Assign content
        templeCardName.innerHTML = `${temple.templeName} Temple`;
        templeCardLocation.innerHTML = `Location: ${temple.location}`;
        const tDedicationDate = temple.dedicated.split(',');
        templeCardDedication.innerHTML = `Dedicated on: ${tDedicationDate[1]} ${tDedicationDate[2]}, ${tDedicationDate[0]}`;
        templeCardArea.innerHTML = `Temple area: ${temple.area.toLocaleString('en-US')} sq ft`;
        templeCardImg.innerHTML = temple.imageUrl;


        //Append child elements to temple card
        tCard.appendChild(templeCardName);
        tCard.appendChild(templeCardLocation);
        tCard.appendChild(templeCardDedication);
        tCard.appendChild(templeCardArea);
        tCard.appendChild(templeCardImg);

        const templeCardsFinal = document.querySelector('.container');
        templeCardsFinal.appendChild(tCard);

    })
}
function splitDate(date) {
    const newDate = date.split(',');
    return newDate;
}

const allTemples = document.querySelector('#allTemples')
const newTemples = document.querySelector('#newTemples');
const oldTemples = document.querySelector('#oldTemples');
const largeTemples = document.querySelector('#largeTemples');
const smallTemples = document.querySelector('#smallTemples');


allTemples.addEventListener("click", () => {
    templeCards(temples)
    homeHeader.textContent = "Home";
})

newTemples.addEventListener("click", () => {
    templeCards(temples.filter(temple => splitDate(temple.dedicated)[0] > "2000"))
    homeHeader.textContent = "New";
})

oldTemples.addEventListener("click", () => {
    templeCards(temples.filter(temple => splitDate(temple.dedicated)[0] < "1900"))
    homeHeader.textContent = "Old";
})

largeTemples.addEventListener("click", () => {
    templeCards(temples.filter(temple => temple.area > 90000))
    homeHeader.textContent = "Large";
})

smallTemples.addEventListener("click", () => {
    templeCards(temples.filter(temple => temple.area < 10000))
    homeHeader.textContent = "Small";
})
