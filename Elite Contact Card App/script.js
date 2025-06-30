const form = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

let contacts = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const newContact = {};
  new FormData(form).forEach((value, key) => {
    newContact[key] = value.trim();
  });
  newContact.id = Date.now(); // For future features
  contacts.push(newContact);
  form.reset();
  renderContacts();
});

function renderContacts() {
  contactList.innerHTML = "";
  contacts.forEach(contact => {
    const card = document.createElement('div');
    card.className = 'contact-card';
    card.innerHTML = `
      <h3>${contact.name}</h3>
      <p><strong>📞</strong> ${contact.phone}</p>
      <p><strong>📧</strong> ${contact.email}</p>
      <p><strong>🏠</strong> ${contact.address}</p>
      <p><strong>🎂</strong> ${contact.age}</p>
    `;
    contactList.appendChild(card);
  });
}