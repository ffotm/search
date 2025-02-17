let selectedPaymentType = null; 
let chronicIllnessSelected = false;


function loadCart() {
    const cartData = JSON.parse(sessionStorage.getItem("cartData")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const confirmBtn = document.getElementById("confirm-btn");

    let total = 0;
    cartItemsContainer.innerHTML = '';

    if (cartData.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-message">Your cart is empty.</p>';
        confirmBtn.disabled = true; 
        cartTotal.textContent = '0.00';
        return;
    }

    cartData.forEach(([medicine, quantity], index) => {
        const itemTotal = medicine.price * quantity;
        total += itemTotal;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <div>
                    <h3>${medicine.name}</h3>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <div>
                    دج ${itemTotal.toFixed(2)}
                    <button class="delete-btn" onclick="removeFromCart(${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.755 20.283 4 8h16l-1.755 12.283A2 2 0 0 1 16.265 22h-8.53a2 2 0 0 1-1.98-1.717zM21 4h-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"/></svg>
                    </button>
                </div>
            </div>
        `;
    });

    cartTotal.textContent = total.toFixed(2);
    confirmBtn.disabled = false; 
}

function goToConfirmation() {
  
    const total = document.getElementById("cart-total").textContent;


    sessionStorage.setItem("cartData", JSON.stringify(getCartData()));
    sessionStorage.setItem("totalPrice", total);

   
    document.getElementById('cart-page').classList.remove('active');
    document.getElementById('confirmation-page').classList.add('active');
    document.getElementById('card-selection').classList.add('active'); // Show card selection
}




function getCartData() {
    return JSON.parse(sessionStorage.getItem("cartData")) || [];
}


function updateQuantity(index, change) {
    let cartData = getCartData();
    cartData[index][1] += change; 

    if (cartData[index][1] <= 0) {
        cartData.splice(index, 1); 
    }

    sessionStorage.setItem("cartData", JSON.stringify(cartData));
    loadCart(); 
}


function removeFromCart(index) {
    let cartData = getCartData();
    cartData.splice(index, 1);
    sessionStorage.setItem("cartData", JSON.stringify(cartData));
    loadCart(); 
}

function toggleCouponSection() {
    const couponSection = document.getElementById('coupon-section');
    const checkbox = document.getElementById('chronic-illness');
    if (checkbox.checked) {
        couponSection.classList.add('active');
    } else {
        couponSection.classList.remove('active');
    }
}


function selectCard(type) {
    document.getElementById('card-selection').classList.remove('active');

    if (type === 'military') {
        document.getElementById('military-validation').classList.add('active');
    } else if (type === 'shifa') {
        document.getElementById('shifa-validation').classList.add('active');
    } else {
        goToPaymentMethods(); 
    }
}


function validateMilitary() {
    document.getElementById('military-validation').classList.remove('active');
    goToPaymentMethods();
}


function validateShifa() {
    document.getElementById('shifa-validation').classList.remove('active');
    goToPaymentMethods();
}


function goToPaymentMethods() {
 
    const total = sessionStorage.getItem("totalPrice") || "0.00";

   
    document.getElementById("payment-total").textContent = `المبلغ الاجمالي: دج ${total}`;

    document.getElementById('payment-methods').classList.add('active');
}

function selectPaymentMethod(method) {

    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });


    event.currentTarget.classList.add('selected');


    document.querySelectorAll('.payment-form').forEach(form => {
        form.classList.remove('active');
    });

  
    document.getElementById(`${method}-form`).classList.add('active');
}

function processPayment() {

    const button = event.target;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    button.disabled = true;

    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Payment Successful';
        button.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';

    
        setTimeout(() => {
            alert('Payment processed successfully! Thank you for your payment.');
         
            resetForms();
        }, 1000);
    }, 2000);
}

function generateCashSlip() {
    const button = event.target;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    button.disabled = true;

    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Slip Generated';
        button.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';

        setTimeout(() => {
            alert('Cash payment slip has been generated. Please proceed to the counter.');
            resetForms();
        }, 1000);
    }, 1500);
}

function verifyInsurance() {

    const button = event.target;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
    button.disabled = true;

    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Insurance Verified';
        button.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';

   
        setTimeout(() => {
            alert('Insurance verified successfully! Your coverage has been applied.');
            resetForms();
        }, 1000);
    }, 2000);
}

function resetForms() {

    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });

    document.querySelectorAll('button').forEach(btn => {
        if (btn.innerHTML.includes('Successful') ||
            btn.innerHTML.includes('Generated') ||
            btn.innerHTML.includes('Verified')) {
            btn.innerHTML = btn.getAttribute('data-original-text') || 'Submit';
            btn.style.background = 'linear-gradient(135deg, #164A41, #4D774E)';
            btn.disabled = false;
        }
    });

 
    document.querySelectorAll('.payment-form').forEach(form => {
        form.classList.remove('active');
    });


    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
}


document.addEventListener('DOMContentLoaded', function() {

    const cardNumberInput = document.querySelector('input[placeholder="1234 5678 9012 3456"]');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
            let newValue = '';
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    newValue += ' ';
                }
                newValue += value[i];
            }
            e.target.value = newValue.substring(0, 19);
        });
    }

   
    const expiryInput = document.querySelector('input[placeholder="MM/YY"]');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }


    const cvvInput = document.querySelector('input[placeholder="123"]');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
        });
    }
});

document.addEventListener("DOMContentLoaded", loadCart);
