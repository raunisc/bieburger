document.addEventListener("DOMContentLoaded", () => {
  // Opcional: coloque seu número com DDI/DDDs, ex: "5599999999999"
  const whatsappNumber = "5571999391758";

  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    const body = item.querySelector(".item-body") || item;
    const nameEl = item.querySelector(".item-name");
    const priceEl =
      item.querySelector(".item-price--discount") ||
      item.querySelector(".item-price");

    if (!body || !nameEl || !priceEl) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "buy-button";
    button.textContent = "Comprar pelo WhatsApp";

    button.addEventListener("click", () => {
      const name = nameEl.textContent.trim();
      const price = priceEl.textContent.trim();
      const message = `Olá! Quero pedir: *${name}* (${price}).`;

      const baseUrl = whatsappNumber
        ? `https://wa.me/${whatsappNumber}`
        : "https://wa.me/";
      const url = `${baseUrl}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    });

    body.appendChild(button);
  });
});