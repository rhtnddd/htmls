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
//검색한거 삭제
// document.getElementById('search-btn').addEventListener('click', function(){
//     const keyword = document.getElementById('search-input').value.trim()

//     const filtered = products.filter(item => item.title!==(keyword))

//     renderProducts(filtered)
// })
document.getElementById('search-btn').addEventListener('click', function(){
  const keyword = document.getElementById('search-input').value.trim()
  if(keyword==='')
  {
    alert('삼품명을 적어주세요.');
    return 0;
  }
  else if(products.some(item => item.title.includes(keyword)))
  {
    const filtered = products.filter(item => item.title.includes(keyword));
    renderProducts(filtered);
  }
  else
  {
    alert('상품이 존재하지 않습니다.');
    return 0;
  }
})

//가격순 정렬
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
      products.sort((a, b) => a.title.localeCompare(b.title));
      renderProducts(products);
      click1=0;
  }
  else{
      products.sort((a, b) => b.title.localeCompare(a.title));
      renderProducts(products);
  }
});


document.getElementById('add-product').addEventListener('click', () => {
    const titleInput = document.getElementById('new-title');
    const priceInput = document.getElementById('new-price');

    const newTitle = titleInput.value.trim();
    const newPrice = priceInput.value.trim();
    // 배열에 추가
    if(newTitle === '')
    {
      alert('상품명을 입력해주세요.');
      return 0;
    }
    if(newPrice === '')
    {
      alert('가격을 입력해주세요.');
      return 0;
    }
    else
    {
      if(products.some(item => item.title === newTitle))
      {
          const target = products.find(item => item.title === newTitle);
          if (target) {
            target.price = Number(newPrice);
            renderProducts(products);
          } else {
            products.push({ title: newTitle, price: Number(newPrice) });
            renderProducts(products);
          }
      }
      else
      {
        console.log('if문 통과');
        products.push({ title: newTitle, price: newPrice });
        renderProducts(products);
        titleInput.value = '';
        priceInput.value = '';
      }
    }
});
const input = document.getElementById('new-price');
    input.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9.]/g, '');
});
input.addEventListener('keydown', function (e) {
  const key = e.key;
  const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'];
  const isNumber = /^[0-9]$/.test(key);
  const isDot = key === '.';
  if (!isNumber && !allowedKeys.includes(key) && !isDot) {
    e.preventDefault();
  }
});