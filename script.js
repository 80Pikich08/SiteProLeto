function applyTheme(theme) {
  const body = document.body;
  const content = document.getElementById('content');
  const btn = document.getElementById('themeToggle');

  if (!content || !btn) return;

  if (theme === 'light') {
    body.style.backgroundImage = 'url("Light_bg.jpg")';
    body.style.color = 'black';
    content.style.backgroundColor = 'rgba(255,255,255,0.7)';
    content.style.border = '6px dashed black';
    btn.textContent = '🌙';
  } else {
    body.style.backgroundImage = 'url("Dark_bg.jpg")';
    body.style.color = 'white';
    content.style.backgroundColor = 'rgba(0,0,0,0.7)';
    content.style.border = '6px dashed white';
    btn.textContent = '☀️';
  }
}

function toggleTheme() {
  const current = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  const newTheme = current === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme') || 'dark';
  applyTheme(saved);

  const lightbox = document.getElementById('lightbox');
  const lightbox_content = document.querySelector('.lightbox-content');
  const close = document.querySelector('.close')

  document.querySelectorAll(".gallery figure img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox_content.innerHTML = '';
      if (img.dataset.video) {
        const video = document.createElement('video');
        video.src = img.dataset.video;
        video.controls = true;
        video.autoplay = true;
        lightbox_content.appendChild(video);
      } else {
        const fullImg = document.createElement('img');
        fullImg.src = img.src;
        lightbox_content.appendChild(fullImg);
      }
      lightbox.classList.add('active');
    });
  });

  close.addEventListener('click', () => {
    lightbox.classList.remove('active')
    lightbox_content.innerHTML = '';
  });

  lightbox.addEventListener('click', (elem) => {
    if (elem.target === lightbox) {
      lightbox.classList.remove('active')
      lightbox_content.innerHTML = '';
    }
  });

});
