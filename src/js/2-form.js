const form = document.querySelector('.feedback-form');

window.addEventListener('load', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        if (email) {
            form.elements.email.value = email;
        }
        if (message) {
            form.elements.message.value = message;
        }
    }
});

form.addEventListener('input', (event) => {
    const { value, name } = event.target;
    localStorage.setItem('feedback-form-state', JSON.stringify({
        ...JSON.parse(localStorage.getItem('feedback-form-state')),
        [name]: value.trim(),
    }));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (email && message) {
        const userCredentials = { email, message };
        console.log(userCredentials);

        localStorage.removeItem('feedback-form-state');
        form.reset();
    }
});