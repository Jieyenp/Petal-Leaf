const flowers = [
  {
    id: "rose",
    name: "Rose",
    latin: "Rosa",
    price: 4.5,
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLnD3lDHB3LkaJkFe92ruZ5VJqnNNDjm83XZNPrQnIL6Sq6fiySC9Iq21sZw_HdJG04KvWv8Wi0zEWlho",
    category: "classic",
    tagLabel: "Classic & Spring",
    season: "Late Spring – Autumn",
    light: "Full Sun (6+ hours)",
    vibe: "Timeless, layered & classic floral scent",
    summary: "Multi-petaled blossoms arranged in spirals above serrated green leaves and thorny stems.",
    description:
      "Roses are among the most recognizable flowers worldwide, celebrated for their velvety or papery petals, wide range of colors from soft blush pink to deep crimson, and varied fragrances ranging from light tea to rich damask."
  },
  {
    id: "sunflowers",
    name: "Sunflowers",
    latin: "Helianthus annuus",
    price: 3.75,
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRrL7wUvRx2I3S7efqipPcZqyT43011OfE51-eChJPEVx5dHwjOfF1sZebQnVjRiK_R5Vl_6EwQRRWJ00U",
    category: "garden",
    tagLabel: "Garden & Tropical",
    season: "Mid Summer – Early Autumn",
    light: "Full Sun",
    vibe: "Bright, tall & sunny",
    summary: "Large golden-yellow ray petals framing a broad central disc on tall, sturdy green stalks.",
    description:
      "Sunflowers are bold, fast-growing blooms known for their thick green stems, rough heart-shaped leaves, and large seed-bearing flower heads that bring warmth and height to gardens and bouquets."
  },
  {
    id: "daffodils",
    name: "Daffodils",
    latin: "Narcissus",
    price: 3.0,
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQmbdq-AJLE45nPD6Vls91I0c_nj6aRJFH7PX7TLtZpNVB8CYNHe3C3EDNBrm9QVzvlmDk9C91A-optj7c",
    category: "classic",
    tagLabel: "Classic & Spring",
    season: "Early to Mid Spring",
    light: "Full Sun to Partial Shade",
    vibe: "Fresh, crisp & early-spring",
    summary: "Six-petaled star or cup-like blossoms centered with a trumpet or corona on slender green stems.",
    description:
      "Daffodils are cheerful spring bulb flowers with strap-like green leaves and prominent central trumpets. Their bright, clean silhouette makes them a classic sign that winter is giving way to spring."
  },
  {
    id: "tulips",
    name: "Tulips",
    latin: "Tulipa",
    price: 3.5,
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQJsYfIRpPEPcESGf_8rYAYSq3OxpF76xtjiiUsYTdhBuIpgi6W6wqSKPCptF1DENy2DtzWlIzY1WpZ5h8",
    category: "classic",
    tagLabel: "Classic & Spring",
    season: "Mid to Late Spring",
    light: "Full Sun",
    vibe: "Sleek, sculptural & refined",
    summary: "Smooth, cup- or bowl-shaped petals rising cleanly above broad, waxy green leaves.",
    description:
      "Tulips feature clean, symmetrical petals that open in warmth and close slightly at night or in cool weather. Grown from bulbs, they come in single, double, fringed, and parrot varieties."
  },
  {
    id: "orchid",
    name: "Orchid",
    latin: "Orchidaceae",
    price: 7.5,
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQtowofdkLQCqsMC9vKLNrXEzmkgIs1Cktby2WlOd2EZyHOZnAM70le330BI9LbYcCfgDI7rKBIamnvOYc",
    category: "garden",
    tagLabel: "Garden & Tropical",
    season: "Year-Round (varies by species)",
    light: "Bright Indirect Light",
    vibe: "Graceful, exotic & long-lasting",
    summary: "Distinctive asymmetrical blossoms with a prominent lip petal along arching green flower spikes.",
    description:
      "Orchids are known for their intricate flower geometry, thick leathery green foliage, and blooms that can last for weeks or even months indoors when given bright, filtered light and balanced watering."
  },
  {
    id: "lilies",
    name: "Lilies",
    latin: "Lilium",
    price: 5.25,
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT7kTwJQ_jpT3GKRGd5NGrejm-B16Z3Op0mGLH-B35kJ8Q-m-sROvY1WyjHTayT2gsBzBacAiAAU0ODLH4",
    category: "classic",
    tagLabel: "Classic & Spring",
    season: "Early to Late Summer",
    light: "Full Sun to Partial Shade",
    vibe: "Fragrant, bold & trumpet-like",
    summary: "Six prominent reflexed or trumpet-shaped tepals with long stamens on leafy green stems.",
    description:
      "Lilies grow from scaly bulbs and stand out for their dramatic, open-faced blooms, whorls or ranks of lance-shaped green leaves, and strong, sweet perfume depending on the variety."
  },
  {
    id: "carnation",
    name: "Carnation",
    latin: "Dianthus caryophyllus",
    price: 2.75,
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSTAuMTqjKosNqNVm_4pMPA-OuNn9LUCORO6_wOtvB5YhjpPwu-xjlFI5x3G8YzozrMmzCJs4RBIeo-1TY",
    category: "classic",
    tagLabel: "Classic & Spring",
    season: "Spring – Summer",
    light: "Full Sun",
    vibe: "Ruffled, spicy-sweet & long-lasting",
    summary: "Frilled, ruffled petals packed densely above narrow, bluish-green foliage.",
    description:
      "Carnations feature delicately fringed petals, a subtle clove-like scent, and slender green stems that hold up well in floral arrangements and garden borders alike."
  },
  {
    id: "peony",
    name: "Peony",
    latin: "Paeonia",
    price: 6.5,
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS5L4BxvLbTXvFyxhFIkj-PZy7RYws5pLiE6VU3cFjGAiSo17aTqj1EFLU0TD6mSdKBZy_afqPyPaquGgc",
    category: "classic",
    tagLabel: "Classic & Spring",
    season: "Late Spring – Early Summer",
    light: "Full Sun to Light Shade",
    vibe: "Lush, romantic & soft",
    summary: "Generous, billowing layers of petals over lush, compound green foliage.",
    description:
      "Peonies are loved for their full, cloud-like blooms and rich green leaves that stay ornamental long after the petals drop. They open from rounded buds into sweeping, textured flowers."
  },
  {
    id: "daisy",
    name: "Daisy",
    latin: "Bellis perennis / Leucanthemum",
    price: 2.5,
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTA0au8ZDihgCnQLgUPXwU_HbY_q75-8kAYnq6-rVjXlFR2e0W1kCpw3Gd1Zea81ZqVYEkXnyI6mNE5Txk",
    category: "garden",
    tagLabel: "Garden & Tropical",
    season: "Spring – Autumn",
    light: "Full Sun to Bright Light",
    vibe: "Cheerful, crisp & meadow-fresh",
    summary: "Clean white or pastel ray petals radiating around a bright yellow central disc.",
    description:
      "Daisies have an unmistakable, open-faced silhouette with a sunny central disc surrounded by neat petals, bringing a fresh, unpretentious charm to meadows, pots, and bouquets."
  },
  {
    id: "gerbera",
    name: "Gerbera Daisy",
    latin: "Gerbera jamesonii",
    price: 4.0,
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRPefctnzAUM_t4Z3JyquzVKRgEMjobBq71Ii34D8LQKvxhAslRllrW6WSEfJw56X-4ok61aQbgIuyhxqE",
    category: "garden",
    tagLabel: "Garden & Tropical",
    season: "Spring – Autumn",
    light: "Bright Light to Full Sun",
    vibe: "Vibrant, velvety & expressive",
    summary: "Large, rounded flower heads with layered, symmetrical petals and sturdy green stems.",
    description:
      "Gerbera daisies offer larger, fuller blooms than common field daisies, featuring plush petals in soft pinks, corals, yellows, and creams that stand out vividly against green leaves."
  },
  {
    id: "jasmine",
    name: "Jasmine",
    latin: "Jasminum",
    price: 3.5,
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSMf2tfqBuufNT67tl58CWcgAu-BdBjKIVIBW9qJJxp9zN-ygr5hIgn0DR-obRnRWwSdQSE97k7TdwdQpM",
    category: "garden",
    tagLabel: "Garden & Tropical",
    season: "Late Spring – Autumn",
    light: "Full Sun to Bright Light",
    vibe: "Sweetly aromatic & star-shaped",
    summary: "Delicate star-like blossoms nestled among fresh green leaves with a rich, sweet fragrance.",
    description:
      "Jasmine flowers are prized for their intoxicating, sweet aroma that often peaks in the evening. Their slender green vines or shrubs carry clusters of small star-shaped blooms."
  },
  {
    id: "hibiscus",
    name: "Hibiscus",
    latin: "Hibiscus rosa-sinensis",
    price: 4.25,
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQPKRHthSlXxwK_3Lt9QZsEj73NlwS-zI1XlZKDm40CCqNVH42x4Jy_cb6d4Ec5aJxrBwufVaU3bV_KvJM",
    category: "garden",
    tagLabel: "Garden & Tropical",
    season: "Warm Months / Year-Round in Tropics",
    light: "Full Sun",
    vibe: "Bold, tropical & wide-petaled",
    summary: "Broad, overlapping petals with a prominent central stamen column above glossy green leaves.",
    description:
      "Hibiscus blooms are known for their wide, open petals, prominent central staminal column, and lush green foliage that thrives in warm climates and sunny gardens."
  },
  {
    id: "lavender",
    name: "Lavender",
    latin: "Lavandula",
    price: 3.25,
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRfswHKVdAgt1YVo4SFJLm10ug6ZhR-EPMRcdD0BaVZBZQzAFzxpqKmm3KILEViFcbvaQ62fW-onpr18J8",
    category: "garden",
    tagLabel: "Garden & Tropical",
    season: "Early to Mid Summer",
    light: "Full Sun",
    vibe: "Calming, herbal & aromatic",
    summary: "Slender flower spikes lined with small whorls of blooms above silvery-green aromatic stems.",
    description:
      "Lavender combines soft violet-lilac flower spikes with cool, aromatic grey-green foliage, valued both in sunny borders and for its soothing herbal scent."
  },
  {
    id: "hydrangea",
    name: "Hydrangea",
    latin: "Hydrangea macrophylla",
    price: 6.0,
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSx8D3ltwkXc778Y5IPQK5Ze_LEe4qfhLDzzNmGbbdTYKCImyXC0wVT6kw8AEehYqfERsRe-know6g8dyI",
    category: "classic",
    tagLabel: "Classic & Spring",
    season: "Summer – Early Autumn",
    light: "Morning Sun & Afternoon Shade",
    vibe: "Full, clustered & cottage-style",
    summary: "Dense, rounded or lacecap clusters of florets framed by broad, bright green leaves.",
    description:
      "Hydrangeas form generous clusters of small four-petaled blooms that create rich texture in garden beds and cut arrangements, supported by broad, lush green leaves."
  },
  {
    id: "marigold",
    name: "Marigold",
    latin: "Tagetes",
    price: 2.5,
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRN42oP6Wx5-lewab3ZhArHVbIrssroWXdID81Ogi4v3VNm8THXUeb_OuvX8XWy7GgPci6rqRRJVqze9Zc",
    category: "garden",
    tagLabel: "Garden & Tropical",
    season: "Spring – First Frost",
    light: "Full Sun",
    vibe: "Warm, ruffled & resilient",
    summary: "Ruffled, pom-like or carnation-like flower heads in warm gold and orange above pungent green leaves.",
    description:
      "Marigolds are hardy, sun-loving blooms with tightly ruffled petals and fern-like green foliage, bringing bright warmth to vegetable patches, borders, and containers."
  },
  {
    id: "camellia",
    name: "Camellia",
    latin: "Camellia japonica",
    price: 5.5,
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTDM78Pe7fw4KlCfuPMfhcd2KjvZT95KB--u8pKyBumbIxwsrhWz3AdIVpLQ6Xnv3ME5STiFGF-MEqqBSM",
    category: "classic",
    tagLabel: "Classic & Spring",
    season: "Late Winter – Spring",
    light: "Partial Shade to Filtered Sun",
    vibe: "Polished, geometric & evergreen",
    summary: "Neat, rose-like or peony-like blossoms set against dark, glossy evergreen leaves.",
    description:
      "Camellias produce crisp, symmetrical blooms in pink, white, or red against shiny deep-green evergreen foliage, blooming when many other shrubs are still quiet."
  }
];

