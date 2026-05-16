const featuredImage = document.querySelector("#featured-product-image");
const featuredBenefits = document.querySelector("#featured-product-benefits");
const featuredSurface = document.querySelector("#featured-product-surface");
const featuredFragrance = document.querySelector("#featured-product-fragrance");
const featuredUsage = document.querySelector("#featured-product-usage");
const featuredCards = document.querySelectorAll(".featured-product-card");
const premiumHeader = document.querySelector("header.nav-glow");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");

if (featuredImage && featuredCards.length) {
  featuredCards.forEach((card) => {
    card.addEventListener("click", () => {
      featuredCards.forEach((item) => {
        item.classList.remove("is-active", "border-saloni-blue", "bg-white", "shadow-product");
        item.classList.add("border-slate-200", "bg-white/70");
        item.setAttribute("aria-selected", "false");
      });

      card.classList.add("is-active", "border-saloni-blue", "bg-white", "shadow-product");
      card.classList.remove("border-slate-200", "bg-white/70");
      card.setAttribute("aria-selected", "true");

      featuredImage.src = card.dataset.image;
      featuredImage.alt = card.dataset.alt;
      featuredBenefits.textContent = card.dataset.benefits;
      featuredSurface.textContent = card.dataset.surface;
      featuredFragrance.textContent = card.dataset.fragrance;
      featuredUsage.textContent = card.dataset.usage;
    });
  });
}

if (premiumHeader && mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = premiumHeader.classList.toggle("mobile-nav-open");
    mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    mobileMenuToggle.textContent = isOpen ? "Close" : "Menu";
  });

  premiumHeader.querySelectorAll("nav a, .header-cta").forEach((link) => {
    link.addEventListener("click", () => {
      premiumHeader.classList.remove("mobile-nav-open");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
      mobileMenuToggle.setAttribute("aria-label", "Open menu");
      mobileMenuToggle.textContent = "Menu";
    });
  });
}
