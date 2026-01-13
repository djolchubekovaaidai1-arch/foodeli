// Простая анимация при наведении
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.transition = '0.3s';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
const appBtn = document.getElementById("appBtn");

appBtn.addEventListener("click", () => {
  alert("App download will be available soon 🚀");
});

const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter your email");
  } else {
    alert(`Thanks! We will contact you at ${email}`);
  }
});
