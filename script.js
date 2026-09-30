const products = [
  { id: 1, name: 'Woven Market Basket', sw: 'Kikapu cha Soko', type: 'Home & living', category: 'home', price: 1250, tag: 'Local pick', art: 'WEAVE' },
  { id: 2, name: 'Nairobi Sunrise Blend', sw: 'Mchanganyiko wa Nairobi', type: 'Food & drink', category: 'food', price: 980, tag: 'Bestseller', art: 'ROAST' },
  { id: 3, name: 'Clay & Calm Vase', sw: 'Kikapu cha Udongo', type: 'Home & living', category: 'home', price: 1850, tag: 'Handmade', art: 'CLAY' },
  { id: 4, name: 'Linen Ease Shirt', sw: 'Shati la Kitani', type: 'Style', category: 'style', price: 3200, tag: 'New', art: 'EASE' },
  { id: 5, name: 'Sunday Flower Drop', sw: 'Maua ya Jumapili', type: 'Services', category: 'services', price: 2400, tag: 'Popular', art: 'BLOOM' },
  { id: 6, name: 'Home Reset Session', sw: 'Usafishaji wa Nyumba', type: 'Services', category: 'services', price: 4500, tag: 'Book now', art: 'RESET' },
  { id: 7, name: 'Mango Chilli Jam', sw: 'Jamu ya Embe na Pilipili', type: 'Food & drink', category: 'food', price: 650, tag: 'Local pick', art: 'JAM' },
  { id: 8, name: 'Kitenge Daily Tote', sw: 'Mkoba wa Kitenge', type: 'Style', category: 'style', price: 1600, tag: 'New', art: 'TOTE' }
];

