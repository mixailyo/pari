function newsInit() {
  const news = document.querySelector('.news');

  if (news) {
    const newsMore = document.querySelector('.news__more');

    newsMore.addEventListener('click', () => {
      news.classList.add('news--more');
    })
  }
}

export { newsInit }