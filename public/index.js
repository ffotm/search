const medicines = [{
        id: 1,
        name: "Paracetamol",
        arabicName: "باراسيتاموم",
        price: 150,
        category: "مسكن الالم",
        inStock: true,
        prescription: false
    },
    {
        id: 2,
        name: "Amoxicillin",
        arabicName: "أموكسيسيلين",
        price: 200,
        category: "مضاد حيوي",
        inStock: true,
        prescription: true
    },
    {
        id: 3,
        name: "Vitamin D3",
        arabicName: "فيتامين د٣",
        price: 750,
        category: "فيتامينات",
        inStock: true,
        prescription: false
    },
    {
        id: 4,
        name: "Omeprazole",
        arabicName: "أوميبرازول",
        price: 550,
        category: "تسهيل الهضم",
        inStock: false,
        prescription: true
    },
    {
        id: 5,
        name: "Cetirizine",
        arabicName: "سيتريزين",
        price: 300,
        category: "الحساسية",
        inStock: true,
        prescription: false
    },
    {
        id: 6,
        name: "Ibuprofen",
        arabicName: "ايبوبروفي",
        price: 200,
        category: "مسكن الالم",
        inStock: true,
        prescription: false
    }, {
        id: 7,
        name: "Metformin",
        arabicName: "ميتفورمين",
        price: 300,
        category: "علاج السكري",
        inStock: true,
        prescription: true
    },
    {
        id: 9,
        name: "Loratadine",
        arabicName: "لوراتادين",
        price: 120,
        category: "مضاد حساسية",
        inStock: true,
        prescription: false
    },
    {
        id: 10,
        name: "Salbutamol",
        arabicName: "سالبوتامول",
        price: 200,
        category: "علاج الربو",
        inStock: true,
        prescription: false
    }, {
        id: 11,
        name: "Losartan",
        arabicName: "لوسارتان",
        price: 300,
        category: "علاج ضغط الدم",
        inStock: true,
        prescription: true
    },
    {
        id: 12,
        name: "Aspirin",
        arabicName: "أسبرين",
        price: 100,
        category: "مميع للدم",
        inStock: true,
        prescription: false
    },
    {
        id: 13,
        name: "Gaviscon",
        arabicName: "جافيسكون",
        price: 210,
        category: "مضاد حموضة",
        inStock: true,
        prescription: false
    },
    {
        id: 14,
        name: "Augmentin",
        arabicName: "أوجمنتين",
        price: 450,
        category: "مضاد حيوي",
        inStock: true,
        prescription: true
    },
    {
        id: 15,
        name: "Efferalgan",
        arabicName: "إيفيرالغان",
        price: 130,
        category: "مسكن وخافض للحرارة",
        inStock: true,
        prescription: false
    },
    {
        id: 16,
        name: "Doliprane",
        arabicName: "دوليبران",
        price: 150,
        category: "مسكن وخافض للحرارة",
        inStock: true,
        prescription: false

    },




    {
        id: 17,
        name: "Nurofen",
        arabicName: "نيروفين",
        price: 220,
        category: "مسكن ومضاد التهاب",
        inStock: true,
        prescription: false
    },
    {
        id: 18,
        name: "Spiramycin",
        arabicName: "سبيراميسين",
        price: 450,
        category: "مضاد حيوي",
        inStock: true,
        prescription: true
    },
    {
        id: 19,
        name: "Fucidin",
        arabicName: "فيوسيدين",
        price: 280,
        category: "مضاد حيوي موضعي",
        inStock: true,
        prescription: true
    },
    {
        id: 20,
        name: "Ciprofloxacin",
        arabicName: "سيبروفلوكساسين",
        price: 400,
        category: "مضاد حيوي",
        inStock: true,
        prescription: true
    },
    {
        id: 21,
        name: "Euphylline",
        arabicName: "إيوفيللين",
        price: 320,
        category: "موسع للقصبات",
        inStock: true,
        prescription: true
    },
    {
        id: 22,
        name: "Rennie",
        arabicName: "ريني",
        price: 180,
        category: "مضاد حموضة",
        inStock: true,
        prescription: false
    }, {
        id: 23,
        name: "Smecta",
        arabicName: "سميكتا",
        price: 160,
        category: "مضاد إسهال",
        inStock: true,
        prescription: false
    },
    {
        id: 24,
        name: "Maalox",
        arabicName: "مالوكس",
        price: 200,
        category: "مضاد حموضة",
        inStock: true,
        prescription: false
    },
    {
        id: 25,
        name: "Flagyl",
        arabicName: "فلاجيل",
        price: 250,
        category: "مضاد طفيليات وبكتيريا",
        inStock: true,
        prescription: true
    },
    {
        id: 26,
        name: "Aerius",
        arabicName: "أيريوس",
        price: 270,
        category: "مضاد حساسية",
        inStock: true,
        prescription: false
    },
    {
        id: 27,
        name: "Zyrtec",
        arabicName: "زيرتيك",
        price: 260,
        category: "مضاد حساسية",
        inStock: true,
        prescription: false
    },
    {
        id: 28,
        name: "Telfast",
        arabicName: "تلفاست",
        price: 280,
        category: "مضاد حساسية",
        inStock: true,
        prescription: false
    },
    {
        id: 29,
        name: "Tramal",
        arabicName: "ترامال",
        price: 500,
        category: "مسكن قوي",
        inStock: true,
        prescription: true
    },
    {
        id: 30,
        name: "Morphine",
        arabicName: "مورفين",
        price: 1000,
        category: "مسكن أفيوني",
        inStock: true,
        prescription: true
    },
    {
        id: 31,
        name: "Dafalgan",
        arabicName: "دافالغن",
        price: 180,
        category: "مسكن وخافض للحرارة",
        inStock: true,
        prescription: false
    },
    {
        id: 32,
        name: "Solupred",
        arabicName: "سولوبريد",
        price: 340,
        category: "كورتيكوستيرويد",
        inStock: true,
        prescription: true
    }, {
        id: 33,
        name: "Amoxil",
        arabicName: "أموكسيل",
        price: 200,
        category: "مضاد حيوي",
        inStock: true,
        prescription: true
    },
    {
        id: 34,
        name: "Xanax",
        arabicName: "زانكس",
        price: 600,
        category: "مهدئ للقلق",
        inStock: true,
        prescription: true
    },
    {
        id: 35,
        name: "Lexomil",
        arabicName: "ليكسوميل",
        price: 550,
        category: "مهدئ للقلق",
        inStock: true,
        prescription: true
    }, {
        id: 36,
        name: "Spasfon",
        arabicName: "سباسفون",
        price: 180,
        category: "مضاد تقلصات",
        inStock: true,
        prescription: false
    },
    {
        id: 37,
        name: "Celestene",
        arabicName: "سيليستين",
        price: 270,
        category: "كورتيكوستيرويد",
        inStock: true,
        prescription: true
    },


];

