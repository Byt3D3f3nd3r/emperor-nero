// Function to display the selected section
function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  
  // Hide all sections
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Show the selected section
  const activeSection = document.getElementById(sectionId);
  activeSection.classList.add('active');
}

// Set the default section (home) to be active on page load
window.onload = function() {
  showSection('home');
};

