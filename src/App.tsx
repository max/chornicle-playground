import ChangeMeter from './components/ChangeMeter'
import Editor from './components/Editor'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import Toolbar from './components/Toolbar'

function App() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0">
      <div className="flex h-full flex-col">
        <div className="flex-none border-b">
          <Toolbar />
        </div>

        <div className="flex flex-1">
          <div className="flex-1 border-r">
            <LeftSidebar />
          </div>

          <div className="max-w-3xl">
            <Editor />
          </div>

          <div className="flex-1 border-l">
            <RightSidebar />
          </div>
        </div>
      </div>

      <div className="fixed right-4 top-[240px] flex flex-col gap-4">
        <ChangeMeter size={4} />
        <ChangeMeter size={3} />
        <ChangeMeter size={1} />
        <ChangeMeter size={2} />
        <ChangeMeter size={4} />
      </div>
    </div>
  )
}

export default App
