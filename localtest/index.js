const stripe = require('stripe')('pk_test_51OsEQqDSgElixwQZmtp6HSlCbAXbUoFZ0Ypg93PfbTLvsOBRu0MOP9U7n2L4lmhczgyCLnGmhQxnJXWW5HN9c1mB00bw1jQTCf');

module.exports = async function (context, req) {
    try {
        if (req.method === "POST") {
            const token = req.body.stripeToken;
            const amount = parseFloat(req.body.amount) * 100; // Convert amount to cents
            const email = req.body.email;

            const charge = await stripe.charges.create({
                amount: amount,
                currency: 'usd',
                description: 'Donation',
                source: token,
                receipt_email: email
            });

            context.res = {
                status: 200,
                body: 'Payment successful'
            };
        } else {
            context.res = {
                status: 405,
                body: 'Method Not Allowed'
            };
        }
    } catch (error) {
        console.error(error);
        context.res = {
            status: 500,
            body: 'An error occurred'
        };
    }
};
