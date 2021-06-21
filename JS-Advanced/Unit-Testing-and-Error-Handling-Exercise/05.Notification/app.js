function notify(message) {
  // select elements
  let notificationDiv = document.getElementById('notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';
  
  
  if (notificationDiv.getAttribute('data-notification-set') !== 'true') {
    notificationDiv.addEventListener('click', hideNotification);
    notificationDiv.setAttribute('data-notification-set', 'true');
  }

  function hideNotification(e) {
    notificationDiv.style.display = 'none';
  }
}