let i = 0;
let txt = 'Hello, you.';
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

    setTimeout(() => {
        const box = document.getElementById('typing');
      
        // 👇️ hides element (still takes up space on page)
        box.style.visibility = 'hidden';
      }, 1500);
    }

}