const translations = {
  en: { topMessage: 'Free delivery on orders over KSh 3,000 in Nairobi', mpesaReady: 'M-Pesa payments ready', searchPlaceholder: 'Search products, services...', cart: 'Cart', eyebrow: 'THE GOOD LIFE, DELIVERED', heroTitle: 'Good things,<br><em>close to home.</em>', heroText: 'Shop standout goods and book brilliant local services from people who know their craft.', shopNow: 'Shop now', howItWorks: 'How it works', heroNoteStrong: '12,000+ locals', heroNoteText: 'shop happily here', heroCaption: 'Fresh picks, happy homes', all: 'All picks', home: 'Home & living', style: 'Style', food: 'Food & drink', services: 'Services', curated: 'CURATED FOR YOU', discover: 'Discover your next favourite.', sortBy: 'Sort by', featured: 'Featured', priceLow: 'Price: low to high', priceHigh: 'Price: high to low', simple: 'SIMPLE BY DESIGN', easyTitle: 'From browsing<br>to <em>beautifully<br>sorted.</em>', stepOneTitle: 'Pick your thing', stepOneText: 'Find one-of-a-kind goods and people worth knowing.', stepTwoTitle: 'Pay your way', stepTwoText: 'Use M-Pesa for quick, secure checkout every time.', stepThreeTitle: 'Enjoy the good stuff', stepThreeText: 'Get it delivered or meet your local maker.', newsletterEyebrow: 'THE MARA NOTE', newsletterTitle: 'Small joys, sent weekly.', newsletterText: 'New makers, good ideas and the occasional very good deal.', emailPlaceholder: 'Your email address', join: 'Join us', footerText: 'Made for the everyday good life in Kenya.', yourBag: 'YOUR BAG', emptyCart: 'Your cart is waiting.', emptyCartText: 'Add a few good things to get started.', subtotal: 'Subtotal', deliveryNote: 'Delivery calculated at checkout', checkout: 'Checkout with M-Pesa', secure: 'Secure checkout', completeOrder: 'Complete your order.', checkoutText: "Enter your details and we'll send an M-Pesa prompt to your phone.", nameLabel: 'Full name', phoneLabel: 'M-Pesa phone number', locationLabel: 'Delivery location', paying: 'You are paying', payMpesa: 'Pay with M-Pesa', paymentSent: 'Payment prompt sent!', paymentSentText: 'Check your phone to complete the M-Pesa payment. Your order number is <strong>#MM-2048</strong>.', backToShop: 'Back to shopping', noResults: 'Nothing found yet.', tryAnother: 'Try another search or category.' },
  sw: { topMessage: 'Usafirishaji bure kwa oda za zaidi ya KSh 3,000 Nairobi', mpesaReady: 'Malipo ya M-Pesa yako tayari', searchPlaceholder: 'Tafuta bidhaa, huduma...', cart: 'Kikapu', eyebrow: 'MAISHA MAZURI, YAMEFIKISHWA', heroTitle: 'Vitu vizuri,<br><em>karibu nawe.</em>', heroText: 'Nunua bidhaa bora na uagize huduma nzuri kutoka kwa watu wanaojua kazi yao.', shopNow: 'Nunua sasa', howItWorks: 'Jinsi inavyofanya kazi', heroNoteStrong: 'Wakazi 12,000+', heroNoteText: 'wanafurahia kununua hapa', heroCaption: 'Bidhaa safi, nyumba zenye furaha', all: 'Bidhaa zote', home: 'Nyumba na maisha', style: 'Mitindo', food: 'Chakula na vinywaji', services: 'Huduma', curated: 'TUMECHAGUA KWA AJILI YAKO', discover: 'Gundua unachopenda.', sortBy: 'Panga kwa', featured: 'Maarufu', priceLow: 'Bei: chini hadi juu', priceHigh: 'Bei: juu hadi chini', simple: 'RAHISI KWA MUUNDO', easyTitle: 'Kutafuta<br>hadi <em>kupokea<br>kwa urahisi.</em>', stepOneTitle: 'Chagua unachopenda', stepOneText: 'Pata bidhaa za kipekee na watu wa kuaminika.', stepTwoTitle: 'Lipa kwa njia yako', stepTwoText: 'Tumia M-Pesa kwa malipo ya haraka na salama.', stepThreeTitle: 'Furahia bidhaa', stepThreeText: 'Fikishiwa au kukutana na mtengenezaji wako.', newsletterEyebrow: 'UJUMBE WA MARA', newsletterTitle: 'Furaha ndogo, kila wiki.', newsletterText: 'Watengenezaji wapya, mawazo mazuri na ofa nzuri.', emailPlaceholder: 'Barua pepe yako', join: 'Jiunge nasi', footerText: 'Imeundwa kwa maisha mazuri ya kila siku Kenya.', yourBag: 'KIKAPU CHAKO', emptyCart: 'Kikapu chako kinakusubiri.', emptyCartText: 'Ongeza vitu vizuri ili kuanza.', subtotal: 'Jumla ndogo', deliveryNote: 'Gharama ya usafirishaji itaonyeshwa wakati wa malipo', checkout: 'Lipa kwa M-Pesa', secure: 'Malipo salama', completeOrder: 'Kamilisha oda yako.', checkoutText: 'Weka maelezo yako na tutatuma ombi la M-Pesa kwa simu yako.', nameLabel: 'Jina kamili', phoneLabel: 'Nambari ya M-Pesa', locationLabel: 'Mahali pa kufikisha', paying: 'Unalipa', payMpesa: 'Lipa kwa M-Pesa', paymentSent: 'Ombi la malipo limetumwa!', paymentSentText: 'Angalia simu yako kukamilisha malipo ya M-Pesa. Nambari ya oda yako ni <strong>#MM-2048</strong>.', backToShop: 'Rudi kununua', noResults: 'Hakuna kilichopatikana.', tryAnother: 'Jaribu utafutaji au aina nyingine.' }
};

let language = 'en';
let activeCategory = 'all';
let cart = [];
const $ = (selector) => document.querySelector(selector);
const money = (number) => `KSh ${number.toLocaleString('en-KE')}`;

function renderProducts() {
  const query = $('#searchInput').value.trim().toLowerCase();
  const sort = $('#sortSelect').value;
  let visible = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const searchText = `${product.name} ${product.sw} ${product.type}`.toLowerCase();
    return matchesCategory && searchText.includes(query);
  });
  if (sort === 'low') visible.sort((a, b) => a.price - b.price);
  if (sort === 'high') visible.sort((a, b) => b.price - a.price);
  $('#productGrid').innerHTML = visible.map((product) => `<article class="product-card"><div class="product-visual"><span class="product-tag ${product.category === 'services' ? 'service-tag' : ''}">${product.tag}</span><div class="product-art"><span class="art-word">${product.art}</span></div></div><div class="product-info"><div class="product-type">${product.type}</div><h3>${language === 'en' ? product.name : product.sw}</h3><div class="price-row"><span class="price">${money(product.price)}</span><button class="add-button" data-add="${product.id}" aria-label="Add ${product.name}">+</button></div></div></article>`).join('');
  $('#emptyState').hidden = visible.length > 0;
}

