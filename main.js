const contries = [];
const card = document.querySelector('.card_body');
const elements = []
const hudCorfirm = document.querySelector('.hud_total');
const hudWorld = document.querySelector('.hud_total_recovered');
const hudDeaths = document.querySelector('.hud_total_deaths');
const pageUpdates = document.querySelector('#page-update');

const input = document.querySelector('#convid-19');




function getData(){


fetch("https://api.covid19api.com/summary")
.then(res => res.json())
.then(({Countries}) => {
    
    Countries.forEach(element => {
        contries.push(element);

        const {
            Country, 
            NewConfirmed, 
            TotalConfirmed, 
            NewDeaths, 
            TotalDeaths,
            NewRecovered,
            TotalRecovered
            } = element;

            
            const div = document.createElement("div");
            const p = document.createElement("p");
            const country = document.createElement("span");
            const newCornfirm = document.createElement("span");
            const TotalCornfirm = document.createElement("span");
            const newDeath = document.createElement("span");
            const totalDeath = document.createElement("span");
            const newReco = document.createElement("span");
            const totalReco = document.createElement("span");
            
            
            div.classList.add("card");
            
            div.setAttribute('data-country', Country)
            
            
            
            country.classList.add("name");
            country.classList.add("suna");
            newCornfirm.classList.add("name");
            TotalCornfirm.classList.add("name");
            newDeath.classList.add("name");
            newDeath.classList.add("danger");
            totalDeath.classList.add("name");
            totalDeath.classList.add("danger");
            newReco.classList.add("name");
            newReco.classList.add("success");
            totalReco.classList.add("name");
            totalReco.classList.add("success");
            
            country.textContent = `Country Name: ${Country}`;
            newCornfirm.textContent = `New Confirm case: ${NewConfirmed}`;  
            TotalCornfirm.textContent = `Total Confirm case: ${TotalConfirmed}`;  
            newDeath.textContent = `New Death: ${NewDeaths}`;  
            totalDeath.textContent = `Total Death: ${TotalDeaths}`;  
            newReco.textContent = `New Recovery: ${NewRecovered}`;  
            totalReco.textContent = `Total Recovery: ${TotalRecovered}`;  
            
            div.appendChild(country);
            div.appendChild(newCornfirm);
            div.appendChild(TotalCornfirm);
            div.appendChild(newDeath);
            div.appendChild(totalDeath);
            div.appendChild(newReco);
            div.appendChild(totalReco);


            card.appendChild(div);

            

    });
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


    
    input.addEventListener('keyup', () => {
        console.log(input.value);

        const blocks = document.querySelectorAll('.card');
        blocks.forEach(ele => {
            const atrr = ele.getAttribute('data-country').toLowerCase();
            if(atrr.includes(input.value)){
                ele.style.display = 'block'
            }else{
                ele.style.display ='none';
            }
        })

    })


  
   
}).catch(error => console.log(console.log(Error)));


}


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



