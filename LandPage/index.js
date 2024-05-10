
function searchPage() {
    window.location.href = "/LandPage/SearchPages/search.html";
}

const API_KEY = 'api_key=e81285cf23fe88bc9d855449471c3eac';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;
const searchURL = BASE_URL + '/search/movie?'+API_KEY;
const CREDIT_URL = BASE_URL+'/movie/693134/credits?'+API_KEY;


const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?${API_KEY}&language=en-US`,
    fetchNetflixOrignals :`${BASE_URL}/discover/tv?${API_KEY}&with_networks=213`,
   fetchActionMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?${API_KEY}&with_genres=99`
}


var title = document.querySelector('#title')
var release_date = document.querySelector('#release_date')
var genres = document.querySelector('#genres')
var vote_average = document.querySelector('#vote_average')
var overview = document.querySelector('#overview')
var poster_path = document.querySelector('#poster')
var cast = document.querySelector('#cast')
var original_language = document.querySelector('#original_language')
var director = document.querySelector('#director')
var row_posterLarge = document.querySelector('.row_posterLarge ')


function truncate(str,n) {
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
}
document.addEventListener('DOMContentLoaded',intro)

function intro() {
fetch(requests.fetchTrending).then((res)=>{
    return res.json();
}).then((data)=>{
const setMovie = data.results[Math.floor(Math.random()*data.results.length-1)]
         if(setMovie.title){
        title.innerText = setMovie.title;
        release_date.innerText = setMovie.release_date;
         }
         else{
            title.innerText = setMovie.name;
        release_date.innerText = setMovie.
        first_air_date;
         }
        vote_average.innerText = setMovie.vote_average;
        overview.innerText = setMovie.overview;
        poster_path.src = IMG_URL + setMovie.backdrop_path;
        original_language.innerText= setMovie.original_language;
        fetch(`https://api.themoviedb.org/3/movie/${setMovie.id}/credits?api_key=e81285cf23fe88bc9d855449471c3eac`)
    .then((res)=>{
        return res.json()
    }).then((data=>{
        const castL = data.cast;
        const castLimit = 10; 
        for(let i=0;i<castLimit;i++) {
            cast.innerText = cast.innerHTML + castL[i].name + ","
        }
    })) 
})
}

function Imprint(data){
    console.log(data)
    cast.innerText = "";
    if(data.title){
        title.innerText = data.title;
        release_date.innerText = data.release_date;
         }
         else{
            title.innerText = data.name;
        release_date.innerText = data.first_air_date;
         }
    // genres.innerText = data.genres.map(genre => genre.name).join(', ')
    vote_average.innerText = data.vote_average
    overview.innerText = data.overview
    poster_path.src = IMG_URL + data.backdrop_path
    
    original_language.innerText= data.original_language
    fetch(`https://api.themoviedb.org/3/movie/${data.id}/credits?api_key=e81285cf23fe88bc9d855449471c3eac`)
    .then((res)=>{
        return res.json()
    }).then((data=>{
        // console.log(data)
        const castL = data.cast;
        // console.log(castL)
        const castLimit = 3; 
        for(let i=0;i<castLimit;i++) {
            cast.innerText = cast.innerHTML + castL[i].name + ","
            // console.log(castL[i].name)
        }
    }))

}



fetch(requests.fetchNetflixOrignals).then((res) => {
    return res.json()
}).then((data) => {
    console.log(data)
    const container = document.querySelector('.container');

    const slider = document.createElement('div');
    slider.className = 'slider';
    container.appendChild(slider);

    const title = document.createElement('h2');
    title.className = 'slider_title';
    title.innerText = 'Netflix Originals';
    slider.appendChild(title);

    const imageList = document.createElement('div');
    imageList.className = 'image_list';
    slider.appendChild(imageList);

    for (let i = 0; i < 10; i++) {
        const movie = data.results[i];
        const { backdrop_path } = movie;
        const poster = document.createElement('img');
        poster.className = 'image_item';
        poster.src = IMG_URL + backdrop_path;
        poster.addEventListener('mouseover', () => {
            Imprint(movie);
        });
        imageList.appendChild(poster);
    }
});

