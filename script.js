document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

//Dynamic lists

//Initialising variables
const itemInput = document.getElementById('itemInput');
const addProjectButton = document.getElementById('addProjectButton');
const dynamicList = document.getElementById('dynamicList');

//Add item to the list
function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        li.className = "itemBox";

        //Create anchor element
        const link = document.createElement('a');
        link.href = '#';

        link.className = 'itemLink'
        link.tabIndex = 0;

        li.appendChild(link);
        dynamicList.appendChild(li);

        //Clear the input fields
        itemInput.value = '';
    }
}

//Button
addProjectButton.addEventListener('click', addItem);