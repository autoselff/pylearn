function addRow() {
    const container = document.getElementById('word-rows');
    const newRow = document.createElement('div');
    newRow.className = 'word-row';
    newRow.innerHTML = `
        <input type="text" name="word_1" placeholder="Word" class="input-vocab">
        <input type="text" name="word_2" placeholder="Equivalent" class="input-vocab">
    `;
    container.appendChild(newRow);
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('add-row-btn');
    if (btn) {
        btn.addEventListener('click', addRow);
    }
});
