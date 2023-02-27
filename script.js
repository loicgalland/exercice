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

function generateHotel(establishments){
    selectHotelCardRow().innerHTML = ""
    establishments.forEach(establishment => {
        const hotelContainer = createCardContainer(); 
        const hotelCard = createCard();
        const bodyHotelCard = createCardBody();
    
        selectHotelCardRow().appendChild(hotelContainer);
        hotelContainer.appendChild(hotelCard);
        hotelCard.appendChild(createCardImage());
        hotelCard.appendChild(bodyHotelCard);
        bodyHotelCard.appendChild(createCardTitle(establishment.id));
        bodyHotelCard.appendChild(createCardDescription(establishment.title));
        bodyHotelCard.appendChild(createCardNote(establishment.userId));
    });
}

generateHotel(establishments);

// Recherche via input 
const inputValidCheckedBar = document.querySelector(".valid-check-bar")
inputValidCheckedBar.addEventListener("click", function(){
    const inputSearchBar = document.querySelector(".search-bar")
    const hotelIWant = inputSearchBar.value
    const filtredHotels = establishments.filter(function(establishments){
        return establishments.title.indexOf(hotelIWant) !== -1
    })
    generateHotel(filtredHotels)
})

// Refresh de la page  
const inputAnnulCheckBar = document.querySelector(".annul-check-bar")
inputAnnulCheckBar.addEventListener("click", function(){
    generateHotel(establishments)
})

// Fonction qui ajoute un hotel à la liste (Marche pas 😞)
function addNewHotel(){
    const hotelForm = document.querySelector(".form-add-hotel")
    hotelForm.addEventListener("submit", function(event){
        event.preventDefault()
        const hotel ={
            id: event.target.querySelector("[name=hotel-id").value,
            title: event.target.querySelector("[name=hotel-description").value,
        }
        establishments.unshift(hotel)
        addNewHotel()
        generateHotel()
    })
}



console.log(establishments)