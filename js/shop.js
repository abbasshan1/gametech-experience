/* GameTech Pick & Shop — product catalog */
(function () {
  const WA_NUMBER = "923459075030"; // Shan

  const PRODUCTS = [
    // —— Monitors ——
    {
      id: "msi-mag-255f-e20",
      cat: "monitors",
      name: "MSI MAG 255F-E20",
      specs: '25" FHD · IPS · 200Hz · 0.5ms · HDR Ready',
      price: null,
      status: "soldout",
      img: null,
      note: "Sold out"
    },
    {
      id: "msi-mag-255f-x24",
      cat: "monitors",
      name: "MSI MAG 255F-X24",
      specs: '25" FHD · Rapid IPS · 240Hz · 0.5ms · FreeSync',
      price: 40999,
      status: "ok",
      img: null
    },
    {
      id: "msi-mag-274qf-x24",
      cat: "monitors",
      name: "MSI MAG 274QF-X24",
      specs: '27" QHD · Rapid IPS · 240Hz · 0.5ms · FreeSync',
      price: 73999,
      status: "ok",
      img: "assets/products/msi-mag-274qf-x24.jpg"
    },
    {
      id: "msi-mag-275qf-e21",
      cat: "monitors",
      name: "MSI MAG 275QF-E21",
      specs: '27" QHD · IPS · 210Hz · 0.5ms · HDR400',
      price: 68999,
      status: "ok",
      img: "assets/products/msi-mag-275qf-e21.jpg"
    },
    {
      id: "msi-mag-275qpf-x30",
      cat: "monitors",
      name: "MSI MAG 275QPF-X30",
      specs: '27" QHD · Rapid IPS · 300Hz · 0.5ms · HDR400',
      price: 92999,
      status: "hold",
      img: "assets/products/msi-mag-275qpf-x30.jpg",
      note: "Limited stock — confirm before order"
    },
    {
      id: "msi-mag-271kl-modern",
      cat: "monitors",
      name: "MSI MAG 271KL Modern",
      specs: '27" QHD · Modern series · Office + Gaming',
      price: 79999,
      status: "ok",
      img: "assets/products/msi-mag-271kl-modern.jpg"
    },
    {
      id: "msi-mpg-271qr-x500-oled",
      cat: "monitors",
      name: "MSI MPG 271QR X500 OLED",
      specs: '26.5" QHD QD-OLED · 500Hz · 0.03ms · HDR True Black',
      price: null,
      status: "hold",
      img: "assets/products/msi-mpg-271qr-x500-oled.jpg",
      note: "Contact for latest price"
    },
    {
      id: "msi-mag-274qp-x240-oled",
      cat: "monitors",
      name: "MSI MAG 274QP X240 OLED",
      specs: '27" QHD QD-OLED · 240Hz · 0.03ms · HDR True Black 400',
      price: 229999,
      status: "ok",
      img: "assets/products/msi-mag-274qp-x240-oled.jpg"
    },
    {
      id: "msi-mag-34cqr-e20",
      cat: "monitors",
      name: "MSI MAG 34CQR-E20",
      specs: '34" Curved QHD/UWQHD · VA · Gaming',
      price: 112999,
      status: "ok",
      img: "assets/products/msi-mag-34cqr-e20.jpg"
    },

    // —— Coolers ——
    {
      id: "acer-ac360yn",
      cat: "coolers",
      name: "Acer AC360YN (Black)",
      specs: "360mm AIO · ARGB",
      price: 23999,
      status: "ok",
      img: "assets/products/acer-ac360yn.jpg"
    },
    {
      id: "asus-prime-lc360",
      cat: "coolers",
      name: "Asus Prime LC 360 ARGB",
      specs: "360mm AIO · ARGB · Copper CPU plate",
      price: 31999,
      status: "hold",
      img: "assets/products/asus-prime-lc360.jpg",
      note: "Confirm availability"
    },
    {
      id: "asus-rog-strix-lc360",
      cat: "coolers",
      name: "Asus ROG Strix LC 360",
      specs: "360mm AIO · ARGB · AURA Sync",
      price: 112999,
      status: "hold",
      img: "assets/products/asus-rog-strix-lc360.jpg",
      note: "Premium — contact for stock"
    },
    {
      id: "asus-rog-ryujin-iii-360",
      cat: "coolers",
      name: "Asus ROG Ryujin III 360",
      specs: '360mm AIO · 3.5" LCD · 8th-gen Asetek',
      price: 139999,
      status: "ok",
      img: "assets/products/asus-rog-ryujin-iii-360.jpg"
    },

    // —— Keyboards ——
    {
      id: "aula-f2066",
      cat: "keyboards",
      name: "Aula F2066",
      specs: "Wired Mechanical · RGB",
      price: 6999,
      status: "ok",
      img: "assets/products/aula-f2066.jpg"
    },
    {
      id: "aula-f2058",
      cat: "keyboards",
      name: "Aula F2058",
      specs: "Wired Mechanical · RGB",
      price: 7299,
      status: "ok",
      img: "assets/products/aula-f2058.jpg"
    },
    {
      id: "aula-f75-comic",
      cat: "keyboards",
      name: "Aula F75 Comic",
      specs: "75% · Gasket · Hot-Swap · Tri-Mode",
      price: 15999,
      status: "ok",
      img: "assets/products/aula-f75-comic.jpg"
    },
    {
      id: "aula-f75-pro",
      cat: "keyboards",
      name: "Aula F75 Pro",
      specs: "75% · Gasket · Hot-Swap · Tri-Mode",
      price: 15499,
      status: "ok",
      img: "assets/products/aula-f75-pro.jpg"
    },
    {
      id: "aula-f75-max",
      cat: "keyboards",
      name: "Aula F75 Max",
      specs: "75% · Gasket · Hot-Swap · Tri-Mode",
      price: 18999,
      status: "ok",
      img: "assets/products/aula-f75-max.jpg"
    },
    {
      id: "aula-hex68-he",
      cat: "keyboards",
      name: "Aula Hex68 HE",
      specs: "68-Key Hall Effect (Magnetic) · Compact",
      price: 16999,
      status: "ok",
      img: "assets/products/aula-hex68-he.jpg"
    },
    {
      id: "aula-l99-wind",
      cat: "keyboards",
      name: "Aula L99 Wind",
      specs: "Full-size · Wireless · RGB",
      price: 29999,
      status: "ok",
      img: "assets/products/aula-l99-wind.jpg"
    },
    {
      id: "leobog-amg65",
      cat: "keyboards",
      name: "Leobog AMG65",
      specs: "65% Dual Screen · Gasket · Tri-Mode",
      price: 26999,
      status: "ok",
      img: "assets/products/leobog-amg65.jpg"
    },
    {
      id: "leobog-hi65",
      cat: "keyboards",
      name: "Leobog Hi65",
      specs: "65% Aluminum Gasket · Tri-Mode Wireless",
      price: 34999,
      status: "ok",
      img: "assets/products/leobog-hi65.jpg"
    },
    {
      id: "hp-pavilion-550",
      cat: "keyboards",
      name: "HP Pavilion 550",
      specs: "Gaming · RGB Backlit · Membrane",
      price: 4999,
      status: "ok",
      img: "assets/products/hp-pavilion-550.jpg"
    },
    {
      id: "hp-omen-encoder",
      cat: "keyboards",
      name: "HP Omen Encoder",
      specs: "Gaming · RGB · Media/Volume Encoder Knob",
      price: 6499,
      status: "ok",
      img: "assets/products/hp-omen-encoder.jpg"
    },
    {
      id: "hp-gk321",
      cat: "keyboards",
      name: "HP GK321 (60%)",
      specs: "60% Compact · Wired Gaming",
      price: 5499,
      status: "ok",
      img: "assets/products/hp-gk321.jpg"
    },

    // —— PSU ——
    {
      id: "sonic-e700w",
      cat: "psu",
      name: "Sonic E700W",
      specs: "700W · Standard ATX · Budget-tier",
      price: 10999,
      status: "ok",
      img: "assets/products/sonic-e700w.jpg"
    },
    {
      id: "sonic-750w-gold",
      cat: "psu",
      name: "Sonic 750W Gold",
      specs: "750W · 80+ Gold (as labeled)",
      price: 15999,
      status: "ok",
      img: "assets/products/sonic-750w-gold.jpg"
    },
    {
      id: "msi-mag-a600dn",
      cat: "psu",
      name: "MSI MAG A600DN",
      specs: "600W · 80+ Bronze · Non-Modular",
      price: 13499,
      status: "ok",
      img: "assets/products/msi-mag-a600dn.jpg"
    },
    {
      id: "msi-mag-g750ls",
      cat: "psu",
      name: "MSI MAG G750LS",
      specs: "750W · 80+ Gold · Fully Modular · ATX 3.1 / PCIe 5.1",
      price: 23999,
      status: "ok",
      img: "assets/products/msi-mag-g750ls.jpg"
    },
    {
      id: "msi-mag-g850ls",
      cat: "psu",
      name: "MSI MAG G850LS",
      specs: "850W · 80+ Gold · Fully Modular · ATX 3.1 / PCIe 5.1",
      price: 27999,
      status: "ok",
      img: "assets/products/msi-mag-g850ls.jpg"
    },

    // —— Wheels ——
    {
      id: "pxn-v9-gen2",
      cat: "wheels",
      name: "PXN V9 Gen2",
      specs: "270°/900° · Dual-Motor Vibration · Shifter + Pedals",
      price: 34999,
      status: "ok",
      img: "assets/products/pxn-v9-gen2.jpg"
    },
    {
      id: "pxn-v99",
      cat: "wheels",
      name: "PXN V99",
      specs: "3.2Nm Dual-Motor Force Feedback · 270°/900° · Shifter + Pedals",
      price: 52999,
      status: "ok",
      img: "assets/products/pxn-v99.jpg"
    },
    {
      id: "pxn-v10-pro",
      cat: "wheels",
      name: "PXN V10 Pro",
      specs: "Direct-Drive Servo · 3.2Nm · 270° Wheel",
      price: 58999,
      status: "ok",
      img: "assets/products/pxn-v10-pro.jpg"
    },

    // —— Mouse ——
    {
      id: "aula-wind-sc620",
      cat: "mice",
      name: "Aula Wind SC620",
      specs: "Tri-Mode Wireless · 12000 DPI · PAW3311",
      price: 6499,
      status: "ok",
      img: null
    }
  ];

  const CAT_LABELS = {
    all: "All",
    monitors: "Monitors",
    coolers: "Coolers",
    keyboards: "Keyboards",
    psu: "PSUs",
    wheels: "Steering Wheels",
    mice: "Mice"
  };

  function formatPrice(p) {
    if (p == null) return "Contact for price";
    return "Rs " + p.toLocaleString("en-PK");
  }

  function waLink(product) {
    const priceStr = product.price != null ? formatPrice(product.price) : "price to confirm";
    const msg =
      "Hi GameTech! I'm interested in:\n\n" +
      "• Product: " + product.name + "\n" +
      "• Specs: " + product.specs + "\n" +
      "• Price: " + priceStr + "\n\n" +
      "Please confirm availability and next steps. Thanks!";
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  }

  function statusBadge(p) {
    if (p.status === "soldout") return '<span class="shop-badge soldout">Sold Out</span>';
    if (p.status === "hold") return '<span class="shop-badge hold">Limited</span>';
    return "";
  }

  function renderCard(p) {
    const imgHtml = p.img
      ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.parentElement.classList.add('no-img')">`
      : `<div class="shop-img-placeholder">${p.cat === "monitors" ? "🖥️" : p.cat === "coolers" ? "❄️" : p.cat === "keyboards" ? "⌨️" : p.cat === "psu" ? "🔌" : p.cat === "wheels" ? "🏎️" : "🖱️"}</div>`;

    const priceClass = p.price == null ? "contact" : "";
    const disabled = p.status === "soldout";
    const btnLabel = disabled ? "Sold Out" : "Purchase";
    const btnHref = disabled ? "#" : waLink(p);
    const btnAttrs = disabled
      ? 'class="shop-buy disabled" aria-disabled="true"'
      : `class="shop-buy" href="${btnHref}" target="_blank" rel="noopener"`;

    return `
      <article class="shop-card ${p.status === "soldout" ? "is-soldout" : ""}" data-cat="${p.cat}">
        <div class="shop-img-wrap">
          ${imgHtml}
          ${statusBadge(p)}
        </div>
        <div class="shop-body">
          <span class="shop-cat-tag">${CAT_LABELS[p.cat] || p.cat}</span>
          <h3 class="shop-name">${p.name}</h3>
          <p class="shop-specs">${p.specs}</p>
          ${p.note ? `<p class="shop-note">${p.note}</p>` : ""}
          <div class="shop-footer">
            <span class="shop-price ${priceClass}">${formatPrice(p.price)}</span>
            <a ${btnAttrs}>${btnLabel}</a>
          </div>
        </div>
      </article>`;
  }

  function render() {
    const root = document.getElementById("shopProducts");
    const filters = document.getElementById("shopFilters");
    if (!root || !filters) return;

    // filters
    const cats = ["all", "monitors", "coolers", "keyboards", "psu", "wheels", "mice"];
    filters.innerHTML = cats
      .map(
        (c, i) =>
          `<button type="button" class="shop-filter${i === 0 ? " active" : ""}" data-cat="${c}">${CAT_LABELS[c]}</button>`
      )
      .join("");

    // products (hide pure sold-out with no price/img optionally — still show)
    root.innerHTML = PRODUCTS.map(renderCard).join("");

    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".shop-filter");
      if (!btn) return;
      filters.querySelectorAll(".shop-filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.cat;
      root.querySelectorAll(".shop-card").forEach((card) => {
        const show = cat === "all" || card.dataset.cat === cat;
        card.style.display = show ? "" : "none";
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