const DELIVERY_FEE = 5.0;

// DOM Elements
const flowersGrid = document.getElementById("flowersGrid");
const stemPickerList = document.getElementById("stemPickerList");
const selectedStemsList = document.getElementById("selectedStemsList");
const builderTotalEl = document.getElementById("builderTotal");
const wrapSelect = document.getElementById("wrapSelect");
const ribbonSelect = document.getElementById("ribbonSelect");
const deliveryDateInput = document.getElementById("deliveryDate");
const deliveryAddressInput = document.getElementById("deliveryAddress");
const giftNoteInput = document.getElementById("giftNote");
const addCustomBouquetBtn = document.getElementById("addCustomBouquetBtn");
const builderStatus = document.getElementById("builderStatus");

const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const shuffleAccentBtn = document.getElementById("shuffleAccentBtn");
const moodCaption = document.getElementById("moodCaption");

// Modals
const flowerModal = document.getElementById("flowerModal");
const modalImage = document.getElementById("modalImage");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalLatin = document.getElementById("modalLatin");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalSeason = document.getElementById("modalSeason");
const modalLight = document.getElementById("modalLight");
const modalVibe = document.getElementById("modalVibe");
const modalAddCartBtn = document.getElementById("modalAddCartBtn");
const modalAddBouquetBtn = document.getElementById("modalAddBouquetBtn");

