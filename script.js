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