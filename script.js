const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

yesBtn.addEventListener('click', function() {
    response.innerText = 'Without a doubt, I want to spend my life with you!';
});

noBtn.addEventListener('click', function() {
    response.innerText = 'Yes, my love, a million times yes!';
});