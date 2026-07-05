// COUNTER ANIMATION
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
  counter.innerText = "0";

  const update = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const inc = target / 100;

    if (c < target) {
      counter.innerText = Math.ceil(c + inc);
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };

  update();
});


// DARK MODE TOGGLE
const btn = document.getElementById("themeToggle");

btn.onclick = () => {
  document.body.classList.toggle("light");
};


// SIMPLE FORM ALERT
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message Sent Successfully!");
});
