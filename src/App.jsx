import { useState } from 'react'
import Form from './components/Form'

let baseItems = [
  "Cheese",
  "Bread"
]

function App() {
  const [name, setName] = useState('')
  const [items, setItems] = useState(baseItems)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const Item = ({item}) => {
    return(
      <div>{item}</div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (items.includes(name)) {
      alert(`${name} is already in the list`)
      return
    }
    let itemsCopy = [...items]
    itemsCopy.push(name)
    setItems(itemsCopy)
  }

  const remove = (toBeRemoved) => {
    
  }

  return (
    <>
      <h1>Shopping list</h1>
      <Form name={name} changeFunction={handleChange} handleSubmit={handleSubmit}/>
      {items.map((item, id) => <Item key={id} item={item}/>)}
    </>
  )
}

export default App
