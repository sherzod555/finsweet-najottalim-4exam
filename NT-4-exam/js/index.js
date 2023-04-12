const api_key = "5f9260ad6a88412ba74780e57f17cc1d";

fetch(
  `https://newsapi.org/v2/everything?q=tesla&from=2023-03-11&sortBy=publishedAt&apiKey=${api_key}`
)
  .then((response) => response.json())
  .then((data) => {
    const articles = data.articles;
    console.log(articles);

    // slice the array to get the first 3 elements
    const firstThree = articles.slice(0, 3);

    document.querySelector("#card-template").insertAdjacentHTML(
      "afterbegin",
      firstThree
        .map((blog) => {
          return `<div class="card">
          <div class="card_box">
            <img src="${blog.urlToImage}" class="main_card_img" alt="blog_img" />
            <p class="main_card_pub inter_font">By <span class="author_span">${blog.author}</span> | ${blog.publishedAt}</p>
            <p class="main_card_title sen_font">${blog.title}</p>
            <p class="main_card_desc inter_font">${blog.description}</p>
          </div>
          </div>`;
        })
        .join("")
    );
  })
  .catch((error) => console.error(error));
