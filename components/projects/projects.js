document.querySelectorAll('.expand').forEach(button => {
  button.addEventListener('click', function() {
    const currentProject = button.closest('.content');
    document.querySelectorAll('.content').forEach(content => {
      if (content !== currentProject) {
        content.classList.add('hidden');
        content.classList.remove('expanded');
        content.querySelectorAll('.expander').forEach(expander => {
            expander.classList.add('hidden')
            expander.classList.remove('expanded')
        })
      } else {
        content.classList.add('expanded');
        content.classList.remove('hidden');
        content.querySelector('.project').classList.add('hidden')
        content.querySelector('.project').classList.remove('expanded')
        content.querySelector('.expand').classList.add('hidden')
        content.querySelectorAll('.expander').forEach(expander => {
            expander.classList.add('expanded')
            expander.classList.remove('hidden')
        })
      }
    });
  });
});

document.querySelectorAll('.collapse').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.add('expanded');
        content.classList.remove('hidden');
        content.querySelector('.project').classList.remove('hidden')
        content.querySelector('.expand').classList.remove('hidden')
        content.querySelectorAll('.expander').forEach(expander => {
            expander.classList.add('hidden')
            expander.classList.remove('expanded')
        })
      })
    });
  });