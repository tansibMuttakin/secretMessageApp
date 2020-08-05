const { hash } = window.location;
const decrypted = hash.replace('#','');
const message = atob(decrypted);

if (message) {
    document.querySelector('#card-input').classList.add('hide');
    document.querySelector('h1').innerHTML = message;
    document.querySelector('#message').classList.remove('hide');
    
}

document.querySelector('button').addEventListener('click', (event)=>{
    event.preventDefault();
    const input = document.querySelector('#input-message')
    const encrypted = btoa(input.value);
    const linkInput = document.querySelector('#input-link');
    linkInput.value = `${window.location}#${encrypted}`;
    
    
    document.querySelector('#card-link').classList.remove('hide');
    document.querySelector('#card-input').classList.add('hide');
    linkInput.select();
});