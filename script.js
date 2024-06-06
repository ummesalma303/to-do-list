let text = document.querySelector('.text');        
let inputs = document.getElementById('inf');
 
function add() {
    if (inputs.value === '') {
      alert('please write your task')
    }else{
        let newElement = document.createElement('ul');
        newElement.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`
        text.appendChild(newElement);
        // inputs.value = ' ';
        newElement.querySelector('i').addEventListener('click',remove)
        function remove(){
          newElement.remove()
        }
    }
}