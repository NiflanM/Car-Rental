<!DOCTYPE html>
<html>
<head>
    <title>PayHere Checkout</title>
    <script src="https://www.payhere.lk/lib/payhere.js"></script>
</head>
<body>

<h2>Processing Payment...</h2>

<script>
payhere.onCompleted = function(orderId) {
    window.location.href = "/payhere/success?order_id=" + orderId;
};

payhere.onDismissed = function () {
    alert("Payment Cancelled");
};

payhere.onError = function (error) {
    alert(error);
};

var payment = {
    sandbox: true,
    merchant_id: "{{ $merchant_id }}",
    return_url: "{{ route('payhere.success') }}",
    cancel_url: "{{ route('payhere.success') }}",
    notify_url: "{{ route('payhere.notify') }}",

    order_id: "{{ $order_id }}",
    items: "Car Booking",
    amount: "{{ number_format($booking->total_price, 2, '.', '') }}",
    currency: "{{ $currency }}",

    hash: "{{ $hash }}",

    first_name: "{{ $booking->customer_name }}",
    last_name: "",
    email: "{{ $booking->email }}",
    phone: "{{ $booking->phone }}",
    address: "N/A",
    city: "Colombo",
    country: "Sri Lanka"
};

payhere.startPayment(payment);
</script>

</body>
</html>