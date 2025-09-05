document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('click', function() {
    this.querySelector('.card').classList.toggle('flipped');
  });
});