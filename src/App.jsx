import { useState } from 'react'
import Form from './components/Form'

let baseItems = [
  "Cheese",
  "Bread"
]

function App() {
  const [name, setName] = useState('')
  const [items, setItems] = useState(baseItems)
  const [favourites, setFavourites] = useState([])

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const Item = ({item}) => {
    return(
      <div>{item} <button onClick={() => remove(item)}>x</button> <button onClick={() => addFavourite(item)}>Favourite</button> </div>
    )
  }

  const addFavourite = (item) => {
    let copy = [...favourites]
    copy.push(item)
    setFavourites(copy)
  }

  const Favourite = ({item}) => {
    return(
      <div>{item} <button onClick={() => removeFavourite(item)}>x</button> <button onClick={() => addItem(item)}>Add to shopping list</button></div>
    )
  }

  const addItem = (item) => {
    if (items.includes(item)) {
      alert(`${item} is already in the list`)
      return
    }
    let itemsCopy = [...items]
    itemsCopy.push(item)
    setName('')
    setItems(itemsCopy)
  }

  const remove = (toBeRemoved) => {
    if (!window.confirm(`Remove ${toBeRemoved} from shopping list?`)) return
    let copy = [...items]
    setItems(copy.filter(item => item !== toBeRemoved))
  }

  const removeFavourite = (toBeRemoved) => {
    if (!window.confirm(`Remove ${toBeRemoved} from favourites?`)) return
    let copy = [...favourites]
    setFavourites(copy.filter(item => item !== toBeRemoved))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(name)
  }

  const clearList = () => {
    if (window.confirm("Clear shopping list?")) {
      setItems([])
    }
  }

  return (
    <>
      <h1>Shopping list</h1>
      <Form name={name} changeFunction={handleChange} handleSubmit={handleSubmit}/>
      {items.map((item, id) => <Item key={id} item={item}/>)}
      <button onClick={() => clearList()}>Clear</button>
      <h2>Favourites</h2>
      {favourites.map((item, id) => <Favourite key={id} item={item}/>)}

    </>
  )
}

export default App
