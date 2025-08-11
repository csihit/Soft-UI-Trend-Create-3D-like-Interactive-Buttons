const body = document.body;
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = 5 + Math.random() * 5 + 's';
  p.style.animationDelay = Math.random() * 5 + 's';
  body.appendChild(p);
}