const accountBtn = document.getElementById("accountBtn");
const mobileAccountBtn = document.getElementById("mobileAccountBtn");
const accountBanner = document.getElementById("accountBanner");
const authModal = document.getElementById("authModal");
const loggedInView = document.getElementById("loggedInView");
const activeUserName = document.getElementById("activeUserName");
const activeUserEmail = document.getElementById("activeUserEmail");
const activeUserAddress = document.getElementById("activeUserAddress");
const logoutBtn = document.getElementById("logoutBtn");
const authTabs = document.querySelectorAll(".auth-tab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const demoLoginBtn = document.getElementById("demoLoginBtn");
const authStatus = document.getElementById("authStatus");

const openCartBtn = document.getElementById("openCartBtn");
const mobileCartBtn = document.getElementById("mobileCartBtn");
const cartCountEl = document.getElementById("cartCount");
const mobileCartCountEl = document.getElementById("mobileCartCount");
const cartModal = document.getElementById("cartModal");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const cartDeliveryEl = document.getElementById("cartDelivery");
const cartGrandTotalEl = document.getElementById("cartGrandTotal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutRecipient = document.getElementById("checkoutRecipient");
const checkoutAddress = document.getElementById("checkoutAddress");
const cartStatus = document.getElementById("cartStatus");

// State
let activeFilter = "all";
let searchQuery = "";
let pinkPrimary = false;
let currentModalFlowerId = null;
let bouquetStems = {};
let cart = [];
let currentUser = JSON.parse(localStorage.getItem("petalLeafUser") || "null");

function formatMoney(num) {
  return `$${num.toFixed(2)}`;
}

// Catalog rendering
function getFilteredFlowers() {
  return flowers.filter((flower) => {
    const matchesCategory = activeFilter === "all" || flower.category === activeFilter;
    const term = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !term ||
      flower.name.toLowerCase().includes(term) ||
      flower.latin.toLowerCase().includes(term) ||
      flower.summary.toLowerCase().includes(term) ||
      flower.description.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });
}

function renderFlowers() {
  const list = getFilteredFlowers();
  if (list.length === 0) {
    flowersGrid.innerHTML = `<div class="empty-state">No flowers match your current filter or search.</div>`;
    return;
  }

  flowersGrid.innerHTML = list
    .map(
      (flower) => `
      <article class="card">
        <div class="card-trigger" data-id="${flower.id}">
          <img class="card-img" src="${flower.image}" alt="${flower.name}" loading="lazy" />
          <div class="card-body">
            <span class="tag ${flower.category === "garden" ? "tag-pink" : "tag-green"}">
              ${flower.tagLabel}
            </span>
            <h3>${flower.name}</h3>
            <div class="card-latin">${flower.latin}</div>
            <p>${flower.summary}</p>
            <div class="card-price-row">
              <span>${formatMoney(flower.price)} / stem</span>
              <span>${flower.season.split("–")[0].trim()}</span>
            </div>
          </div>
        </div>
        <div class="card-actions">
          <button type="button" class="btn btn-primary btn-sm add-stem-cart" data-id="${flower.id}">
            Add to Cart
          </button>
          <button type="button" class="btn btn-secondary btn-sm add-stem-bouquet" data-id="${flower.id}">
            + Bouquet
          </button>
        </div>
      </article>
    `
    )
    .join("");
}

// Flower modal
function openFlowerModal(flowerId) {
  const flower = flowers.find((f) => f.id === flowerId);
  if (!flower) return;
  currentModalFlowerId = flower.id;

  modalImage.src = flower.image;
  modalImage.alt = flower.name;
  modalTag.textContent = flower.tagLabel;
  modalTag.className = `tag ${flower.category === "garden" ? "tag-pink" : "tag-green"}`;
  modalTitle.textContent = flower.name;
  modalLatin.textContent = flower.latin;
  modalDesc.textContent = flower.description;
  modalPrice.textContent = `${formatMoney(flower.price)} per stem`;
  modalSeason.textContent = flower.season;
  modalLight.textContent = flower.light;
  modalVibe.textContent = flower.vibe;

  openModal(flowerModal);
}

// Custom Bouquet Builder
function renderStemPicker() {
  stemPickerList.innerHTML = flowers
    .map(
      (flower) => `
      <div class="stem-item">
        <img class="stem-thumb" src="${flower.image}" alt="${flower.name}" loading="lazy" />
        <div class="stem-info">
          <strong>${flower.name}</strong>
          <span>${formatMoney(flower.price)}</span>
        </div>
        <button type="button" class="btn btn-secondary btn-sm pick-stem-btn" data-id="${flower.id}">
          + Add
        </button>
      </div>
    `
    )
    .join("");
}

function addStemToBouquet(flowerId) {
  bouquetStems[flowerId] = (bouquetStems[flowerId] || 0) + 1;
  renderBouquetBuilder();
}

function updateBouquetStemQty(flowerId, delta) {
  const nextQty = (bouquetStems[flowerId] || 0) + delta;
  if (nextQty <= 0) {
    delete bouquetStems[flowerId];
  } else {
    bouquetStems[flowerId] = nextQty;
  }
  renderBouquetBuilder();
}

function calculateBouquetTotal() {
  let stemsCost = 0;
  Object.entries(bouquetStems).forEach(([id, qty]) => {
    const f = flowers.find((item) => item.id === id);
    if (f) stemsCost += f.price * qty;
  });
  const wrapCost = Number(wrapSelect.value.split("|")[1] || 0);
  return stemsCost > 0 ? stemsCost + wrapCost : 0;
}

function renderBouquetBuilder() {
  const entries = Object.entries(bouquetStems);
  if (entries.length === 0) {
    selectedStemsList.innerHTML = `<li class="muted-empty">No stems selected yet — add flowers from the list.</li>`;
  } else {
    selectedStemsList.innerHTML = entries
      .map(([id, qty]) => {
        const f = flowers.find((item) => item.id === id);
        if (!f) return "";
        return `
          <li class="selected-stem-row">
            <span>${f.name} (${formatMoney(f.price * qty)})</span>
            <div class="cart-row-controls">
              <button type="button" class="mini-qty-btn b-minus" data-id="${id}" aria-label="Remove one ${f.name}">-</button>
              <span>${qty}</span>
              <button type="button" class="mini-qty-btn b-plus" data-id="${id}" aria-label="Add one ${f.name}">+</button>
            </div>
          </li>
        `;
      })
      .join("");
  }

  builderTotalEl.textContent = formatMoney(calculateBouquetTotal());
}

// Cart & Checkout
function addSingleStemToCart(flowerId) {
  const flower = flowers.find((f) => f.id === flowerId);
  if (!flower) return;

  const existing = cart.find((item) => item.id === `stem-${flower.id}`);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: `stem-${flower.id}`,
      title: `${flower.name} Stem`,
      meta: `${flower.season} • Delivery Ready`,
      unitPrice: flower.price,
      qty: 1
    });
  }
  renderCart();
}

