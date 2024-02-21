import ChatView from './ChatView'
import Screen from './Screen'

function ChatViewExperiment() {
  return (
    <Screen className="grid place-items-center bg-neutral-100 p-4">
      <div className="h-full max-w-[300px] rounded border p-2">
        <ChatView />
      </div>
    </Screen>
  )
}

export default ChatViewExperiment
