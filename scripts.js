const totalImages = 20;

const observerOptions = {
  root: document.getElementById('img-grid'),
  rootMarging: '0px',
  threshold: 1.0
}

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}

const section = document.getElementById('img-grid');
const images = [];

for(let i = 1; i <= totalImages; i++) {
  images.push(document.getElementById(i.toString()));
}

let observer = new IntersectionObserver(observerCallback, observerOptions);
if(images) {
  for(let image of images) {
    observer.observe(image);
  }
}