let cart = new Map();
let selectedProducts = 0; 
function updateCartSummary() {
    const itemCount = document.getElementById('itemCount');
    const totalPrice = document.getElementById('totalPrice');
    const confirmBtn = document.getElementById('confirmBtn');
    let bottomBar = document.getElementById("bottombar");
    const totalItems = Array.from(cart.values()).reduce((sum, qty) => sum + qty, 0);
    bottomBar.style.display = totalItems > 0 ? "flex" : "none";

    let total = 0,
        count = 0;

    cart.forEach((quantity, medicine) => {
        count += quantity;
        total += medicine.price * quantity;
    });

    itemCount.textContent = count;
    totalPrice.textContent = `${total} DA`;
    confirmBtn.disabled = count === 0;
}


function goToCart() {
    sessionStorage.setItem("cartData", JSON.stringify(Array.from(cart.entries())));
    window.location.href = "confirmation/cart.html"; 
}


function toggleMedicineInCart(medicine, card) {
    if (!medicine.inStock) {
        alert("لا يوجد");
        return;
    }

    if (!cart.has(medicine)) {
        cart.set(medicine, 1);
        card.classList.add('selected');
    }

    updateCartSummary();
}

function updateQuantity(medicine, change, card) {
    if (cart.has(medicine)) {
        let newQuantity = cart.get(medicine) + change;

        if (newQuantity <= 0) {
            cart.delete(medicine);
            card.classList.remove('selected');
        } else {
            cart.set(medicine, newQuantity);
        }
    } else if (change > 0) {
        cart.set(medicine, 1);
        card.classList.add('selected');
    }

   
    const quantitySpan = card.querySelector('.quantity');
    quantitySpan.textContent = cart.get(medicine) || 0;

   
    const minusButton = card.querySelector('.minus');
    minusButton.style.display = cart.get(medicine) > 0 ? 'inline-block' : 'none';

    updateCartSummary();
}