function addCustomBouquetToCart() {
  const entries = Object.entries(bouquetStems);
  if (entries.length === 0) {
    builderStatus.style.color = "var(--accent-pink-dark)";
    builderStatus.textContent = "Please add at least one flower stem to build your bouquet.";
    return;
  }

  const wrapName = wrapSelect.value.split("|")[0];
  const ribbon = ribbonSelect.value;
  const dateVal = deliveryDateInput.value || "Flexible Date";
  const addrVal = deliveryAddressInput.value.trim() || (currentUser ? currentUser.address : "Address at checkout");
  const noteVal = giftNoteInput.value.trim();

  const stemSummary = entries
    .map(([id, qty]) => {
      const f = flowers.find((item) => item.id === id);
      return `${qty}× ${f ? f.name : id}`;
    })
    .join(", ");

  const totalPrice = calculateBouquetTotal();

  cart.push({
    id: `bouquet-${Date.now()}`,
    title: `Custom Bouquet (${wrapName})`,
    meta: `${stemSummary} | ${ribbon} | Delivers: ${dateVal} to ${addrVal}${noteVal ? ` | Note: "${noteVal}"` : ""}`,
    unitPrice: totalPrice,
    qty: 1
  });

  bouquetStems = {};
  giftNoteInput.value = "";
  renderBouquetBuilder();
  renderCart();

  builderStatus.style.color = "var(--accent-green-dark)";
  builderStatus.textContent = "Custom bouquet added to your cart!";
}

