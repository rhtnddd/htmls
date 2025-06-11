const products = [
  { title: '수박바', price: 60000 },
  { title: '와', price: 120000 },
  { title: '요맘떼 딸기', price: 30000 },
  { title: '거북알', price: 50000 }
];

function renderProducts(data) {
  const list = document.getElementById('product-list');
  list.innerHTML = ''; // 기존 상품 제거입니다

  data.forEach(item => {
    const card = `
      <div class="product-card">
        <h5>${item.title}</h5>
        <p>가격 : ${item.price}원</p>
      </div>
    `;
    list.insertAdjacentHTML('beforeend', card);
  });
}

// 페이지 로드시 초기 렌더링
renderProducts(products);


let click=0;
let click1=0;
document.getElementById('search-btn').addEventListener('click', function(){
    const keyword = document.getElementById('search-input').value.trim()

    const filtered = products.filter(item => item.title!==(keyword))

    renderProducts(filtered)
})


document.getElementById('sort-price').addEventListener('click', function () {
  click++;
  if(click===2)
  {
      products.sort((a, b) => a.price - b.price);
      renderProducts(products);
      click=0;
  }
  else{
      products.sort((a, b) => b.price - a.price);
      renderProducts(products);
  }
});

document.getElementById('sort-name').addEventListener('click', function () {
  click1++;
  if(click1===2)
  {
      products.sort((a, b) => a.title >= b.title);
      renderProducts(products);
      click1=0;
  }
  else{
      products.sort((a, b) => b.title >= a.title);
      renderProducts(products);
  }
});


document.getElementById('add-product').addEventListener('click', () => {
    const titleInput = document.getElementById('new-title');
    const priceInput = document.getElementById('new-price');

    // 배열에 추가
    if(titleInput!=='' && priceInput !=='')
    {
        const newTitle = titleInput.value.trim();
        const newPrice = parseInt(priceInput.value);
        products.push({ title: newTitle, price: newPrice });
        renderProducts(products);
        titleInput.value = '';
        priceInput.value = '';
    }
});