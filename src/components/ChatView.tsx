import {markdown, markdownLanguage} from '@codemirror/lang-markdown'
import {languages} from '@codemirror/language-data'
import CodeMirror from '@uiw/react-codemirror'
import {nanoid} from 'nanoid'
import {ReactNode, useCallback, useState} from 'react'
import {slashCommands} from '../plugins/slashCommands'
import {GitPullRequest} from 'lucide-react'
import {useSlots} from '../hooks/useSlots'

const completions = [
  {label: '@adam'},
  {label: '@geoffrey'},
  {label: '@max'},
  {label: '@paul'},
  {label: '/branch [name]'},
  {label: '/milestone [name]'}
]

type ItemType = 'edit' | 'command' | 'pr' | 'comment' | 'milestone'

type Item = {
  id: string
  type: ItemType
  content: string
  actors: string[]
}

const itemsFixture: Item[] = [
  {
    id: nanoid(),
    content: '176 new words',
    type: 'edit',
    actors: ['Adam Wiggins']
  },
  {
    id: nanoid(),
    content: 'First draft',
    type: 'milestone',
    actors: ['Adam Wiggins']
  },
  {
    id: nanoid(),
    content: 'Hey @chronicle-team, here\'s an initial draft of our first post. Let me know what you think!',
    type: 'comment',
    actors: ['Adam Wiggins']
  },
  {
    id: nanoid(),
    content: '8 edits',
    type: 'pr',
    actors: ['Geoffrey Litt']
  }
]

function ItemComposer({onSubmit}: {onSubmit: (item: Item) => void}) {
  const [newItem, setNewItem] = useState<string>('')

  const onChange = useCallback((val: string) => {
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
            type: 'pr'
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
        extensions={[
          markdown({base: markdownLanguage, codeLanguages: languages}),
          slashCommands(completions)
        ]}
        onChange={onChange}
        value={newItem}
      />
    </form>
  )
}

const ItemIcon = ({children}: {children: ReactNode}) => <>{children}</>
const ItemContent = ({children}: {children: ReactNode}) => <>{children}</>

function ItemLayout({children}: {children: ReactNode | ReactNode[]}) {
  const [slots] = useSlots(children, {icon: ItemIcon, content: ItemContent})

  return (
    <div className="items-top flex gap-1">
      <div className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-purple-600 outline outline-2 outline-gray-100 mt-1.5">
        {slots.icon}
      </div>

      <div className="flex-1 rounded bg-white p-1 shadow">
        {slots.content}
      </div>
    </div>
  )
}

function ItemRenderer({item}: {item: Item}) {
  return (
    <ItemLayout>
      <ItemIcon>
        <GitPullRequest
          className="h-[12px] w-[12px] text-white"
          strokeWidth={2}
        />
      </ItemIcon>

      <ItemContent>{item.content}</ItemContent>
    </ItemLayout>
  )
  // switch (item.type) {
  //   case 'comment':
  //     return <div>Comment: {item.content}</div>
  //   case 'edit':
  //     return <div>Edit: {item.content}</div>
  //   case 'pr':
  //     return <div>PR: {item.content}</div>
  //   default:
  //     return <div>Unsupported item type</div>
  // }
}

function ChatView() {
  const [items, setItems] = useState<Item[]>(itemsFixture)

  const addItem = (newItem: Item) => {
    setItems([...items, newItem])
  }

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="history flex flex-1 flex-col gap-2">
        {items.map((item) => (
          <div className="history-item" key={item.id}>
            <ItemRenderer item={item} />
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
