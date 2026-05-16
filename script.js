const navToggle = document.querySelector(".nav-toggle");
const header = document.querySelector(".site-header");

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const fadeElements = document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window) {
  const fadeObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  fadeElements.forEach((element) => fadeObserver.observe(element));
} else {
  fadeElements.forEach((element) => element.classList.add("is-visible"));
}

const whatsappPhone = "919527517078";

const products = [
  {
    slug: "solomax-scented-cleaner",
    name: "Solomax Scented Cleaner",
    category: "Floor Cleaners",
    image: "assets/products/solomax-scented-floor-cleaner.jpg",
    sizes: "1 L, 5 L, 35 L",
    description:
      "A scented floor and surface cleaner with safe formulation for marble, granite, vitrified tiles and other hard surfaces. It removes malodor, works as a disinfecting agent, and helps keep insects away.",
    directions: ["Use 50 to 100 ml in half a bucket of water to mop floors."],
    scents: "Rose, Sandalwood, Lemon, Mogra and Citronella",
  },
  {
    slug: "clean-white-liquid-soap",
    name: "Clean White Liquid Soap",
    category: "Others",
    image: "assets/products/clean-white-liquid-soap.jpg",
    sizes: "1 L pouch/bottle, 5 L, 35 L",
    description:
      "All-purpose liquid soap that is safe on hands and suitable for surfaces. It cleans without leaving stains or malodor and gives a polished after-effect.",
    directions: [
      "Use 20 to 25 ml in 1 L of water.",
      "Mix and clean the required surfaces or utensils, then rinse with water.",
    ],
  },
  {
    slug: "wash-out-toilet-cleaner",
    name: "Wash-Out Toilet Cleaner",
    category: "Bathroom",
    image: "assets/products/wash-out-toilet-cleaner.jpg",
    sizes: "200 ml, 1 L, 5 L, 35 L",
    description:
      "A thicker advanced toilet cleaner formulated to remove tough yellowish stains, eliminate unpleasant odor, and clean quickly without waiting time.",
    directions: [
      "Squeeze the required amount around the toilet bowl and under the rim.",
      "Brush and rinse wash with water.",
    ],
  },
  {
    slug: "safedi-liquid-detergent",
    name: "Safedi Liquid Detergent",
    category: "Laundry",
    image: "assets/products/safedi-liquid-detergent.jpg",
    sizes: "1/2 L, 1 L, 5 L, 35 L",
    description:
      "pH-balanced liquid detergent that is gentle on clothes and suitable for machine wash and bucket wash. It removes tough stains and odor, gives a fresh after-wash effect, and contains no caustic or soda.",
    directions: [
      "Apply a little detergent directly on dirty areas.",
      "Pour 1 cap for a regular machine load or bucket wash.",
      "Pour 2 caps for large or very dirty loads.",
    ],
  },
  {
    slug: "feelz-fabric-conditioner",
    name: "Feelz Fabric Conditioner",
    category: "Laundry",
    image: "assets/products/feelz-fabric-conditioner.jpg",
    sizes: "1/2 L, 1 L, 5 L, 35 L",
    description:
      "Fabric conditioner for long-lasting freshness and fragrance. It smoothens cloth fibres, makes clothes soft, helps retain colour, adds shine, and prevents dullness for longer.",
    directions: [
      "Bucket wash: pour half a cap into the bucket in the last rinse, soak up to 10 washed clothes, then remove and dry after 5 minutes.",
      "Machine wash: pour one full cap in the last rinse.",
      "Do not rinse or wash clothes in water after using the conditioner.",
    ],
  },
  {
    slug: "lespark-surface-cleaner",
    name: "Lespark Surface Cleaner",
    category: "Floor Cleaners",
    image: "assets/products/lespark-surface-cleaner.jpg",
    sizes: "1/2 L, 5 L, 35 L",
    description:
      "Surface cleaner with better cleaning and germ-kill action. It removes greasiness and cleans floors such as marble, kota stone, tiles and vinyl flooring.",
    directions: [
      "Use one capful in half a bucket of water, about 4 L.",
      "Gently mop the surface. No need to rinse.",
      "For dirty areas, use undiluted, apply on the area, leave for 10 minutes and rinse.",
    ],
    scents: "Rose and Lemon",
  },
  {
    slug: "super-glass-cleaner",
    name: "Super Glass Cleaner",
    category: "Others",
    image: "assets/products/super-glass-cleaner.jpg",
    sizes: "1/2 L, 5 L, 35 L",
    description:
      "Glass cleaner formulated to remove dirt, dust and scratch-causing particles while giving extra shine. Suitable for tabletops, mirrors, glass windows, fridge, oven, kitchen cabinets, furniture and car windows.",
    directions: [
      "Press the pump to spray a fine mist over the surface.",
      "Wipe with a clean dry cotton cloth for a sparkling effect.",
    ],
  },
  {
    slug: "shine-perfect-dishwash-gel",
    name: "Shine Perfect Dishwash Gel",
    category: "Kitchen",
    image: "assets/products/shine-perfect-dishwash-gel.jpg",
    sizes: "1/2 L, 1 L, 5 L, 35 L",
    description:
      "Dishwash active gel that is tough on kitchen soil and greasy stains while remaining gentle on hands. It cleans utensils with a fresh lime fragrance and helps remove bad odor.",
    directions: [
      "Take 1 teaspoon of dishwash active gel and mix it in 1 bowl of water.",
      "Dip the scrubber, squeeze to get powerful lather, scrub utensils, then rinse.",
    ],
  },
  {
    slug: "leo-power-concentrate-cleaner",
    name: "Leo Power Concentrate Cleaner",
    category: "Floor Cleaners",
    image: "assets/products/leo-power-concentrate-cleaner.jpg",
    sizes: "200 ml, 1/2 L, 1 L, 5 L, 35 L",
    description:
      "High-performance concentrated cleaner for floors and general hard-surface cleaning. It is an effective degreaser and grime remover that cleans, deodorizes, leaves a pine-like fresh scent, and works as a disinfecting agent.",
    directions: [
      "Dilute 50 to 100 ml in half a bucket of water.",
      "Gently mop the surface. No need to rinse with water.",
    ],
  },
  {
    slug: "super-floor-cleaner",
    name: "Super Floor Cleaner",
    category: "Floor Cleaners",
    image: "assets/products/super-floor-cleaner.jpg",
    sizes: "1/2 L, 1 L, 5 L, 35 L",
    description:
      "Floor cleaner for maintaining the original shine of marble, tiles, ceramic, mosaic, granite, kota and vinyl floors. It removes tough stains such as coffee, ketchup and oil while leaving a polished after-look.",
    directions: [
      "Use 50 to 100 ml in half a bucket of water, about 5 to 6 L.",
      "Scrub gently and rinse wash with water.",
    ],
  },
  {
    slug: "sparclean-domestic-bleach",
    name: "Sparclean Domestic Bleach",
    category: "Bathroom",
    image: "assets/products/sparclean-bleach.jpg",
    sizes: "1/2 L, 5 L, 35 L",
    description:
      "Domestic bleach solution with 5% sodium hypochlorite for disinfecting surfaces. It can be used for cleaning toilets, tiles, basins, faucets, whitening clothes and sanitizing clothes and toys.",
    directions: [
      "Use 50 ml in 2 L of water.",
      "Apply with a clean cloth or sponge on surfaces, mildly scrub, and rinse with plain water.",
      "Pay special attention to taps, soap holders and metal surfaces, then polish metal surfaces with a dry cloth.",
    ],
    caution: "Do not mix with other liquid cleaners or acid. Do not use on silks, woollens, nylons, coloured or delicate garments.",
  },
  {
    slug: "solo-white-bathroom-cleaner",
    name: "Solo White Bathroom Cleaner",
    category: "Bathroom",
    image: "assets/products/solo-white-bathroom-cleaner.jpg",
    sizes: "1 L, 5 L, 35 L",
    description:
      "Strong bathroom cleaner for dechoking faucets and cleaning tiles, including cleaning required at construction sites. It should be used with safety measures.",
    directions: ["Use with appropriate safety measures on bathroom tiles and faucet cleaning areas."],
  },
  {
    slug: "fresh-room-freshener",
    name: "Fresh Room Freshener",
    category: "Others",
    image: "assets/products/fresh-room-freshener.jpg",
    sizes: "1/2 L, 5 L, 35 L",
    description:
      "Room freshener range with bright, lively fragrances for home use. The hand-held spray can be used anytime to refresh curtains, sofa covers and indoor spaces.",
    directions: ["Press the pump to spray on curtains and sofa covers for a long-lasting effect."],
    scents: "Brute, Fulera, Charlie and Jasmine",
  },
  {
    slug: "fresh-clean-gentle-soap",
    name: "Fresh Clean Gentle Soap",
    category: "Others",
    image: "assets/products/fresh-clean-gentle-soap.jpg",
    sizes: "1/2 L, 1 L, 5 L, 35 L",
    description:
      "Perfumed ready-to-use liquid cleaner that gives long-lasting freshness and protection from illness-causing germs. It is safe and gentle on hands and supports everyday hygiene and general cleaning.",
    directions: ["Use as a ready-to-use perfumed liquid cleaner for everyday hand hygiene and general cleaning."],
  },
  {
    slug: "wash-out-bathroom-cleaner",
    name: "Wash-Out Bathroom Cleaner",
    category: "Bathroom",
    image: "assets/products/wash-out-bathroom-cleaner.jpg",
    sizes: "1/2 L, 5 L, 35 L",
    description:
      "Thick disinfecting bathroom cleaner for ultra-clean bathroom surfaces. It eliminates unpleasant odor, kills pathogens, and is suitable for tiles, taps, tubs, shower panels, ceramic surfaces, stainless steel and granite.",
    directions: [
      "Regular cleaning of bathroom floor and tiles: use 1.5 capfuls in half a bucket of water, about 4 L.",
      "Tough stains and sink: use undiluted, scrub gently and rinse.",
      "For disinfection, apply undiluted or diluted cleaner, leave for 5 minutes, then scrub gently and rinse.",
    ],
    caution: "Not to be used on aluminium, copper or brass surfaces.",
  },
];

