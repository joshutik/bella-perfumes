//EmailJS Script

  (function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
  })();

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value
    })
    .then(() => {
      document.getElementById("status").innerText = "✅ Message sent successfully!";
      document.getElementById("contactForm").reset();
    }, (err) => {
      document.getElementById("status").innerText = "❌ Failed to send message. Try again.";
      console.error("Error:", err);
    });
  });
</script>