fetch(requests.fetchTrending).then((res) => {
    return res.json()
}).then((data) => {
    const container = document.querySelector('.container');

    const slider = document.createElement('div');
    slider.className = 'slider';
    container.appendChild(slider);

    const title = document.createElement('h2');
    title.className = 'slider_title';
    title.innerText = 'Trending Now';
    slider.appendChild(title);

    const imageList = document.createElement('div');
    imageList.className = 'image_list';
    slider.appendChild(imageList);

    for (let i = 0; i < 10; i++) {
        const movie = data.results[i];
        const { backdrop_path } = movie;
        const poster = document.createElement('img');
        poster.className = 'image_item';
        poster.src = IMG_URL + backdrop_path;
        poster.addEventListener('mouseover', () => {
            Imprint(movie);
        });
        imageList.appendChild(poster);
    }
});
fetch(requests.fetchActionMovies).then((res) => {
    return res.json()
}).then((data) => {
    const container = document.querySelector('.container');

    const slider = document.createElement('div');
    slider.className = 'slider';
    container.appendChild(slider);

    const title = document.createElement('h2');
    title.className = 'slider_title';
    title.innerText = 'Action';
    slider.appendChild(title);

    const imageList = document.createElement('div');
    imageList.className = 'image_list';
    slider.appendChild(imageList);

    for (let i = 0; i < 10; i++) {
        const movie = data.results[i];
        const { backdrop_path } = movie;
        const poster = document.createElement('img');
        poster.className = 'image_item';
        poster.src = IMG_URL + backdrop_path;
        poster.addEventListener('mouseover', () => {
            Imprint(movie);
        });
        imageList.appendChild(poster);
    }
});

fetch(requests.fetchComedyMovies).then((res) => {
    return res.json()
}).then((data) => {
    const container = document.querySelector('.container');

    const slider = document.createElement('div');
    slider.className = 'slider';
    container.appendChild(slider);

    const title = document.createElement('h2');
    title.className = 'slider_title';
    title.innerText = 'Comedy';
    slider.appendChild(title);

    const imageList = document.createElement('div');
    imageList.className = 'image_list';
    slider.appendChild(imageList);

    for (let i = 0; i < 10; i++) {
        const movie = data.results[i];
        const { backdrop_path } = movie;
        const poster = document.createElement('img');
        poster.className = 'image_item';
        poster.src = IMG_URL + backdrop_path;
        poster.addEventListener('mouseover', () => {
            Imprint(movie);
        });
        imageList.appendChild(poster);
    }
});

fetch(requests.fetchHorrorMovies).then((res) => {
    return res.json()
}).then((data) => {
    const container = document.querySelector('.container');

    const slider = document.createElement('div');
    slider.className = 'slider';
    container.appendChild(slider);

    const title = document.createElement('h2');
    title.className = 'slider_title';
    title.innerText = 'Horror';
    slider.appendChild(title);

    const imageList = document.createElement('div');
    imageList.className = 'image_list';
    slider.appendChild(imageList);

    for (let i = 0; i < 10; i++) {
        const movie = data.results[i];
        const { backdrop_path } = movie;
        const poster = document.createElement('img');
        poster.className = 'image_item';
        poster.src = IMG_URL + backdrop_path;
        poster.addEventListener('mouseover', () => {
            Imprint(movie);
        });
        imageList.appendChild(poster);
    }
});
fetch(requests.fetchRomanceMovies).then((res) => {
    return res.json()
}).then((data) => {
    const container = document.querySelector('.container');

    const slider = document.createElement('div');
    slider.className = 'slider';
    container.appendChild(slider);

    const title = document.createElement('h2');
    title.className = 'slider_title';
    title.innerText = 'Romance';
    slider.appendChild(title);

    const imageList = document.createElement('div');
    imageList.className = 'image_list';
    slider.appendChild(imageList);

    for (let i = 0; i < 10; i++) {
        const movie = data.results[i];
        const { backdrop_path } = movie;
        const poster = document.createElement('img');
        poster.className = 'image_item';
        poster.src = IMG_URL + backdrop_path;
        poster.addEventListener('mouseover', () => {
            Imprint(movie);
        });
        imageList.appendChild(poster);
    }
});
fetch(requests.fetchDocumentaries).then((res) => {
    return res.json()
}).then((data) => {
    const container = document.querySelector('.container');

    const slider = document.createElement('div');
    slider.className = 'slider';
    container.appendChild(slider);

    const title = document.createElement('h2');
    title.className = 'slider_title';
    title.innerText = 'Documentaries';
    slider.appendChild(title);

    const imageList = document.createElement('div');
    imageList.className = 'image_list';
    slider.appendChild(imageList);

    for (let i = 0; i < 10; i++) {
        const movie = data.results[i];
        const { backdrop_path } = movie;
        const poster = document.createElement('img');
        poster.className = 'image_item';
        poster.src = IMG_URL + backdrop_path;
        poster.addEventListener('mouseover', () => {
            Imprint(movie);
        });
        imageList.appendChild(poster);
    }
});
