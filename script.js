const form = document.getElementById('projectForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = `YA1 project inquiry — ${data.get('brand') || 'new brand'}`;
  const body = [
    `Name: ${data.get('name') || ''}`,
    `Brand: ${data.get('brand') || ''}`,
    `Website / product: ${data.get('site') || ''}`,
    `Budget: ${data.get('budget') || ''}`,
    '',
    `What they are launching / what isn't working:`,
    `${data.get('problem') || ''}`
  ].join('\n');
  window.location.href = `mailto:galaxielsaga@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});