const container=document.querySelector('.itemlist')
const inputItem=document.querySelector('.input')
const addButton=document.querySelector('.additem')

//add items
addButton.addEventListener('click',e=>{
    additem()
})

function additem (){
   if(inputItem.value==='') {
       return
   }else{
       var html=`<li class="item">
    <span class="text">${inputItem.value}</span>
    <span class="button-done">done</span>
    <span class="button-remove">remove</span>
</li>`
}
   

document.querySelector('.itemlist').insertAdjacentHTML('afterbegin',html)
inputItem.value=''
}

//event in item
//remove item
container.addEventListener('click',e=>{
  if (e.target.claseName="button-remove") {
      e.target.style.display='none'
  }else if(e.target.className=='button-done'){
      
      e.target.parentElement.style.display='none'
  }
})