


const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  },2000);
})

document.addEventListener('DOMContentLoaded', function () {
  // Check if the user is logged in
  const activeUsername = localStorage.getItem('activeUsername');

  if (activeUsername) {
      // Update the DOM element with the username
      document.getElementById('usernameDisplay').textContent = `Welcome, ${activeUsername}!`;
  } else {
      // Redirect to the login page if the user is not logged in
      alert('Please log in first.');
      location.assign('login.html');
  }
});


function checkLoggedIn() {
    const activeUsername = localStorage.getItem('activeUsername');
    const errorShown = localStorage.getItem('errorShown');
  
    if (!activeUsername && !errorShown) {
      // If the user is not logged in, show an error message and redirect to the login page
      alert("Please log in first.");
      location.assign('login.html');
      localStorage.setItem('errorShown', 'true');
      localStorage.setItem('activeUsername', 'activeUsername'); // Set the flag in local storage
      return false;
    }
  
    // If the user is logged in, allow navigation
    return true;
  }
  
  // Check login status on page load
  document.addEventListener('DOMContentLoaded', function () {
    checkLoggedIn();
  
    // Attach the checkLoggedIn function to the click event of each navigation link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        if (!checkLoggedIn()) {
          // If the user is not logged in, prevent the default navigation behavior
          console.log('Preventing navigation due to not logged in');
          event.preventDefault();
        } else {
          console.log('Navigating to:', link.href);
        }
      });
    });
  
    // Event listener for the "Logout" link
    const logoutLink = document.querySelector('.navbar-nav .nav-link-logout');
    if (logoutLink) {
      logoutLink.addEventListener('click', function (event) {
        logout(); // Call the logout function to reset the errorShown flag
      });
    }
  });
  
  
  
  // Function to handle logout
  function logout() {
    localStorage.removeItem('errorShown'); // Reset the errorShown flag
    
  }



  