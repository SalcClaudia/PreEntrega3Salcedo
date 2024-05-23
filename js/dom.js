const cardMenu = document.getElementById("menu-container");

function cookieCard(cookies) {

    const listMenu = document.createElement("div");
    listMenu.className = "listMenu";

    const cookieTitle = document.createElement("h4");
    cookieTitle.innerText = cookies.cookie;
    cookieTitle.className = "cookieTitle";

    const cookieImg = document.createElement("img");
    cookieImg.src = cookies.img;
    cookieImg.alt = "MonsterChip";
    cookieImg.className = "cookieImg";

    const cookiePrices = document.createElement("p");
    cookiePrices.innerText = `$${cookies.price}`;
    cookiePrices.className = "cookiePrices";

    const cookieText = document.createElement("p");
    cookieText.innerText = cookies.description;
    cookieText.className = "cookieText";

    const cookieButton = document.createElement("button");
    cookieButton.innerText = "Seleccionar"
    cookieButton.className = "cookieButton";
    cookieButton.onclick = () => addYourCookie(cookies.id);

    cardMenu.appendChild(cookieTitle);
    cardMenu.appendChild(cookieImg);
    cardMenu.appendChild(cookiePrices);
    cardMenu.appendChild(cookieText);
    cardMenu.appendChild(cookieButton);

    cardMenu.appendChild(listMenu);
}

cookieInventory.forEach(el => cookieCard(el));

const cardOrder = document.getElementsByClassName("order-container");
const products = document.getElementsByClassName("order-list");

function cartMenu(purchase) {

    const myCart = document.createElement("div");
    myCart.class = "myCart";

    const cookieSelected = document.createElement("p");
    cookieSelected.innerText = addYourCookie(purchase.id);
    cookieSelected.className = "cookieSelected";


    
    products.appendChild(cookieSelected);

    cardOrder.appendChild(myCart)
};







