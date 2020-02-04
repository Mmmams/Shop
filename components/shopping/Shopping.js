class Shoping{
  shopingClose(){
    ROOT_SHOPING.innerHTML = " ";
  }

render(){
 const productStore =  localStorageUtils.getProducts();       
 let htmlCatalog = '';
 let sumCatalog = 0;
  CATALOG.forEach(({id, name, price}) => {
    if(productStore.indexOf(id) !== -1){
    htmlCatalog +=  `
    <tr>
    <td class='product_element__name'>${name}</td>
    <td class='product_element__price'>${price.toLocaleString()} BLR </td>
    </tr>
    `;
    sumCatalog += price;
}
});
const html = `
<div class = 'product_cotnainer'>
<div class='shoping_close' onclick='shoping.shopingClose()'> </div>
<table>
${htmlCatalog}
<tr>
<td  class='product_element__nameALL'>ALL PRICE:</td>
<td  class='product_element__priceALL'>${sumCatalog.toLocaleString()} BLR</td>
</tr>
</table>
</div>
`;
ROOT_SHOPING.innerHTML = html;
}    
}
const shoping = new Shoping();