function updateCartQty(itemId, delta) {
  const item = cart.find((i) => i.id === itemId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== itemId);
  }
  renderCart();
}

function renderCart() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountEl.textContent = totalCount;
  mobileCartCountEl.textContent = totalCount;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<div class="empty-state">Your flower cart is currently empty.</div>`;
  } else {
    cartItemsContainer.innerHTML = cart
      .map(
        (item) => `
        <div class="cart-row">
          <div>
            <strong>${item.title}</strong>
            <div class="small-muted">${item.meta}</div>
            <div class="small-muted">${formatMoney(item.unitPrice)} each</div>
          </div>
          <div class="cart-row-controls">
            <button type="button" class="mini-qty-btn c-minus" data-id="${item.id}" aria-label="Decrease quantity">-</button>
            <span>${item.qty}</span>
            <button type="button" class="mini-qty-btn c-plus" data-id="${item.id}" aria-label="Increase quantity">+</button>
          </div>
        </div>
      `
      )
      .join("");
  }

  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);
  const delivery = cart.length > 0 ? DELIVERY_FEE : 0;
  cartSubtotalEl.textContent = formatMoney(subtotal);
  cartDeliveryEl.textContent = formatMoney(delivery);
  cartGrandTotalEl.textContent = formatMoney(subtotal + delivery);
}

// Auth handling
function syncUserUI() {
  if (currentUser) {
    const firstName = currentUser.name.split(" ")[0];
    accountBtn.textContent = firstName;
    mobileAccountBtn.textContent = firstName;
    accountBanner.textContent = `Signed in as ${currentUser.name} • Default delivery: ${currentUser.address}`;
    loggedInView.style.display = "grid";
    activeUserName.textContent = currentUser.name;
    activeUserEmail.textContent = currentUser.email;
    activeUserAddress.textContent = `Delivery Address: ${currentUser.address}`;
    if (!checkoutRecipient.value) checkoutRecipient.value = currentUser.name;
    if (!checkoutAddress.value) checkoutAddress.value = currentUser.address;
    if (!deliveryAddressInput.value) deliveryAddressInput.value = currentUser.address;
  } else {
    accountBtn.textContent = "Account";
    mobileAccountBtn.textContent = "Account";
    accountBanner.textContent = "Guest mode — tap Account to log in or sign up for saved delivery details.";
    loggedInView.style.display = "none";
  }
  localStorage.setItem("petalLeafUser", JSON.stringify(currentUser));
}

// Modal helpers
function openModal(el) {
  el.classList.add("open");
  el.setAttribute("aria-hidden", "false");
}

function closeModal(el) {
  el.classList.remove("open");
  el.setAttribute("aria-hidden", "true");
}

function openAuthModal() {
  authStatus.textContent = "";
  openModal(authModal);
}

function openCartModal() {
  cartStatus.textContent = "";
  renderCart();
  openModal(cartModal);
}

// Event Listeners
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderFlowers();
  });
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderFlowers();
});

flowersGrid.addEventListener("click", (e) => {
  const trigger = e.target.closest(".card-trigger");
  if (trigger) {
    openFlowerModal(trigger.dataset.id);
    return;
  }
  const addCart = e.target.closest(".add-stem-cart");
  if (addCart) {
    addSingleStemToCart(addCart.dataset.id);
    return;
  }
  const addBouquet = e.target.closest(".add-stem-bouquet");
  if (addBouquet) {
    addStemToBouquet(addBouquet.dataset.id);
    builderStatus.style.color = "var(--accent-green-dark)";
    builderStatus.textContent = "Added stem to your custom bouquet below.";
  }
});

stemPickerList.addEventListener("click", (e) => {
  const btn = e.target.closest(".pick-stem-btn");
  if (btn) addStemToBouquet(btn.dataset.id);
});

selectedStemsList.addEventListener("click", (e) => {
  const minus = e.target.closest(".b-minus");
  const plus = e.target.closest(".b-plus");
  if (minus) updateBouquetStemQty(minus.dataset.id, -1);
  if (plus) updateBouquetStemQty(plus.dataset.id, 1);
});

wrapSelect.addEventListener("change", renderBouquetBuilder);
addCustomBouquetBtn.addEventListener("click", addCustomBouquetToCart);

modalAddCartBtn.addEventListener("click", () => {
  if (currentModalFlowerId) {
    addSingleStemToCart(currentModalFlowerId);
    closeModal(flowerModal);
  }
});

modalAddBouquetBtn.addEventListener("click", () => {
  if (currentModalFlowerId) {
    addStemToBouquet(currentModalFlowerId);
    closeModal(flowerModal);
    document.getElementById("builder").scrollIntoView({ behavior: "smooth" });
  }
});

accountBtn.addEventListener("click", openAuthModal);
mobileAccountBtn.addEventListener("click", openAuthModal);

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    authTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const isSignup = tab.dataset.tab === "signup";
    loginForm.style.display = isSignup ? "none" : "block";
    signupForm.style.display = isSignup ? "block" : "none";
    authStatus.textContent = "";
  });
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const nameFromEmail = email.split("@")[0] || "Flower Lover";
  const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
  currentUser = {
    name: formattedName,
    email,
    address: currentUser?.address || "22 Botanical Way"
  };
  syncUserUI();
  authStatus.style.color = "var(--accent-green-dark)";
  authStatus.textContent = `Welcome back, ${currentUser.name}!`;
});

demoLoginBtn.addEventListener("click", () => {
  currentUser = {
    name: "Hazel Bloom",
    email: "hazel@petalandleaf.shop",
    address: "108 Moss & Rose Lane"
  };
  syncUserUI();
  authStatus.style.color = "var(--accent-green-dark)";
  authStatus.textContent = "Signed in with demo profile Hazel Bloom.";
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const address = document.getElementById("signupAddress").value.trim();
  currentUser = { name, email, address };
  syncUserUI();
  authStatus.style.color = "var(--accent-green-dark)";
  authStatus.textContent = `Account created for ${name}!`;
});

logoutBtn.addEventListener("click", () => {
  currentUser = null;
  syncUserUI();
  authStatus.style.color = "var(--accent-pink-dark)";
  authStatus.textContent = "You have logged out.";
});

openCartBtn.addEventListener("click", openCartModal);
mobileCartBtn.addEventListener("click", openCartModal);

cartItemsContainer.addEventListener("click", (e) => {
  const minus = e.target.closest(".c-minus");
  const plus = e.target.closest(".c-plus");
  if (minus) updateCartQty(minus.dataset.id, -1);
  if (plus) updateCartQty(plus.dataset.id, 1);
});

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    cartStatus.style.color = "var(--accent-pink-dark)";
    cartStatus.textContent = "Add flowers or a custom bouquet before placing a delivery order.";
    return;
  }
  const recipient = checkoutRecipient.value.trim();
  const address = checkoutAddress.value.trim();
  const total = cartGrandTotalEl.textContent;

  cart = [];
  renderCart();
  checkoutForm.reset();
  cartStatus.style.color = "var(--accent-green-dark)";
  cartStatus.textContent = `Delivery order confirmed for ${recipient} at ${address} (${total})!`;
});

document.querySelectorAll(".modal-close").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.close);
    if (target) closeModal(target);
  });
});

document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal(backdrop);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-backdrop.open").forEach((m) => closeModal(m));
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

shuffleAccentBtn.addEventListener("click", () => {
  pinkPrimary = !pinkPrimary;
  const root = document.documentElement;
  if (pinkPrimary) {
    root.style.setProperty("--accent-green", "#c4527d");
    root.style.setProperty("--accent-green-dark", "#9e385f");
    moodCaption.textContent = "Blossom-rose emphasis with soft botanical green.";
  } else {
    root.style.setProperty("--accent-green", "#3b7a57");
    root.style.setProperty("--accent-green-dark", "#28593e");
    moodCaption.textContent = "Fresh leaf green paired with soft blossom pink.";
  }
});

// Initialize
const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];
deliveryDateInput.min = new Date().toISOString().split("T")[0];
deliveryDateInput.value = tomorrow;

syncUserUI();
renderFlowers();
renderStemPicker();
renderBouquetBuilder();
renderCart();