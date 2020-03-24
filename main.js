const contries = [];
const card = document.querySelector('.card_body');
const elements = []




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
            newCornfirm.classList.add("name");
            TotalCornfirm.classList.add("name");
            newDeath.classList.add("name");
            totalDeath.classList.add("name");
            newReco.classList.add("name");
            totalReco.classList.add("name");
            
            country.textContent = `Country Name: ${Country}`;
            newCornfirm.textContent = `New Confirm case: ${NewConfirmed}`;  
            TotalCornfirm.textContent = `Total Confirm case: ${TotalConfirmed}`;  
            newDeath.textContent = `New Death: ${NewDeaths}`;  
            totalDeath.textContent = `Total Death: ${TotalDeaths}`;  
            newReco.textContent = `New Recovery: ${NewRecovered}`;  
            totalReco.textContent = `Total Recovery: ${TotalRecovered}`;  
            
            div.appendChild(country)
            div.appendChild(newCornfirm)
            div.appendChild(TotalCornfirm)
            div.appendChild(newDeath)
            div.appendChild(totalDeath)
            div.appendChild(newReco)
            div.appendChild(totalReco)




            card.appendChild(div)

            
            

    });
   
}).catch(error => console.log(console.log(Error)));


}

function setData(){
    getData();
    const divs = document.querySelectorAll(".card")
    console.log(divs)

}


setData()


