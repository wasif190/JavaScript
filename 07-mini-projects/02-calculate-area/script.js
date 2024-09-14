const inputForm = document.querySelector('form');
const result = document.querySelector('#result');


inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const width = parseInt(document.querySelector('#width').value);

    if (height === "" || isNaN(height)) {
        result.innerHTML = "Please enter height"
    } else if (width === "" || isNaN(width)) {
        result.innerHTML = "Please enter width"
    } else {
        const area = height * width;
        result.innerHTML = area;
    }
});