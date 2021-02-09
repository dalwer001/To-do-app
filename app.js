document.getElementById("addBtn").addEventListener('click', (event)=>
{
    const addList = document.getElementById('todoinput').value;
    const list = document.getElementById('myUL');
    const childList = document.createElement('li');
    childList.innerText = addList;
    list.appendChild(childList);
})
    

document.getElementById('myUL').addEventListener('click',(event)=>{
    event.target.parentNode.removeChild(event.target);
    alert(`Are you completed your work?
      If Answer is "Yes".
      Click "Ok"!
`);
})

{/* <i class="fas fa-times mx-5"></i><i class="fas fa-check "></i> */}