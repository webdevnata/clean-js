const inputSearch = document.querySelector('.search__input')
const drinkList = document.querySelectorAll('.search__drink-list__el')

const searchEngin = e => {
    const text = e.target.value.toLowerCase();

    drinkList.forEach(el => {
        if (el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })
};
inputSearch.addEventListener('keyup', searchEngin);

// THE SAME RESULT WITH Reg.Exp

// const filterList = () => {
//     drinkList.forEach(item => {
//         const match = new RegExp(inputSearch.value, 'i').test(item.textContent)
//         if (!match) {
//             item.style.display = 'none'
//         } else {
//             item.style.display = 'block'
//         }
//     })
// }
// inputSearch.addEventListener('keyup', filterList)