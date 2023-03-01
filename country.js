

const loadAllData = () =>{
    const  URL ='https://restcountries.com/v3.1/all'
    fetch(URL)
    .then(res =>res.json())
    .then(data => {
        showAllData(data.slice(0, 18));
        
    });
}

const showAllData = (countries) =>{
     //console.log(countries.name.common);
     const container = document.getElementById('countries-info');
     container.innerHTML ="";
      countries.forEach((countries)=>{

        const{flags, name, population, capital, subregion, cca2} = countries;
        const {png} = flags;
        const {common} = name;
        //console.log(countries.cca2);
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="card w-full bg-base-100 shadow-xl bg-red-100">
        <figure class="px-10 pt-10">
          <img class="w-full h-64 shadow-mg" src="${png}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-black">${common}</h2>
          <p>Capital: ${capital}, Location: ${subregion}<br>Population: ${population}</p>
          <label onclick="showSingleCountry('${cca2}')" class="btn btn-success" for="my-modal" class="btn">Details</label>
        </div>
      </div>
        `;
        container.appendChild(div);

    })
}

//countries.flags   , countries.name.

loadAllData('countries');

const showAllDataTogether =() =>{
  const  URL ='https://restcountries.com/v3.1/all'
  fetch(URL)
  .then(res =>res.json())
  .then(data => {
      showAllData(data);
      
  });
}

const showSingleCountry = (id) =>{
  const URL = `https://restcountries.com/v3.1/alpha/${id}`
  //console.log(URL)
  fetch(URL).then(res => res.json()).then(data => showSingleCountryModal(data[0]));

}

const showSingleCountryModal = (value) =>{
 //console.log(value.currencies.XAF.name);
  const container = document.getElementById('modal-info');
  const div = document.createElement('div')
  div.classList.add('modal')
  div.innerHTML = `
    <div class="modal-box">
    <img src="${value.flags.png}">
      <h3 class="font-bold text-lg">Welcome To ${value.name.common}</h3>
      <p>Capital: ${value.capital}</p>
      <p>Currency: ${value.currencies.XAF.name}</p>
      <div class="modal-action">
        <label for="my-modal" class="btn">Yay!</label>
      </div>
    </div>
  `; 
  container.appendChild(div);
}

showAllDataTogether();


