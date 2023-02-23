const response = await fetch("https://jsonplaceholder.typicode.com/albums");
const establishments = await response.json();

for (let i = 0; i < establishments.length; i++) {
    const hotel = establishments[i];

    function createHotelImage(){
        const hotelImage = document.createElement('img');
        hotelImage.src = 'https://picsum.photos/100/100';
        return hotelImage;
    }

    function selectHotelCardRow(){
        const hotelCardRow = document.querySelector(".render-card");
        return hotelCardRow;
    }

    
        const hotelContainer = document.createElement("div");
        hotelContainer.classList.add('col-3', 'mb-3');
      

    
        const hotelCard = document.createElement("div");   
        hotelCard.classList.add('card', 'h-100');

 

        const bodyHotelCard = document.createElement("div");
        bodyHotelCard.classList.add('card-body');



    function createTitle(){
        const hotelName = document.createElement('h1');
        hotelName.innerText = hotel.id;
        hotelName.classList.add('card-title');
        return hotelName;
    }

    function createDescritpion(){
        const hotelDescription = document.createElement('p');
        hotelDescription.innerText = hotel.title;
        hotelDescription.classList.add('card-text');      
        return hotelDescription;
    }
    
    function createNote(){
        const hotelButton = document.createElement('button');
        hotelButton.innerText = hotel.userId;
        hotelButton.classList.add('btn', 'btn-primary');
        return hotelButton;
    }



    selectHotelCardRow().appendChild(hotelContainer);
    hotelContainer.appendChild(hotelCard);
    hotelCard.appendChild(createHotelImage());
    hotelCard.appendChild(bodyHotelCard);
    bodyHotelCard.appendChild(createTitle());
    bodyHotelCard.appendChild(createDescritpion());
    bodyHotelCard.appendChild(createNote());
}
    

    
    