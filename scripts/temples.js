const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById("currentyear").innerText = currentYear;
document.getElementById('lastModified').innerText = document.lastModified;

const Button = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

Button.addEventListener('click', () => {
    navigation.classList.toggle('open');
    Button.classList.toggle('open');
});