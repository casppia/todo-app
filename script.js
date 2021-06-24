let list = document.getElementById('list');
let trashIconList = document.getElementsByClassName('fas');

function addNewTask() {
  let newTask = document.getElementById('new-task');

  if (newTask.value) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let icon = document.createElement('i');
  
    icon.classList.add('fas','fa-trash-alt');
  
    span.appendChild(icon);
    li.appendChild(span);
    li.appendChild(document.createTextNode(newTask.value));
    list.appendChild(li);
  
    newTask.value = '';
  }
}

// function markAsDone() {
//   let list = document.getElementById('list');
//   for (let i = 0; i < list.length; i++) {
//      list[i].onclick = function() {
//        list[i].style.color = 'green';
//      }
//   }
// }

list.addEventListener('click', function(e) {
  //WHY UPPER CASE
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
},false
);

//set listener on parent and then check target 
list.addEventListener('click', function(e){
  let liToDelete = e.target.parentNode.parentNode;
  if(e.target.tagName === 'I') {
    list.removeChild(liToDelete);
  }
})

