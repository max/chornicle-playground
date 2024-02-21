import {nanoid} from 'nanoid'
import {useCallback, useState} from 'react'
import CodeMirror from '@uiw/react-codemirror'
import {slashCommands} from '../plugins/slashCommands'

const completions = [
  {label: '@adam'},
  {label: '@geoffrey'},
  {label: '@max'},
  {label: '@paul'},
  {label: '/branch [name]'},
  {label: '/milestone [name]'}
]

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

  const onChange = useCallback((val, viewUpdate) => {
    setNewItem(val)
  }, [])

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
      <CodeMirror
        basicSetup={{
          foldGutter: false,
          highlightActiveLine: false,
          lineNumbers: false
        }}
        className="rounded border-none bg-white shadow"
        extensions={[slashCommands(completions)]}
        onChange={onChange}
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
