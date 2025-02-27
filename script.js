const searchInput = document.querySelector('#search-input');

clear = document.querySelector('.clear');

searchBtn = document.querySelector('#search-button');

let searchText ;

searchInput.addEventListener('keyup', (e) => {
    // console.log(e.key);
    searchText = searchInput.value;

    if(searchText.length >= 1){
        clear.style.display = 'block';
    } else {
        clear.style.display ='none';
    }

    // SEARCH WITH ENTER KEY

    if (e.key = 'Enter') {
        googleSearch();
    }
})

function googleSearch() {
    if(searchText.length >= 1) {
        let url = `http://google.com/search?q=${searchText}`;
        window.location = url

    }
}

clear.onclick = () => {
    clear.style.display = 'none';
    searchInput.value = '';
}

searchBtn.addEventListener('click', googleSearch)




