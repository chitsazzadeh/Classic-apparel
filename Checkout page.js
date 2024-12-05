window.onload = function() {
    const checkoutForm = document.getElementById('checkout-form');
    
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(event) {
            // Prevent form submission
            event.preventDefault();

            // Get form values
            const address = document.getElementById('address').value;
            const cardNumber = document.getElementById('card-number').value;
            const expiryDate = document.getElementById('expiry-date').value;
            const cvv = document.getElementById('cvv').value;
            const postalCode = document.getElementById('zip').value;

            // Validate address
            if (address.trim() === "") {
                alert('Please provide a valid address.');
                return;
            }

            // Validate card number (16 digits)
            if (!/^\d{16}$/.test(cardNumber)) {
                alert('Please enter a valid 16-digit card number.');
                return;
            }

            // Validate expiry date (MM/YY format)
            if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
                alert('Please enter a valid expiry date in MM/YY format.');
                return;
            }

            // Validate CVV (3 or 4 digits)
            if (!/^\d{3,4}$/.test(cvv)) {
                alert('Please enter a valid 3 or 4-digit CVV.');
                return;
            }

            // Validate postal code (5 or 6 digits)
            if (!/^\d{5,6}$/.test(postalCode)) {
                alert('Please enter a valid postal code (5 or 6 digits).');
                return;
            }

            // If all validations pass
            alert('Order successfully submitted!');
        });
    } else {
        console.error('Checkout form not found');
    }
};
