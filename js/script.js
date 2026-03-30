
const urlLinkGenre = "https://api.themoviedb.org/3/genre/movie/list";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjAzY2E3Mjk0NGZmNWMxMjc1MGIzNDNiYTUyZjcyMCIsIm5iZiI6MTc3NDM2NjA3My42ODUsInN1YiI6IjY5YzJhZDc5Mjg5YmNiNDI0ZmM3NjBiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ql5D0jTe5kqd5bIkw8oCyk2O6DOXsrCqo2b4VSomF2s"

const fetchData = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`
    }
}

const btnLogin = document.getElementById("btn-login");
const userProfile = document.getElementById("user-profile");

function loginUser() {
    btnLogin.classList.add("hidden");
    userProfile.classList.remove("hidden")
}

btnLogin.addEventListener("click", loginUser)

let pagesNumber = 1;
const currentPage = document.getElementById("current-page");
const btnLeft = document.getElementById("left-btn");
const btnRight = document.getElementById("right-btn");

btnLeft.addEventListener("click", function() {
    if(pagesNumber === 1) {
        return;
    }
    pagesNumber -= 1;
    currentPage.textContent = pagesNumber;
    getMovies();
});

btnRight.addEventListener("click", function() {
    pagesNumber += 1;
    currentPage.textContent = pagesNumber;
    getMovies()
});

const moviesSection = document.getElementById("movies-list");

async function getMovies() {
    try {
        const urlLink = `https://api.themoviedb.org/3/movie/popular?page=${pagesNumber}`;
        const response = await fetch(urlLink, fetchData);
        const data = await response.json();
        moviesSection.innerHTML ="";
        const movieData = data.results.slice(0, 10);

        const responseGenre = await fetch(urlLinkGenre,fetchData);
        const dataGenre = await responseGenre.json();
        const movieGenre = dataGenre.genres;
        console.log(movieGenre);

    for (const movie of movieData) {
        let genreMovies = "";
        for (const genre of movie.genre_ids) {
            for (const genres of movieGenre) {
                if(genre === genres.id) {
                    let nameGenre = `<span class=" gap-4 border rounded-full px-2 md:px-4 py-0 md:py-1 text-xs">${genres.name}</span>`;
                    genreMovies += nameGenre;
                    break;                  
                }
            }
            
        }
        const movieList = `
        <div class="bg-dark-card bg-transparent grid grid-cols-1 md:grid-cols-[190px_1fr] gap-5 px-4 md:px-10 py-4 text-center md:py-6 ">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Poster" class="w-[200px] md:w-full h-auto object-cover rounded-md mx-auto md:mx-0" >
            <div class="flex flex-col gap-2">
                <h3 class="font-bold text-center md:text-left text-[12px] md:text-xl">${movie.title}</h3>
                <div class="flex flex-wrap justify-center md:justify-start gap-2 text-xs md:text-sm py-1">
                ${genreMovies}
                </div>
                <div class="flex justify-center md:justify-start items-center gap-2">
                    <img src="../assets/icons/imdb-logo.png" alt="imdb logo" class="w-[30px] h-[20px] md:w-[40px] md:h-[18px] ">
                    <p class="text-[12px] md:text-[15px]">${movie.vote_average.toFixed(1)}</p>
                    <img src="../assets/icons/star-icon.png" alt="star logo" class="w-[10px] md:w-[20px] ">
                </div>
                <p class="py-1 px-4 text-center md:text-left md:px-0 line-clamp-3 text-xs md:text-sm text-gray-300">${movie.overview}</p>
                <div class="flex flex-col justify-center items-center md:items-start md:justify-start md:flex-row md:px-0 gap-2 py-2">
                    <button class="px-2 md:px-6 py-2 text-xs md:text-sm rounded-full  border  bg-white text-[#000000] font-semibold">VIEW DETAILS</button>
                    <button data-id="${movie.id}" class="btn-watchlist rounded-full text-xs md:text-sm border px-3 md:px-6 py-2 font-semibold">ADD TO WATCHLISTS</button>
                </div>
            </div>

        </div>`
        moviesSection.innerHTML += movieList;
    };
    
    } catch (error) {
        console.error(error);
    };

}

getMovies();