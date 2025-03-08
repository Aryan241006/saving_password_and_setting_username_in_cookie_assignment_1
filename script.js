document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie with a given name, value, and expiration (in days)
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  let count = getCookie('count');

  // 2. If the cookie exists, increment the value; if not, initialize it to 1
  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }

  // 3. Update the 'count' cookie (setting it to expire in 7 days)
  setCookie('count', count, 7);

  // 4. Display the count on the webpage.
  // Check if an element with id "countDisplay" exists.
  let displayElement = document.getElementById('countDisplay');
  if (displayElement) {
    displayElement.textContent = count;
  } else {
    // If no such element exists, create one and append it to the body.
    let p = document.createElement('p');
    p.textContent = 'You have visited this page ' + count + ' times.';
    document.body.appendChild(p);
  }
});

