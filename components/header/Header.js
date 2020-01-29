class Header{
  render(count) {
      const html =`
      <div class='header-container'>
      <div class='header-counter'>🛹${count}</div>
      </div>
      `
      ROOT_HEADER.innerHTML = html;
  }
}
let header = new Header();
let product_counter = localStorageUtils.getProducts();
header.render(product_counter.length);