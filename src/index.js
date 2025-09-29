const cardsList = document.querySelector('.content__main-list')
const searchInput = document.querySelector('.search__box #searchInput')
const searchInputButton = document.querySelector('.search__button')



const cardsArray = [
    {
        id: 0,
        title: 'Первый товар',
        price: '170',
        description: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        image: "./images/card-bg.jpg",
    },
    {
        id: 1,
        title: 'Второй товар',
        price: '171',
        description: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        image: "./images/card-bg.jpg",
    },
    {
        id: 2,
        title: 'Третий товар',
        price: '172',
        description: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        image: "./images/card-bg.jpg",
    },
    {
        id: 3,
        title: 'Четвертый товар',
        price: '173',
        description: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        image: "./images/card-bg.jpg",
    },
    {
        id: 4,
        title: 'Пятый товар',
        price: '174',
        description: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        image: "./images/card-bg.jpg",
    },
    {
        id: 5,
        title: 'Шестой товар',
        price: '175',
        description: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        image: "./images/card-bg.jpg",
    },
]

const filteredArray = (array, value) => {
    console.log(array);
    console.log(value);
    return array.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()) || item.price.includes(value))
}

searchInputButton.addEventListener('click', () => {
    render(filteredArray(cardsArray, searchInput.value))

})

const render = (array) => {
    cardsList.innerHTML = ''
    array.forEach(card => {
        cardsList.insertAdjacentHTML('beforeend',
            `
                <a href="./product.html" class="content__main-list-item">
                            <div class="content__main-list-item--img">
                                <img src="${card.image}" alt="">
                            </div>
                            <h5 class="content__main-list-item--title">${card.title}</h5>
                            <strong class="content__main-list-item--price">${card.price} ₽</strong>
                            <span class="content__main-list-item--description">${card.price}</span>
                            <span class="content__main-list-item--description">${card.date}</span>
                </a>
            `
        )
    })
}

render(cardsArray)

