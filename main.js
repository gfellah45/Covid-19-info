// global variables

const contries = [];
const card = document.querySelector('.card_body');
const elements = []
const hudCorfirm = document.querySelector('.hud_total');
const hudWorld = document.querySelector('.hud_total_recovered');
const hudDeaths = document.querySelector('.hud_total_deaths');
const pageUpdates = document.querySelector('#page-update');
const input = document.querySelector('#convid-19');



// this function gets the data from the api and display 
//  it to the user with the use of fetch api
// also this functions hold 90% of the pages functionalities
// it can be refactored thou
function getData(){

fetch("https://api.covid19api.com/summary")
.then(res => res.json())
.then(({Countries}) => {
    Countries.splice(0, 1);
    const result = Countries.map(element => {
        const {
            Country, 
            NewConfirmed, 
            TotalConfirmed, 
            NewDeaths, 
            TotalDeaths,
            NewRecovered,
            TotalRecovered
            } = element;

            return `<div class ="card" data-country="${Country}">
                    <span class ="name suna"> Country Name:  ${Country}</span>
                    <span class ="name"> New Confirm Cases:  ${NewConfirmed}</span>
                    <span class ="name"> Total Confirm case: ${TotalConfirmed}</span>
                    <span class ="name danger"> New Deaths:  ${NewDeaths}</span>
                    <span class ="name danger"> Total Confirm Deaths:   ${TotalDeaths}</span>
                    <span class ="name success"> New Recorvery:  ${NewRecovered}</span>
                    <span class ="name success">Total Recovery:  ${TotalRecovered}</span>
            </div>`;

    } ).join("");

    card.innerHTML = result;

    const confirm = Countries.reduce((acc, itr) => {
        return acc += parseFloat( itr.TotalConfirmed);
    }, 0);

    const recovered = Countries.reduce((acc, itr) => {
        return acc += parseFloat( itr.TotalRecovered);
    }, 0);
    
    const deaths = Countries.reduce((acc, itr) => {
        return acc += parseFloat( itr.TotalDeaths);
    }, 0);
    
    hudCorfirm.textContent = confirm.toLocaleString();
    hudWorld.textContent = recovered.toLocaleString();
    hudDeaths.textContent = deaths.toLocaleString();


    
   
    search(input)


  
   
}).catch(error => console.log(console.log(Error)));

}

function search(arg){
    arg.addEventListener('keyup', () => {
        
        
        const blocks = document.querySelectorAll('.card');
        blocks.forEach(ele => {
            const atrr = ele.getAttribute('data-country').toLowerCase();
            if(atrr.includes(input.value.toLowerCase())){
                ele.style.display = 'block'
            }else{
                ele.style.display ='none';
            }
        })

    })
}

// this function is responsible for updating page views
// it uses the live countapi to track this

pageViews = () => {
    fetch('https://api.countapi.xyz/update/covid19-liveupdates/gfellah45/?amount=1')
    .then( res => res.json())
    .then( num => {
        pageUpdates.innerHTML = num.value;
    })
    .catch( error => console.log(error))
}

getData();
pageViews();



