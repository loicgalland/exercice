const response = await fetch("https://jsonplaceholder.typicode.com/albums");
const establishments = await response.json();

function createCardTitle(name){
    const hotelName = document.createElement('h1');
    hotelName.innerText = name;
    hotelName.classList.add('card-title');
    return hotelName;
}

function createCardDescription(description){
    const hotelDescription = document.createElement('p');
    hotelDescription.innerText = description;
    hotelDescription.classList.add('card-text');      
    return hotelDescription;
}

function createCardNote(note){
    const hotelButton = document.createElement('button');
    hotelButton.innerText = note;
    hotelButton.classList.add('btn', 'btn-primary');
    return hotelButton;
}
    
function createCardImage(){
    const hotelImage = document.createElement('img');
    hotelImage.src = 'https://picsum.photos/100/100';
    return hotelImage;
}

function selectHotelCardRow(){
    return document.querySelector(".render-card");
}

function createCardContainer(){
    const hotelContainer = document.createElement("div");
    hotelContainer.classList.add('col-3', 'mb-3');
    return hotelContainer;
}

function createCard(){
    const hotelCard = document.createElement("div");   
    hotelCard.classList.add('card', 'h-100');
    return hotelCard;
}

function createCardBody(){
    const bodyHotelCard = document.createElement("div");
    bodyHotelCard.classList.add('card-body');
    return bodyHotelCard;
}

function generateHotel(){
    for (let i = 0; i < establishments.length; i++) {
        const hotel = establishments[i];
        const hotelContainer = createCardContainer(); 
        const hotelCard = createCard();
        const bodyHotelCard = createCardBody();
    
        selectHotelCardRow().appendChild(hotelContainer);
        hotelContainer.appendChild(hotelCard);
        hotelCard.appendChild(createCardImage());
        hotelCard.appendChild(bodyHotelCard);
        bodyHotelCard.appendChild(createCardTitle(hotel.id));
        bodyHotelCard.appendChild(createCardDescription(hotel.title));
        bodyHotelCard.appendChild(createCardNote(hotel.userId));
    }
}

generateHotel();
    
const inputSearchBar = document.querySelector("#search-bar");
const inputValidCheckedBar = document.querySelector("#valid-check-bar");

const hotelIWant = inputSearchBar.value;
inputValidCheckedBar.addEventListener("click", function(hotelIWant){
    const filtredHotels = establishments.filter(function(establishments){
        return establishments.id = hotelIWant;
    })
})
    
    