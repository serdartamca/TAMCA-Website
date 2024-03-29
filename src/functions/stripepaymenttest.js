document.addEventListener('DOMContentLoaded', function() {
  const stripe = Stripe('YOUR_PUBLISHABLE_KEY');
  const elements = stripe.elements();
  const form = document.getElementById('payment-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const amountInput = document.getElementById('amount');
  const payButton = document.getElementById('pay-button');

  form.addEventListener('submit', async function(event) {
      event.preventDefault();

      // Collect user data
      const name = nameInput.value;
      const email = emailInput.value;
      const amount = parseFloat(amountInput.value);

      // Create payment method
      const { paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement('card'),
          billing_details: {
              name: name,
              email: email
          }
      });

      // Log transaction details
      const transactionTime = new Date().toISOString();
      console.log('Transaction Time:', transactionTime);
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Amount:', amount);
      console.log('Payment Method:', paymentMethod);

      // Reset form
      form.reset();
  });
});
