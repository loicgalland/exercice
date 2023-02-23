const response = await fetch("https://jsonplaceholder.typicode.com/albums");
const establishments = await response.json();

function createCardImage(){
    const hotelImage = document.createElement('img');
    hotelImage.src = 'https://picsum.photos/100/100';
    return hotelImage;
}

function selectHotelCardRow(){
    const hotelCardRow = document.querySelector(".render-card");
    return hotelCardRow;
}

for (let i = 0; i < establishments.length; i++) {
    const hotel = establishments[i];

    const hotelContainer = document.createElement("div");
    hotelContainer.classList.add('col-3', 'mb-3');

    const hotelCard = document.createElement("div");   
    hotelCard.classList.add('card', 'h-100');

    const bodyHotelCard = document.createElement("div");
    bodyHotelCard.classList.add('card-body');

    function createCardTitle(){
        const hotelName = document.createElement('h1');
        hotelName.innerText = hotel.id;
        hotelName.classList.add('card-title');
        return hotelName;
        }

    function createCardDescritpion(){
    const hotelDescription = document.createElement('p');
    hotelDescription.innerText = hotel.title;
    hotelDescription.classList.add('card-text');      
    return hotelDescription;
    }

    function createCardNote(){
    const hotelButton = document.createElement('button');
    hotelButton.innerText = hotel.userId;
    hotelButton.classList.add('btn', 'btn-primary');
    return hotelButton;
    }

    selectHotelCardRow().appendChild(hotelContainer);
    hotelContainer.appendChild(hotelCard);
    hotelCard.appendChild(createCardImage(i));
    hotelCard.appendChild(bodyHotelCard);
    bodyHotelCard.appendChild(createCardTitle());
    bodyHotelCard.appendChild(createCardDescritpion());
    bodyHotelCard.appendChild(createCardNote());
}
    

    
    