function applyLanguage() {
  const copy = translations[language];
  document.documentElement.lang = language === 'en' ? 'en' : 'sw';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (copy[element.dataset.i18n]) element.innerHTML = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = copy[element.dataset.i18nPlaceholder];
  });
  $('#languageLabel').textContent = language === 'en' ? 'SW' : 'EN';
  renderProducts();
}

function renderCart() {
  const items = cart.map((id) => products.find((product) => product.id === id));
  const total = items.reduce((sum, item) => sum + item.price, 0);
  $('#cartCount').textContent = items.length;
  $('#cartTotal').textContent = money(total);
  $('#checkoutTotal').textContent = money(total);
  $('#cartItems').innerHTML = items.map((item, index) => `<div class="cart-row"><div class="cart-thumb">${item.art}</div><div class="cart-row-details"><h4>${language === 'en' ? item.name : item.sw}</h4><span>${item.type}</span><button class="remove-item" data-remove="${index}">${language === 'en' ? 'Remove' : 'Ondoa'}</button></div><span class="cart-row-price">${money(item.price)}</span></div>`).join('');
  $('#cartEmpty').hidden = items.length > 0;
  $('#cartFooter').hidden = items.length === 0;
}

function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2200); }
function openCart() { $('#cartDrawer').classList.add('open'); $('#drawerOverlay').classList.add('open'); $('#cartDrawer').setAttribute('aria-hidden', 'false'); }
function closeCart() { $('#cartDrawer').classList.remove('open'); $('#drawerOverlay').classList.remove('open'); $('#cartDrawer').setAttribute('aria-hidden', 'true'); }
function openCheckout() { if (!cart.length) return; closeCart(); $('#checkoutModal').classList.add('open'); $('#checkoutModal').setAttribute('aria-hidden', 'false'); }
function closeCheckout() { $('#checkoutModal').classList.remove('open'); $('#checkoutModal').setAttribute('aria-hidden', 'true'); }

document.addEventListener('click', (event) => {
  const addButton = event.target.closest('[data-add]');
  const removeButton = event.target.closest('[data-remove]');
  const categoryButton = event.target.closest('[data-category]');
  if (addButton) { cart.push(Number(addButton.dataset.add)); renderCart(); showToast(language === 'en' ? 'Added to your cart' : 'Imeongezwa kwenye kikapu'); }
  if (removeButton) { cart.splice(Number(removeButton.dataset.remove), 1); renderCart(); }
  if (categoryButton) { activeCategory = categoryButton.dataset.category; document.querySelectorAll('.category').forEach((button) => button.classList.toggle('active', button === categoryButton)); renderProducts(); }
});

$('#languageToggle').addEventListener('click', () => { language = language === 'en' ? 'sw' : 'en'; applyLanguage(); renderCart(); });
$('#searchInput').addEventListener('input', renderProducts);
$('#sortSelect').addEventListener('change', renderProducts);
$('#cartOpen').addEventListener('click', openCart);
$('#cartClose').addEventListener('click', closeCart);
$('#drawerOverlay').addEventListener('click', closeCart);
$('#checkoutOpen').addEventListener('click', openCheckout);
$('#checkoutClose').addEventListener('click', closeCheckout);
$('#checkoutModal').addEventListener('click', (event) => { if (event.target === $('#checkoutModal')) closeCheckout(); });
$('#checkoutForm').addEventListener('submit', (event) => { event.preventDefault(); $('#checkoutForm').hidden = true; $('#checkoutSuccess').hidden = false; cart = []; renderCart(); });
$('#successClose').addEventListener('click', closeCheckout);
$('#newsletterForm').addEventListener('submit', (event) => { event.preventDefault(); showToast(language === 'en' ? 'You are on the list!' : 'Umejiunga na orodha!'); event.target.reset(); });

document.addEventListener('keydown', (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('#searchInput').focus(); } if (event.key === 'Escape') { closeCart(); closeCheckout(); } });

renderProducts();
renderCart();
