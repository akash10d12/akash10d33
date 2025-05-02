function viewProductDetails(name, description, image, price) {
    const url = `view-product.html?name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}`;
    window.open(url, "_blank");
  }
  
  function buyNow(name, price, image) {
    const url = `buy-now.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}`;
    window.open(url, "_blank");
  }
  <script>
  const gallery = document.getElementById("gallery");

  // ১ থেকে ৩৫ পর্যন্ত ছবির লুপ
  for (let i = 1; i = 35; i++) {
    const img = document.createElement("img");
    img.src = `image/AKASH${i}.jpg`;
    img.alt = `Product ${i}`;
    img.style.width = "200px";
    img.style.margin = "10px";
    img.style.borderRadius = "8px";
    gallery.appendChild(img);
  }
</script>
