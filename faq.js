// Troca de abas
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.faq-section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(tab.dataset.target).classList.add('active');

        const togglesInSection = document.getElementById(tab.dataset.target).querySelectorAll('.toggle');
        togglesInSection.forEach(t => t.classList.remove('active'));
        togglesInSection.forEach(t => t.nextElementSibling.style.height = '0px');
    });
});

// Toggle das perguntas com acordeão exclusivo
const toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const parentSection = toggle.parentElement;

        parentSection.querySelectorAll('.toggle-content').forEach(c => {
            if(c !== content){
                c.style.height = 0;
                c.previousElementSibling.classList.remove('active');
            }
        });

        toggle.classList.toggle('active');
        if(content.style.height && content.style.height !== '0px'){
            content.style.height = 0;
        } else {
            content.style.height = content.scrollHeight + 'px';
        }
    });
});
