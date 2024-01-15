function generateCalendar() {
  const currentDate = new Date();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const lastDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

  const firstDayOfWeek = firstDayOfMonth.getDay();
  const lastDayOfWeek = lastDayOfMonth.getDay();

  const days = [];

  // Fill the last days of the previous month
  for (let i = lastDayOfLastMonth.getDate() - firstDayOfWeek + 1; i <= lastDayOfLastMonth.getDate(); i++) {
    days.push({
      day: i,
      inactive: true
    });
  }

  // Fill the days of the current month
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    days.push({
      day: i,
      inactive: false
    });
  }

  // Fill the first days of the next month
  for (let i = 1; i <= 6 - lastDayOfWeek; i++) {
    days.push({
      day: i,
      inactive: true
    });
  }

  return days;
}

// Render calendarDays here with JavaScript
const calendarContainer = document.getElementById('calendarContainer');
const calendarDays = generateCalendar();

calendarDays.forEach((day, index) => {
  const dayElement = document.createElement('div');
  dayElement.textContent = day.day;
  dayElement.className = `styled-day ${day.inactive ? 'inactive' : ''}`;
  dayElement.addEventListener('click', () => handleDayClick(`dateId-${day.day}`));
  calendarContainer.appendChild(dayElement);
});

function marcarAtendimento() {
  // Implement your logic for scheduling appointments here
  alert("Atendimento marcado! Implemente a lógica desejada.");
}

// script.js

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const monthYearElement = document.getElementById('currentMonthYear');

function updateMonthYear() {
  monthYearElement.textContent = new Intl.DateTimeFormat('pt-BR', {
    month: 'long',
    year: 'numeric'
  }).format(new Date(currentYear, currentMonth));
}

function changeMonth(offset) {
  currentMonth += offset;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  } else if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateMonthYear();
}

updateMonthYear();

function generateCalendarGerenciadorConsulta() {
  const currentDate = new Date();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const lastDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

  const firstDayOfWeek = firstDayOfMonth.getDay();
  const lastDayOfWeek = lastDayOfMonth.getDay();

  const days = [];

  // Preencher os últimos dias do mês anterior
  for (let i = lastDayOfLastMonth.getDate() - firstDayOfWeek + 1; i <= lastDayOfLastMonth.getDate(); i++) {
    days.push({
      day: i,
      atendimentos: 0
    });
  }

  // Preencher os dias do mês atual
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    // Simples exemplo: 5 atendimentos aleatórios por dia
    days.push({
      day: i,
      atendimentos: Math.floor(Math.random() * 6)
    });
  }

  // Preencher os primeiros dias do próximo mês
  for (let i = 1; i <= 6 - lastDayOfWeek; i++) {
    days.push({
      day: i,
      atendimentos: 0
    });
  }

  return days;
}

// Render dias do mês com atendimentos ou mensagem
const calendarContainerGerenciadorConsulta = document.getElementById('calendarContainer-gerenciador-consulta');
const calendarDaysGerenciadorConsulta = generateCalendarGerenciadorConsulta();

calendarDaysGerenciadorConsulta.forEach((day) => {
  const dayElement = document.createElement('div');
  dayElement.className = 'styled-day-gerenciador-consulta styled-day-with-atendimentos-gerenciador-consulta';
  dayElement.addEventListener('click', () => handleDayClickGerenciadorConsulta(day.day));

  // Div para o Dia
  const dayNumber = document.createElement('div');
  dayNumber.className = 'styled-day-number';
  dayNumber.textContent = day.day;

  // Div para o Comentário do Dia
  const dayComment = document.createElement('div');
  dayComment.className = 'styled-day-comment';
  dayComment.textContent = day.atendimentos > 0 ? `${day.atendimentos} atendimentos pendentes` : 'Marque um atendimento';

  // Adiciona as divs ao elemento do dia
  dayElement.appendChild(dayNumber);
  dayElement.appendChild(dayComment);

  calendarContainerGerenciadorConsulta.appendChild(dayElement);
});


function handleDayClickGerenciadorConsulta(day) {
  // Implemente a lógica de clique no dia desejado
  alert(`Clicou no dia ${day}`);
}

// Dentro do seu script.js
let leftSectionVisible = true;

function toggleLeftSection() {
  const leftSection = document.querySelector('.left-section');
  const rightSection = document.querySelector('.right-section-gerenciador-consulta');
  const toggleButton = document.getElementById('toggleButton');

  if (leftSectionVisible) {
    leftSection.style.display = 'none';
    rightSection.style.flex = '1';
    toggleButton.innerHTML = '&gt;'; // Altera para "&gt;" quando fechado
  } else {
    leftSection.style.display = 'flex';
    rightSection.style.flex = '3';
    toggleButton.innerHTML = '&lt;'; // Altera para "&lt;" quando aberto
  }

  leftSectionVisible = !leftSectionVisible;
}

