const plans = {
  single: document.querySelector(".plan.single"),
  double: document.querySelector(".plan.double")
};

document.querySelectorAll('input[name="purchase"]').forEach(radio => {
  radio.addEventListener("change", () => {
    Object.values(plans).forEach(p => p.classList.remove("active"));
    plans[radio.value].classList.add("active");
    updateCartLink();
  });
});

function updateCartLink() {
  const purchase = document.querySelector('input[name="purchase"]:checked').value;
  document.getElementById("addToCart").href =
    `https://example.com/cart?plan=${purchase}`;
}

/* Delivery tabs */
document.querySelectorAll(".delivery-tabs .tab").forEach(tab => {
  tab.addEventListener("click", () => {
    tab.parentElement.querySelectorAll(".tab")
      .forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

updateCartLink();

const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach(item => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    accordions.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".icon").textContent = "+";
    });

    if (!isOpen) {
      item.classList.add("active");
      item.querySelector(".icon").textContent = "−";
    }
  });
});

//stats counter
const counters = document.querySelectorAll(".counter");
  let hasAnimated = false;

  const startCount = () => {
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let current = 0;

      const increment = Math.ceil(target / 60);

      const updateCounter = () => {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
        } else {
          counter.textContent = current;
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    });
  };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          startCount();
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(document.querySelector("#stats"));

console.log("Hi")
