// Bài 1
// let str = prompt("nhập string");
    
// let splitString = str.split('')
// let reverseArray = splitString.reverse();
// let newString = reverseArray.join('');

// console.log(newString);

// Bài 2
// let arr = [1, 2, 3, 5, 4, 2, 6, 4, 1, 3]

// const removeDup = new Set(arr);

// const backToArray = [...removeDup];
// console.log(backToArray);

// Bài 3
// let array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];

// function Count(array){
//     array.sort();

//     let max =[0,0];

//     let count =1;
//     for (let i = array.length-1; i > 0; --i) {
//         if (array[i] == array[i-1]) ++count; 
//         else{
//              if (max[1] < count){ 
//                   max[0] = array[i];
//                   max[1] = count;   
//              }
//              count = 1;
//         }
//     }
//     console.log( "value: "+ max[0]+" count: "+ max[1]);
// }

// Count(array);

// Bài 4
const $inputName = document.getElementById('input-name');
const $inputNumber = document.getElementById('input-number');
const $inputSearch = document.getElementById('input-search');
const $buttonAdd = document.getElementById('button-add');
const $buttonSearch = document.getElementById('button-search');
const $buttonDel = document.getElementById('button-del');
const $list = document.getElementById('list');

function addNew() {
  let userName = $inputName.value;
  let userNumber = $inputNumber.value;
  let contact = localStorage.getItem("contactList") ? JSON.parse(localStorage.getItem("contactList")) : []
  contact.push({
    name: userName,
    number: userNumber,
  })
  localStorage.setItem("contactList", JSON.stringify(contact))
  // function add()
}

// function add() {
//   let contact = localStorage.getItem("contactList") ? JSON.parse(localStorage.getItem("contactList")) : []
//   let contactList = `
//     <li id="list-item">
//     <div>Alice</div>
//     <div>(816)-403-5456</div>
// </li>`
  
// contactList.map(value, index)=>{
//   contactList += `
//     <li id="list-item">
//     <div>${$inputName.value}</div>
//     <div>${$inputNumber.value}</div>
// </li>`
//   }

//   $list.innerHTML = contactList
// }
function add() {

  let newList = '<ul>';
    newList += `li id="list-item">
                    <div>Alice</div>
                    <div>(816)-403-5456</div>
                </li>`;
    ;
  }
  $list += '</ul>';
  $list.innerHTML = newList;

submit.onclick = function (event) {
  event.preventDefault();
  const newContact = {
    name: $inputName.value,
    number:$inputNumber.value,
  };


}
window.addEventListener('load', display_comments);