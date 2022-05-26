////////////////////////////////USO DE FETCH PARA LA GALERIA (API DE PEXEL con contenido de bicicleta)////////////////////////////////
let cards = ``
    const containerr = document.getElementById("imgg-container")
function getPhotos(images) {
   let i;
            images.map(image => {    
              cards = `
                     <a class="item">
                    <img src=${image.src.large} />
                    </a>`;
                    containerr.innerHTML += cards;
            }) 
 }
fetch("https://api.pexels.com/v1/search?query=bicycles",{
    headers: {
          Authorization: "563492ad6f9170000100000125d3b5db766145668c7b8ff7c3a600f0"
          }
})
.then(resp => {
           return resp.json()
})
.then(data => {
    getPhotos(data.photos);
})  
        