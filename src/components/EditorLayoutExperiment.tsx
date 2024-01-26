import useScrollPosition from '@react-hook/window-scroll'
import ChangeMeter from './ChangeMeter'
import DraftList from './DraftList'
import Editor from './Editor'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Screen from './Screen'
import Toolbar from './Toolbar'
import HomeIcon from './icons/HomeIcon'
import Share3Icon from './icons/Share3Icon'

export default function EditorLayoutExperiment() {
  const scrollY = useScrollPosition(60)

  return (
    <Screen>
      <div className="flex h-full flex-col">
        <div
          className={`${scrollY > 0 && 'bg-white/80 shadow-md backdrop-blur-md'} sticky top-0 flex-none`}
        >
          <Toolbar>
            <Toolbar.LeadingContent>
              <HomeIcon />
            </Toolbar.LeadingContent>

            <Toolbar.TitleContent>
              Make Something Wonderful
            </Toolbar.TitleContent>

            <Toolbar.TrailingContent>
              <Share3Icon />
            </Toolbar.TrailingContent>
          </Toolbar>
        </div>

        <div className="border-b border-t bg-gray-100 shadow-inner-sm">
          <DraftList />
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
    </Screen>
  )
}
