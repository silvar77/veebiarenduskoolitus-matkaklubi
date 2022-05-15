const nimiElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const markusElement = document.getElementById('description');
const sonumElement = document.getElementById('errorMessage');
const nuppElement = document.getElementById('registreeru');

nuppElement.onclick = async () => {
    const nimi = nimiElement.value;
    const email = emailElement.value;
    const markus = markusElement.value;
    if (nimi === '' || emailElement === '' || markus === '') {
        sonumElement.innerHTML = 'Kõikide väljade täitmine on kohustuslik!';
        sonumElement.style.color = 'violet';
        return;
    }
    const osaleja = { nimi, email, markus };
    const matkaId = window.location.href.split('/').at(-1);
    const paringuKeha = { matkaId, osaleja };

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paringuKeha),
        });
        const responseJson = await response.json();
        if (response,Json.response ==='Töötab!') {
            nimiElement.value = '';
            emailElement.value = '';
            markusElement.value = '';
            sonumElement.innerHTML = 'Osaleja registreeritud!';
            sonumElement.style.color = 'blue';
        } else {
            sonumElement.innerHTML = 'Tekkis probleem. Proovige mõne aja pärast jälle!';
            sonumElement.style.color = 'red';
        }
    } 
    catch {
        sonumElement.innerHTML = 'Tekkis probleem. Proovige mõne aja pärast jälle!';
        sonumElement.style.color = 'red';
    }
           
    
}


