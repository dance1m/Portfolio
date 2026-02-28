document.addEventListener('DOMContentLoaded', () => {
  const audios = document.querySelectorAll('#music audio');
  const displayText = document.getElementById('displayText');

  audios.forEach(audio => {
    audio.addEventListener('play', () => {
      const text = audio.getAttribute('data-text') || '';
      const desc = audio.getAttribute('data-desc') || '';
      displayText.innerHTML = `<span class="text">${text}</span> <br> <span class="desc"> ${desc}</span>` || 'Now playing';
      displayText.style.display = 'block';
      audios.forEach(otherAudio => {if (otherAudio !== audio) otherAudio.pause();});
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("U9ZvvUVHTyrv4toiy")

  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      feedback.innerHTML = `<p style="color:red;">Please fill out all required fields correctly</p>`;
      return;
    }

    emailjs.sendForm("service_pj4d6lc", "template_q5ad1gj", form)
      .then(() => {
        feedback.innerHTML = `<p style="color:green;">Your message was sent successfully!</p>`;
        form.reset();
      })
  });
});