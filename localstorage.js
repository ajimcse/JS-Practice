const addLoaclStorage =() =>{
    const inputId= document.getElementById('storageId')
     const id = inputId.value
   console.log(id)
    const inputValue  = document.getElementById('storageValue')

    const value = inputValue.value
    console.log(value)
    localStorage.setItem(id, value)
   inputId.value=''
   inputValue.value=''
}