const getProductUrl = (slug) => `/products/${encodeURIComponent(slug)}/`;

document.querySelectorAll(".buy-whatsapp[data-product]").forEach((button) => {
  const productName = button.dataset.product;
  const message = `Hello, I want to order ${productName} from Saloni Cleaning Products.`;
  button.href = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
});

document.querySelectorAll(".product-card[id]").forEach((card) => {
  const productName = card.querySelector("h2")?.textContent?.trim() || "product";
  const productUrl = getProductUrl(card.id);

  card.setAttribute("role", "link");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `View details for ${productName}`);

  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      return;
    }

    window.location.href = productUrl;
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = productUrl;
    }
  });
});

const filterButtons = document.querySelectorAll(".filter-button[data-filter]");
const productCards = document.querySelectorAll(".product-card[data-category]");
const applyProductFilter = (filter) => {
  filterButtons.forEach((item) => {
    const isActive = item.dataset.filter === filter;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });

  productCards.forEach((card) => {
    const shouldShow = filter === "all" || card.dataset.category === filter;
    card.classList.toggle("is-hidden", !shouldShow);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    applyProductFilter(filter);
  });
});

if (filterButtons.length && productCards.length) {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const defaultCategory = document.body.dataset.defaultCategory;
  const requestedCategory = category || defaultCategory;
  const hasCategory = [...filterButtons].some((button) => button.dataset.filter === requestedCategory);

  if (hasCategory) {
    applyProductFilter(requestedCategory);
    document.querySelector(".products-section")?.scrollIntoView({ block: "start" });
  }
}

