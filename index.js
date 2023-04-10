let id = 0;
document.getElementById('add').addEventListener('click', () =>{
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = `${createdDate.getMonth() + 1}-${createdDate.getDate()}-${createdDate.getFullYear()}`;
    let actions = row.insertCell(2);
    actions.appendChild(deleteButton(id++));
    document.getElementById('new-task').value = '';
})
function deleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.style = `font-family:${'Permanent Marker'}, cursive;`
    btn.innerHTML = 'Completed';
    btn.onclick = () => {
        console.log(`Deleted row: item-${id}`);
        let toDelete = document.getElementById(`item-${id}`);
        toDelete.parentNode.removeChild(toDelete);
    }
    return btn;
}