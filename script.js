const response = await fetch("https://jsonplaceholder.typicode.com/albums");
const etablissements = await response.json();





      for (let i = 0; i < etablissements.length; i++) {
    

        const hotel = etablissements[i];

        const hotelImage = document.createElement('img');
        hotelImage.src = 'https://picsum.photos/100/100';
    
        const hotelCardRow = document.querySelector(".render-card");
        const hotelContainer = document.createElement("div");
        hotelContainer.classList.add('col-3', 'mb-3');
        const hotelCard = document.createElement("div");   
        hotelCard.classList.add('card', 'h-100');
        const bodyHotelCard = document.createElement("div");
        bodyHotelCard.classList.add('card-body');
    
        const nomHotel = document.createElement('h1');
        nomHotel.innerText = hotel.id;
        nomHotel.classList.add('card-title');
       
        const desciptionHotel = document.createElement('p');
        desciptionHotel.innerText = hotel.title;
        desciptionHotel.classList.add('card-text');
  
    
        const noteHotel = document.createElement('button');
        noteHotel.innerText = hotel.userId;
        noteHotel.classList.add('btn', 'btn-primary');
    
    
        hotelCardRow.appendChild(hotelContainer);
        hotelContainer.appendChild(hotelCard);
        hotelCard.appendChild(hotelImage);


        hotelCard.appendChild(bodyHotelCard);
        bodyHotelCard.appendChild(nomHotel);
        bodyHotelCard.appendChild(desciptionHotel);
        bodyHotelCard.appendChild(noteHotel);
    }
    

    
    