const productDetail = document.querySelector("[data-product-detail]");

if (productDetail) {
  const params = new URLSearchParams(window.location.search);
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const pathSlug = pathParts[0] === "products" && pathParts.length === 2 ? pathParts[1] : "";
  const slug = productDetail.dataset.productSlug || params.get("product") || pathSlug || "";
  const product = products.find((item) => item.slug === slug);

  if (product) {
    const message = `Hello, I want to order ${product.name} from Saloni Cleaning Products.`;
    const directions = product.directions
      ? `<div class="detail-panel">
          <h2>Direction For Use</h2>
          <ul class="detail-list">
            ${product.directions.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>`
      : "";
    const scents = product.scents
      ? `<div class="detail-panel">
          <h2>Available Fragrances</h2>
          <p>${product.scents}</p>
        </div>`
      : "";
    const caution = product.caution
      ? `<div class="detail-panel caution-panel">
          <h2>Caution</h2>
          <p>${product.caution}</p>
        </div>`
      : "";

    document.title = `${product.name} | Saloni Cleaning Products`;
    productDetail.innerHTML = `
      <nav class="product-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/products/">Products</a>
        <span aria-hidden="true">/</span>
        <span>${product.name}</span>
      </nav>
      <div class="product-detail-grid">
        <figure class="product-detail-visual catalog-photo">
          <img src="/${product.image}" alt="${product.name} ${product.category.toLowerCase()} bottle India" loading="eager" decoding="async" />
        </figure>
        <div class="product-detail-info">
          <span class="category-pill">${product.category}</span>
          <h1>${product.name}</h1>
          <p>${product.description}</p>
          <div class="detail-panel">
            <h2>Available Sizes</h2>
            <p>${product.sizes}</p>
          </div>
          ${directions}
          ${scents}
          ${caution}
          <a class="buy-whatsapp product-detail-buy" href="https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener noreferrer">
            <span class="wa-icon" aria-hidden="true">WA</span>
            Buy on WhatsApp
          </a>
        </div>
      </div>
    `;
  } else {
    productDetail.innerHTML = `
      <div class="product-not-found">
        <p class="eyebrow">Product not found</p>
        <h1>We could not find this product.</h1>
        <a class="button primary" href="products.html">Back to Products</a>
      </div>
    `;
  }
}

document.querySelectorAll("form[data-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formName = form.dataset.form || "Enquiry";
    const status = form.querySelector(".form-status");

    if (status) {
      status.textContent = `${formName} submitted. Our team will contact you soon.`;
    }

    form.reset();
  });
});
