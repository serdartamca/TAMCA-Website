const express = require('express');
const stripe = require('stripe')('sk_test_51OsEQqDSgElixwQZjyDYjjxgtbDKG5AW0T2qVQxYK95PpfLMDTUoMxrcBKALUaxLxxtMXgLD3Zkk2tlnKARV36lM00okbG7C3y');

const app = express();
app.use(express.json());

// Endpoint to handle webhook events from Stripe
app.post('/webhook', async (req, res) => {
    const event = req.body;
    // Verify the event is from Stripe
    const stripeEvent = stripe.webhooks.constructEvent(
        req.body,
        req.headers['stripe-signature'],
        'whsec_mPd1ggYA78yYPP3BojiSCbsotU7SQrvl'
    );

    // Handle specific event types
    if (stripeEvent.type === 'payment_intent.succeeded') {
        const paymentIntent = stripeEvent.data.object;
        // Process the successful payment (e.g., generate invoice, send email)
        console.log('Payment succeeded:', paymentIntent);
    }

    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