function renderProducts(filteredMeds = medicines) {
    const productsGrid = document.getElementById('productsGrid');

    if (filteredMeds.length === 0) {
        productsGrid.innerHTML = '<p class="text-muted">لا توجد نتائج مطابقة.</p>';
        return;
    }

    productsGrid.innerHTML = filteredMeds.map(medicine => `
                <div class="product-card ${cart.has(medicine) ? 'selected' : ''}" data-id="${medicine.id}">
                    <div class="cart-quantity">
                        <button class="quantity-btn minus">-</button>
                        <span class="quantity">${cart.get(medicine) || 1}</span>
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <div class="product-header">
                        <div class="product-title">
                            <div class="product-name">${medicine.name}</div>
                            <div class="product-name-ar">${medicine.arabicName}</div>
                        </div>
                        <svg class="pill-icon" viewBox="0 0 24 24">
                            <path d="M4.5 12.5l8-8a4.95 4.95 0 117 7l-8 8a4.95 4.95 0 11-7-7z" stroke="currentColor" fill="none" stroke-width="2"/>
                        </svg>
                    </div>
                    <div>
                        <span class="badge ${medicine.prescription ? 'badge-prescription' : 'badge-otc'}">
                            ${medicine.prescription ? 'وصفة طبية مطلوبة' : 'دون وصفة طبية'}
                        </span>
                    </div>
                    <div class="product-category p-2">الصنف: ${medicine.category}</div>
                    <div class="product-footer">
                        <div class="product-price" >${medicine.price} da</div>
                        <span class="badge ${medicine.inStock ? 'badge-stock' : 'badge-out'}">
                            ${medicine.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>
                </div>
            `).join('');




    document.querySelectorAll('.product-card').forEach(card => {
        const medicine = medicines.find(m => m.id == card.dataset.id);

        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('quantity-btn')) {
                toggleMedicineInCart(medicine, card);
            }
        });

        card.querySelector('.minus').addEventListener('click', (e) => {
            e.stopPropagation();
            updateQuantity(medicine, -1, card);
        });

        card.querySelector('.plus').addEventListener('click', (e) => {
            e.stopPropagation();
            updateQuantity(medicine, +1, card);
        });
    });

}

function sortProducts(order) {

    filteredMeds = medicines;
    filteredMeds.sort((a, b) => {
        if (order === 'az') return a.name.localeCompare(b.name);
        if (order === 'za') return b.name.localeCompare(a.name);
        if (order === 'الثمن') return a.price - b.price;
    });

    renderProducts();
}

function lookfor() {
    const searchInput = document.querySelector('.search-area__med-keyword').value.trim();

    const filteredMeds = medicines.filter(med =>
        med.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        med.arabicName.includes(searchInput) ||
        med.category.toLowerCase().includes(searchInput.toLowerCase())
    );

    renderProducts(filteredMeds);
}



let selectedPayment = null;

function selectPayment(method) {
    selectedPayment = method;

  
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });

    
    document.getElementById(method).classList.add('selected');
}

function processPayment() {
    if (!selectedPayment) {
        alert("Please select a payment method before proceeding!");
        return;
    }

    alert(`Payment Successful! Method: ${selectedPayment.toUpperCase()}`);
    sessionStorage.removeItem("cartData");

    document.getElementById('confirmation-page').classList.remove('active');
    document.getElementById('success-page').classList.add('active');
}

function applyFilters() {
    const sortOrder = document.getElementById('sortOrder').value;
    sortProducts(sortOrder);
}






document.querySelector('.search-area__med-keyword').addEventListener('input', lookfor);
document.getElementById('sortOrder').addEventListener('change', () => applyFilters());



renderProducts();
