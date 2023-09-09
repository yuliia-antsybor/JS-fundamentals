const input = document.getElementById('inputText');
const submitButton = document.getElementById('submit');
const table = document.querySelector('#table tbody');

submitButton.addEventListener('click', () => {
    const value = input.value.trim();
    if (!value) return;
    table.innerHTML += createListElement(value);
    input.value = null;
});

function createListElement(text) {
    return `<tr>
                <td>${text}</td>
            </tr>`
}