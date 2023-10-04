const characterId= document.getElementById('characterId')
const btnGo= document.getElementById('btn-go')
const btnReset= document.getElementById('btn-clear')
const content= document.getElementById('content')
const tbody = document.getElementById('tbody')


async function getApi(value){
    const result = fetch(`https://jsonplaceholder.typicode.com/users/${value}`)
    .then((res) => res.json())
    .then ((data) => {
        // console.log(data);
        return data
    })
    return result
}

btnGo.addEventListener('click', async (event)=>{
        event.preventDefault()
        
        const pegaApi = await getApi(characterId.value)
        console.log(pegaApi);
        tbody.innerHTML = ''
        if(characterId.value === ''){
        pegaApi.forEach(element => {
        tbody.innerHTML+= 
            `
        <tr>
            <td>
            ${element.id}
            </td>
            <td>
            ${element.name}
            </td>
        </tr>
            
            ` 
        });
    }else{
            tbody.innerHTML+= 
                `
            <tr>
                <td>
                ${pegaApi.id}
                </td>
                <td>
                ${pegaApi.name}
                </td>
            </tr>
                
                ` 
    }
            
        
})
