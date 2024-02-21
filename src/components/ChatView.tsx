import {nanoid} from 'nanoid'
import {useState} from 'react'

type Item = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const itemsFixture: Item[] = [
  {id: nanoid(), role: 'user', content: 'Give me an overview of this codebase'},
  {
    id: nanoid(),
    role: 'assistant',
    content: 'Sure, here is an overview of this codebase'
  },
  {id: nanoid(), role: 'user', content: 'Let me check that for you.'}
]

function ItemComposer({onSubmit}: {onSubmit: (item: Item) => void}) {
  const [newItem, setNewItem] = useState<string>('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        if (newItem.trim() !== '') {
          const newItemObject = {
            id: nanoid(),
            content: newItem,
            // TODO: How do you do this properly?
            role: 'user' as 'user' | 'assistant'
          }
          onSubmit(newItemObject)
          setNewItem('')
        }
      }}
    >
      <input
        className="border-none bg-white shadow"
        onChange={(e) => {
          setNewItem(e.target.value)
        }}
        placeholder="Add comment..."
        type="text"
        value={newItem}
      />
    </form>
  )
}

function ChatView() {
  const [items, setItems] = useState<Item[]>(itemsFixture)

  const addItem = (newItem: Item) => {
    setItems([...items, newItem])
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1">
        {items.map((item) => (
          <div key={item.id}>
            {item.role}: {item.content}
          </div>
        ))}
      </div>

      <div>
        <ItemComposer onSubmit={addItem} />
      </div>
    </div>
  )
}

export default ChatView
