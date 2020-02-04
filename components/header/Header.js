class Header{
  openShopingCard(){
    shoping.render();
  }
  render(count) {
      const html =`
      <div class='header-container'>
      <div class="header-counter" onclick="header.openShopingCard()";>🛹${count}</div>
      </div>
      `;
      ROOT_HEADER.innerHTML = html;
  }
}
let header = new Header();
let productCounter = localStorageUtils.getProducts();
header.render(productCounter.length);