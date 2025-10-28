const pen = document.getElementById('pen');

// Rotate the pen to the left or right on click
pen.addEventListener('click', () => {
  const currentRotation = getComputedStyle(pen).transform;
  pen.style.transform = currentRotation === 'none'
    ? 'translate(-50%, -50%) rotate(90deg)'
    : 'translate(-50%, -50%)';
});

// Lay flat horizontally on hover
pen.addEventListener('mouseover', () => {
  pen.style.transform = 'translate(-50%, -50%) rotate(0deg)';
});

// Stand vertically when the mouse leaves
pen.addEventListener('mouseout', () => {
  pen.style.transform = 'translate(-50%, -50%) rotate(90deg)';
});
