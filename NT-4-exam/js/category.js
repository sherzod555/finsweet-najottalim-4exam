const api_key = "5f9260ad6a88412ba74780e57f17cc1d";

let pageSize = 10;
let page = 1;


const form = document.querySelector('#form');
const search = document.querySelector("#search");
const container = document.querySelector("#search_result");
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const currentPageEl = document.querySelector("#currentpage")

let news;

async function fetchData() {
  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${search.value}&sortBy=publishedAt&apiKey=${api_key}`)
    const data = await res.json();
    news = data;
  } catch (error) {
    console.error(error);
    alert(error);
  }
}

function renderData() {
    container.innerHTML="";

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentNews = news?.articles.slice(startIndex, endIndex);


    currentNews.forEach(article => {
      container.insertAdjacentHTML('beforeend', 
      `<div class="card">
            <div class="card_box">
                      <img src="${article.urlToImage}" class="cat_card_img" alt="img">
                          <div>
                              <p class="cat_card_name inter_font">${article.source.name}</p>
                              <p class="cat_card_title sen_font">${article.title}</p>
                              <p class="cat_card_desc inter_font">${article.description}</p>
                          </div>
                  </div>
            </div>`
      )
    });
}



form.addEventListener('submit', async (e)=> {
  e.preventDefault();
  await fetchData();
  page = 1;
  renderData();
})

nextBtn.addEventListener("click", ()=> {
  if (search.value.trim() == "") return;
  const totalPages = Math.ceil(news.articles.length / pageSize);
  const isLastPage = page === totalPages;
  if (isLastPage) return;

  page += 1;
  renderData();
  currentPageEl.textContent=page;
})

prevBtn.addEventListener("click", ()=> {
  if (search.value.trim() == "") return;
  if (page == 1) return;
  page-=1;
  renderData();
  currentPageEl.textContent=page;
})
