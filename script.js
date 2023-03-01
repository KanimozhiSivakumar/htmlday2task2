form.addEventListener('submit',(e)=>{
    e.preventDefault()

    parent = document.querySelector('.user-data table')

    row_table = document.createElement('tr')

    arrData = ["First","Last","Address","Pincode","State","Country"]

    for(let i of arrData){
        fN = document.createElement('td')
        fN_data = document.querySelector(`[placeholder*=${i}]`)
        fN.innerText = fN_data.value
        row_table.append(fN)
        fN_data.value = ''
    }
    parent.append(row_table)
})
