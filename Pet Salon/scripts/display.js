function displayCards(){
    let card="";
    //travel the array 
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card+=`
            <tr class="pet">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.ownerName}</td>
                <td>${pet.contactPhone}</td>
            </tr> 
            `;
    }

     console.log(card);
    //create the HTML template for the cards (This is the table above)
    // //append the template on tne html 
     document.getElementById("pets-table").innerHTML=card;
     
}


// //{/* <h5>${pet.name}</h5>
// <p>Age: ${pet.age}</p>
// <p>Gender: ${pet.gender}</p>
// <p>Service: ${pet.service}</p>
// <p>Owner: ${pet.ownerName}</p>
// <p>Contact Number: ${pet.contactPhone}</p>
// //</div> *///}