// ASKELABEACH™ Static App JavaScript

// Global State
let currentSection = 'home';
let currentQuestionIndex = 0;
let totalScore = 0;
let selectedMood = null;
let lastProphecyIndex = -1;

// DOM Elements
const sections = {
    home: document.getElementById('home-section'),
    tiburon: document.getElementById('tiburon-section'),
    profecias: document.getElementById('profecias-section'),
    planner: document.getElementById('planner-section'),
    merch: document.getElementById('merch-section')
};

// Utility Functions
function showSection(sectionName) {
    // Hide all sections
    Object.values(sections).forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    if (sections[sectionName]) {
        sections[sectionName].classList.add('active');
        currentSection = sectionName;
    }
}

function addBounceAnimation(element) {
    element.classList.add('bounce-in');
    setTimeout(() => {
        element.classList.remove('bounce-in');
    }, 600);
}

// Navigation
function initNavigation() {
    // Logo click
    document.getElementById('logo-btn').addEventListener('click', () => {
        showSection('home');
    });

    // Desktop navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.getAttribute('data-section');
            showSection(section);
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Mobile navigation
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.getAttribute('data-section');
            showSection(section);
            mobileMenu.classList.add('hidden');
        });
    });

    // Home buttons
    document.querySelectorAll('.home-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.getAttribute('data-section');
            showSection(section);
        });
    });

    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target.getAttribute('data-target');
            showSection(target);
        });
    });
}

// Quiz Functions
function initQuiz() {
    resetQuiz();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    loadQuestion();
}

function loadQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100;
    
    // Update progress
    document.getElementById('current-q').textContent = currentQuestionIndex + 1;
    document.getElementById('total-q').textContent = quizData.questions.length;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    // Update question
    document.getElementById('quiz-question').textContent = question.text;
    
    // Update options
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option.text;
        button.addEventListener('click', () => selectAnswer(option.value));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(value) {
    // Disable all options
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.disabled = true;
    });
    
    totalScore += value;
    
    setTimeout(() => {
        if (currentQuestionIndex < quizData.questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            showQuizResult();
        }
    }, 300);
}

function showQuizResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');
    
    const result = quizData.results.find(r => totalScore >= r.min && totalScore <= r.max) || quizData.results[0];
    
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-description').textContent = result.description;
    
    addBounceAnimation(document.getElementById('quiz-result'));
}

// Prophecies Functions
function initProphecies() {
    const generateBtn = document.getElementById('generate-prophecy');
    generateBtn.addEventListener('click', generateProphecy);
}

function generateProphecy() {
    const btn = document.getElementById('generate-prophecy');
    const textElement = document.getElementById('prophecy-text');
    const displayElement = document.getElementById('prophecy-display');
    
    // Disable button and add generating class
    btn.disabled = true;
    btn.classList.add('generating');
    displayElement.classList.add('shake');
    
    // Show generating message
    textElement.textContent = '🔮 El universo está conspirando... 🔮';
    
    setTimeout(() => {
        // Select random prophecy (avoid repeating the last one)
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * prophecies.length);
        } while (randomIndex === lastProphecyIndex && prophecies.length > 1);
        
        lastProphecyIndex = randomIndex;
        textElement.textContent = prophecies[randomIndex];
        
        // Re-enable button and remove classes
        btn.disabled = false;
        btn.classList.remove('generating');
        displayElement.classList.remove('shake');
    }, 1500);
}

// Planner Functions
function initPlanner() {
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const mood = e.target.getAttribute('data-mood');
            selectMood(mood);
        });
    });
    
    document.getElementById('shuffle-itinerary').addEventListener('click', shuffleItinerary);
}

function selectMood(mood) {
    selectedMood = mood;
    
    // Update button states
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelector(`[data-mood="${mood}"]`).classList.add('selected');
    
    // Generate itinerary
    generateItinerary();
}

function generateItinerary() {
    if (!selectedMood) return;
    
    const activities = [...plannerData[selectedMood]];
    displayItinerary(activities);
}

function shuffleItinerary() {
    if (!selectedMood) return;
    
    const activities = [...plannerData[selectedMood]];
    // Fisher-Yates shuffle
    for (let i = activities.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [activities[i], activities[j]] = [activities[j], activities[i]];
    }
    
    displayItinerary(activities);
}

function displayItinerary(activities) {
    const container = document.getElementById('itinerary-list');
    const display = document.getElementById('itinerary-display');
    
    container.innerHTML = '';
    
    activities.forEach((activity, index) => {
        const item = document.createElement('div');
        item.className = 'itinerary-item';
        
        const icon = document.createElement('span');
        icon.className = 'itinerary-icon';
        icon.textContent = index % 2 === 0 ? '🌊' : '☀️';
        
        const text = document.createElement('span');
        text.className = 'itinerary-text';
        text.textContent = activity;
        
        item.appendChild(icon);
        item.appendChild(text);
        container.appendChild(item);
    });
    
    display.classList.remove('hidden');
    addBounceAnimation(display);
}

// Merch Functions
function initMerch() {
    const container = document.getElementById('merch-grid');
    
    merchProducts.forEach(product => {
        const item = document.createElement('div');
        item.className = 'merch-item';
        
        item.innerHTML = `
            <div class="merch-image" style="background: ${product.gradient};">
                <span class="merch-emoji">${product.emoji}</span>
            </div>
            <h3 class="merch-name">${product.name}</h3>
            <p class="merch-description">${product.description}</p>
            <div class="merch-footer">
                <span class="merch-price">${product.price}</span>
                <button class="merch-btn">🛒 Quiero</button>
            </div>
        `;
        
        // Add click event to buy button
        const buyBtn = item.querySelector('.merch-btn');
        buyBtn.addEventListener('click', () => {
            alert(`¡Gracias por tu interés en ${product.name}! 💕\nEsto es solo un mockup, pero tu energía compradora está noted ✨`);
        });
        
        container.appendChild(item);
    });
}

// Initialize App
function initApp() {
    initNavigation();
    initQuiz();
    initProphecies();
    initPlanner();
    initMerch();
    
    // Add restart quiz functionality
    document.getElementById('restart-quiz').addEventListener('click', resetQuiz);
    
    // Show home section by default
    showSection('home');
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);