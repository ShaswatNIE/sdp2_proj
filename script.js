// ============================================
// EXPLORE KARNATAKA - MAIN JAVASCRIPT
// ============================================


// ============================================
// 1. LIVE SEARCH FUNCTIONALITY
// ============================================

function filterContent() {

  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const items = document.querySelectorAll(".searchable-item");

  items.forEach(function (item) {

    const text = item.innerText.toLowerCase();

    if (text.includes(input)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }

  });

}


// ============================================
// 2. CATEGORY FILTER
// ============================================

function filterCategory(category) {

  const items = document.querySelectorAll(
    "#touristGrid .searchable-item"
  );

  const buttons = document.querySelectorAll(
    ".category-btn"
  );


  // Remove active class from all buttons
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });


  // Add active class to selected button
  buttons.forEach(function (button) {

    if (button.dataset.category === category) {
      button.classList.add("active");
    }

  });


  // Filter tourist places
  items.forEach(function (item) {

    const itemCategory = item.getAttribute(
      "data-category"
    );

    if (
      category === "all" ||
      itemCategory === category
    ) {

      item.style.display = "";

    } else {

      item.style.display = "none";

    }

  });

}


// ============================================
// 3. QUICK VIEW MODAL
// ============================================

function showModal(title, text) {

  document.getElementById("modalTitle").innerText = title;

  document.getElementById("modalBody").innerText = text;


  const modalElement =
    document.getElementById("infoModal");


  const modal =
    new bootstrap.Modal(modalElement);


  modal.show();

}


// ============================================
// 4. IMAGE LIGHTBOX
// ============================================

function openLightbox(src) {

  document.getElementById("lightboxImg").src = src;


  const modalElement =
    document.getElementById("lightboxModal");


  const modal =
    new bootstrap.Modal(modalElement);


  modal.show();

}


// ============================================
// 5. TRAVEL TIME CALCULATOR
// ============================================

function calculateTravelTime() {

  const distance =
    parseInt(
      document.getElementById(
        "destinationSelect"
      ).value
    );


  // Approximate calculations
  const driveHours =
    (distance / 60).toFixed(1);


  const trainHours =
    (distance / 50).toFixed(1);


  const resultDiv =
    document.getElementById(
      "travelResult"
    );


  resultDiv.style.display = "block";


  resultDiv.innerHTML = `
    <strong>Distance:</strong> ${distance} km<br>
    <strong>Estimated Driving Time:</strong> ~${driveHours} hrs<br>
    <strong>Estimated Train Time:</strong> ~${trainHours} hrs
  `;

}


// ============================================
// 6. PAGE EVENT LISTENERS
// ============================================

document.addEventListener(
  "DOMContentLoaded",
  function () {


    // ----------------------------------------
    // Search Input
    // ----------------------------------------

    const searchInput =
      document.getElementById(
        "searchInput"
      );


    if (searchInput) {

      searchInput.addEventListener(
        "keyup",
        filterContent
      );

    }


    // ----------------------------------------
    // Category Buttons
    // ----------------------------------------

    const categoryButtons =
      document.querySelectorAll(
        ".category-btn"
      );


    categoryButtons.forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const category =
              this.dataset.category;

            filterCategory(category);

          }
        );

      }
    );


    // ----------------------------------------
    // Quick View Buttons
    // ----------------------------------------

    const quickViewButtons =
      document.querySelectorAll(
        ".quick-view-btn"
      );


    quickViewButtons.forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const title =
              this.dataset.title;

            const text =
              this.dataset.text;

            showModal(title, text);

          }
        );

      }
    );


    // ----------------------------------------
    // Gallery Images
    // ----------------------------------------

    const galleryImages =
      document.querySelectorAll(
        ".gallery-img"
      );


    galleryImages.forEach(
      function (image) {

        image.addEventListener(
          "click",
          function () {

            openLightbox(this.src);

          }
        );

      }
    );


    // ----------------------------------------
    // Distance Calculator
    // ----------------------------------------

    const calculateButton =
      document.getElementById(
        "calculateBtn"
      );


    if (calculateButton) {

      calculateButton.addEventListener(
        "click",
        calculateTravelTime
      );

    }

  }
);
