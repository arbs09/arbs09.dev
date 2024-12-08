document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');
        answer.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});