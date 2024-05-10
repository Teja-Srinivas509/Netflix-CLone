const API_KEY = 'api_key=e81285cf23fe88bc9d855449471c3eac';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

// document.querySelectorAll('.sidebar-item').forEach(item => {
//     item.addEventListener('click', () => {
//         item.parentElement.classList.toggle('expanded');
//     });
// });

function searchPage() {
    window.location.href = "/LandPage/SearchPages/search.html";
}

function homePage() {
    window.location.href = "/LandPage/index.html";
}


// const btnr = document.querySelector('.btnr')
// document.querySelectorAll('.btnr').forEach(button => {
//     button.addEventListener('click', () => {
//         document.querySelector('.search').value += button.innerText;
//         getMovies()
//     });
// });
// const xButton = document.getElementById('x');
// xButton.addEventListener('click', () => {
//     const searchBox = document.getElementById('search');
//     const currentValue = searchBox.value;
//     searchBox.value = currentValue.substring(0, currentValue.length - 1);
//     getMovies(); 
// });
// const space = document.getElementById('space');
// space.addEventListener('click', () => {
//     const searchBox = document.getElementById('search');
//     const currentValue = searchBox.value;
//     searchBox.value = currentValue + " "
//     getMovies(); 
    
// });

document.querySelector('#search').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        const searchTerm = document.getElementById('search').value; 
        console.log(searchTerm)
        getMovies(searchTerm); 
    }
});

document.querySelector('#search1').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        const searchTerm1 = document.getElementById('search1').value; 
        console.log(searchTerm1)
        getMovies(searchTerm1); 
    }
});


const main = document.querySelector('.main')
const form = document.getElementById('form')
const search = document.getElementById('search')

function getMovies(value){
    if (value === undefined || value === null){
        
    }
    else{
    console.log(value)
    const url = searchURL+'&query='+value
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
       console.log(data)
    const container = document.querySelector('.container');
    container.innerHTML = '';
    showMovies(data.results);
    })
 }
}

    function showMovies(data){
        const container = document.querySelector('.container');
    
        const slider = document.createElement('div');
        slider.className = 'slider';
        container.appendChild(slider);
    
        const imageList = document.createElement('div');
        imageList.className = 'image_list';
        slider.appendChild(imageList);
    
        const movie = data[0]; 
    
        const { backdrop_path, title, release_date, vote_average, overview, original_language } = movie;
            
        const movieItem = document.createElement('div');
        movieItem.className = 'movie_item';
        imageList.appendChild(movieItem);
    
        const poster = document.createElement('img');
        poster.className = 'image_item';
        poster.src = IMG_URL + backdrop_path;
        movieItem.appendChild(poster);
    
        const details = document.createElement('div');
        details.className = 'details';
        movieItem.appendChild(details);

        const movieTitle = document.createElement('h3');
        movieTitle.innerText = title;
        details.appendChild(movieTitle);

        const releaseDate = document.createElement('p');
        releaseDate.innerText = `Release Date: ${release_date}`;
        details.appendChild(releaseDate);

        const voteAverage = document.createElement('p');
        voteAverage.innerText = `Vote Average: ${vote_average}`;
        details.appendChild(voteAverage);

        const movieOverview = document.createElement('p');
        movieOverview.setAttribute('id', 'overview');
        movieOverview.innerText = overview;
        details.appendChild(movieOverview);

        const originalLanguage = document.createElement('p');
        originalLanguage.innerText = `Original Language: ${original_language}`;
        details.appendChild(originalLanguage);
    }
    
    

