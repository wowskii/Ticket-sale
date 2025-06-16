document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

//Dynamic lists


const itemInput = document.getElementById('itemInput');
const addProjectButton = document.getElementById('addProjectButton');
const dynamicList = document.getElementById('dynamicList');

//Add item to the list
function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        dynamicList.appendChild(li);
        itemInput.value = '';
    }
}

addProjectButton.addEventListener('click', addItem);