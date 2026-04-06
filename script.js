const form = document.getElementById('project-form');
const message = document.getElementById('form-message');
const strategyList = document.getElementById('strategy-list');
const projectNameInput = document.getElementById('project-name');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    message.textContent = 'Please complete all fields before building a strategy.';
    return;
  }

  const data = new FormData(form);
  const projectName = data.get('projectName');
  const goal = data.get('goal');
  const priority = data.get('priority');

  strategyList.innerHTML = '';

  const items = [
    `Prioritize a ${priority} workflow board for ${projectName}.`,
    `Use AI prompts to transform source updates into a concise writeup focused on: ${goal}.`,
    'Automate reminders for missing data and produce a weekly one-page summary for leaders.'
  ];

  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    strategyList.appendChild(li);
  });

  message.textContent = 'Strategy built successfully. Review the recommendations below.';
  projectNameInput.focus();
});

for (const button of document.querySelectorAll('.action')) {
  button.addEventListener('click', () => {
    message.textContent = `Selected quick action: ${button.textContent.trim()}`;
  });
}
