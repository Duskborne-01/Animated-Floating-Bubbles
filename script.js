function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 20 + 10;

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * window.innerWidth}px`;
  bubble.style.bottom = `-50px`;
  bubble.style.animationDuration = `${3 + Math.random() * 5}s`;

  document.body.appendChild(bubble);
  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

setInterval(createBubble, 100);