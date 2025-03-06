document.getElementById("eventForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const eventData = {
      name: document.getElementById("eventName").value,
      date: document.getElementById("eventDate").value,
      image: document.getElementById("eventImage").value,
      description: document.getElementById("eventDescription").value,
      organizerName: document.getElementById("organizerName").value,
      organizerContact: document.getElementById("organizerContact").value,
      organizerEmail: document.getElementById("organizerEmail").value
  };

  // Store in localStorage
  let events = JSON.parse(localStorage.getItem("events")) || [];
  events.push(eventData);
  localStorage.setItem("events", JSON.stringify(events));

  // Redirect to events page
  window.location.href = "events.html";
});
