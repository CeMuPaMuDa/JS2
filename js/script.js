const goods = [
    { title: "Pepperoni Pizza", price: 150 },
    { title: "Baked Pancakes", price: 50 },
    { title: "Avocado", price: 350 },
    { title: "Bunch of Orange", price: 250 },
];

const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map((item) => renderGoodsItem(item.title, item.price));
    document.querySelector(".goods-list").innerHTML = goodsList;
};

renderGoodsList(goods);