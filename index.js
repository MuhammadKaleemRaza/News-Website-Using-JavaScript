
//the api key from the news api
let apiKey = '6fdbe35093ac2b9f8cfbef9b6c1b100d'

let card = document.querySelector('.card')

//making the AJAX request
let request  = new XMLHttpRequest();

request.open('GET', `https://gnews.io/api/v4/top-headlines?token=${apiKey}`)

request.onload = function() {

    let response = JSON.parse(this.response);
    let newsArticles = response.articles;
    let htmlNews = '';
    newsArticles.forEach((element, index) => {
            let news = `<img src="${element['image']}" class="card-img-right" alt="...">
            <div class="card-body"> 
                <h5 class="card-title">${index + 1}: ${element['title']}</h5>
                <p class="card-text">${element['description']}</p>
                <a href="${element['url']}" class="btn btn-danger" target=_blank>Read More..</a>
                <h6 class='card-text my-4'>Author: ${element['source']['name']}</h6>
            </div>`;

            htmlNews += news;
            card.innerHTML = htmlNews;
        });

}


//send the request
request.send();
