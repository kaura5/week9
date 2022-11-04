import {useState} from 'react'
function Classlist(){
    const [list, setList] = useState([])
    const [listItem, setListItem] = useState('')

    async function handleFetch(){
        const res = await fetch('/api/classlist')
        const data = await res.json()
        setList(data)
    }

    const handleUpdate = async ()=>{
        const res = await fetch('/api/classlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({listItem: listItem})
        })
        const data = await res.json()
        console.log(data)
    }

    return(
        <>
            <button onClick={handleFetch}>Fetch ClassList</button>
            {list.map((item)=>(
                <div key={item.id}>
                    {item.name}
                </div>
            ))}
            <input type="text" onChange={(e)=>setListItem(e.target.value)} />
            <button onClick={handleUpdate}>Update List</button>
        </>
    )

}

export default Classlist;