const btn = document.getElementById('genPass');
const heading = document.getElementById('password');
const range = document.getElementById('range');
const rangeval = document.getElementById('rangeval');
const uc = document.getElementById('upperL');
const lc = document.getElementById('lowerL');
const num = document.getElementById('number');
const sym = document.getElementById('symbol');
const icon = document.getElementById('icon');

rangeval.innerText = range.value;

range.addEventListener('input', () => {
    rangeval.innerText = range.value;
})


btn.addEventListener('click', () => {
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let number = '0123456789';
    let symbol = '~!@#$%^&*()_+=<>?/:'

    let finalstr = ""
    let latestpass = "";

    if (uc.checked) finalstr += uppercase;
    if (lc.checked) finalstr += lowercase;
    if (num.checked) finalstr += number;
    if (sym.checked) finalstr += symbol;
    if (finalstr === '') {
        alert("Please Check the Any Checked Box");
        return;
    }

    for (let i = 0; i < range.value; i++) {
        let newpass = Math.floor(Math.random() * finalstr.length);
        latestpass += finalstr.charAt(newpass);
    }
    heading.innerText = latestpass;
})

icon.addEventListener('click', () => {
    window.navigator.clipboard.writeText(`${heading.innerText}`);
})
