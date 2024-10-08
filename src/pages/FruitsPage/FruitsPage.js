import { useState, useEffect } from 'react'
import CloudinaryPage from '../../components/Cloudinary/Cloudinary'



export default function FruitsPage ({ user, setUser }){
    const [fruits, setFruits] = useState([])
    const [foundFruit, setFoundFruit] = useState(null)
    const [newFruit, setNewFruit] = useState({
        name: '',
        readyToEat: false,
        color: ''
    })
    // index
    const getFruits = async () => {
        try {
            const response = await fetch('/api/fruits')
            const data = await response.json()
            setFruits(data)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteFruit = async (id) => {
        try {
            const response = await fetch(`/api/fruits/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundFruit(data)
        } catch (error) {
            console.error(error)
        }
    }
    // update
    const updateFruit = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/fruits/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...updatedData})
            })
            const data = await response.json()
            setFoundFruit(data)
        } catch (error) {
            console.error(error)
        }
    }
    // create
        const createFruit = async () => {
            try {
                const response = await fetch(`/api/fruits`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...newFruit})
                })
                const data = await response.json()
                setFoundFruit(data)
                setNewFruit({
                    name: '',
                    readyToEat: false,
                    color: ''
                })
            } catch (error) {
                console.error(error)
            }
        }

    const handleChange = (evt) => {
        setNewFruit({...newFruit, [evt.target.name]: evt.target.value})
    }

    useEffect(()=> {
        getFruits()
    }, [foundFruit])

    return (
        <>
            {
                fruits && fruits.length ? (<ul>
                    {
                        fruits.map((fruit) => {
                            return (
                                <li key={fruit._id}>
                                    {fruit.name} is {fruit.color} {fruit.readyToEat? 'and its ready to eat' : 'its not ready to eat'}
                                    <br/><button onClick={() => deleteFruit(fruit._id)}>X</button>
                                    <br/><button onClick={() => updateFruit(fruit._id)}>E</button>
                                </li>
                            )
                        })
                    }
                </ul>): <h1>No Fruits Yet Add One Below</h1>
            }
            {'Name '}<input value={newFruit.name} onChange={handleChange} name="name"></input><br/>
            {'Color '}<input value={newFruit.color} onChange={handleChange} name="color"></input><br/>
            {'Ready To Eat '}<input type="checkbox" checked={newFruit.readyToEat} onChange={(evt) => setNewFruit({...newFruit, readyToEat: evt.target.checked })}></input><br/>
            <button onClick={() => createFruit() }>Create A New Fruit</button>
            {
                foundFruit? <div>
                    <h1>{foundFruit.name}</h1>
                    <h2>{foundFruit.color}</h2>
                    <h3>{foundFruit.readyToEat? 'I am ready': 'I am not ready'}</h3>
                </div>: <>No Fruit in Found Fruit State</>
            }
            <CloudinaryPage />
            
        </>
    )
}
