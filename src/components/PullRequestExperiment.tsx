import useWindowScroll from '@react-hook/window-scroll'
import Conversation from './Conversation'
import Editor from './Editor'
import Screen from './Screen'
import Toolbar from './Toolbar'
import ChevronLeftIcon from './icons/ChevronLeftIcon'
import Share3Icon from './icons/Share3Icon'
import WriteNoteIcon from './icons/WriteNoteIcon'
import {useState} from 'react'
import Avatar from './Avatar'
import DotsHorizontalIcon from './icons/DotsHorizontal'
import Maximize2Icon from './icons/Maximize2Icon'
import WindowExpandIcon from './icons/WindowExpandIcon'

function PullRequestExperiment() {
  const scrollY = useWindowScroll(60)
  const [chatIsShowing] = useState(false)

  return (
    <Screen className="bg-gray-100">
      <div
        className={`${scrollY > 0 ? 'bg-white/80 shadow-md backdrop-blur-md' : 'border-b bg-white'} sticky top-0 flex-none`}
      >
        <Toolbar>
          <Toolbar.LeadingContent>
            <ChevronLeftIcon />
          </Toolbar.LeadingContent>

          <Toolbar.TitleContent>
            Restructure arguments and reword introduction
          </Toolbar.TitleContent>

          <Toolbar.TrailingContent>
            <Share3Icon />
          </Toolbar.TrailingContent>
        </Toolbar>
      </div>

      {chatIsShowing && (
        <div className="bg-white shadow-md">
          <div className="container mx-auto py-8">
            <div className="border-b pb-4">
              <div>
                <h1 className="text-lg">
                  <span className="font-bold">
                    Restructure arguments and reword introduction
                  </span>{' '}
                  <span className="text-gray-500">#243</span>
                </h1>
              </div>

              <div className="mt-1 flex items-center gap-2">
                <div className="inline-flex items-center rounded-full bg-gray-500 px-2 py-1 text-sm font-bold text-white">
                  <WriteNoteIcon inline={true} />
                  <div>Draft</div>
                </div>

                <div className="text-sm">
                  Started 43 minutes ago by <a href="#">Geoffrey Litt</a>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Conversation />
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-6 p-8">
        <div className="flex-1"></div>

        <div className="mx-auto max-w-3xl">
          <Editor className="shadow-md" />
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-6">
            <Draft />
            <Draft />
            <Draft />
          </div>
        </div>
      </div>
    </Screen>
  )
}

function Comment({name, createdAt, content, color = 'gray'}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 p-1.5">
        <div className="flex-0">
          <Avatar color={color} name={name} />
        </div>

        <div className="flex-1">
          <div className="font-bold">{name}</div>
          <div className="text-xs text-gray-400">{createdAt}</div>
        </div>

        <div className="flex-0">
          <DotsHorizontalIcon />
        </div>
      </div>

      <div className="p-1.5 pt-0">
        <p>
          I thought I'd try and make this intro a lot less verbose. What do you
          think?
        </p>
      </div>
    </div>
  )
}

function Dot() {
  const colors = ['bg-blue-600 ring-blue-200', 'bg-gray-500 ring-gray-200']

  const [colorIndex, setColorIndex] = useState(0)

  const handleClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
  }

  return (
    <div
      className={`absolute -left-4 top-[8px] h-[8px] w-[8px] rounded-full ring-2 ${colors[colorIndex]}`}
      onClick={handleClick}
    ></div>
  )
}

function Draft() {
  return (
    <div className="relative">
      <Dot />

      <div className="flex items-center justify-between text-gray-500">
        <div className="text-xs font-semibold text-blue-600">Draft #243</div>

        <div>
          <WindowExpandIcon />
        </div>
      </div>

      <div className="rounded bg-white text-sm shadow-md ring-2 ring-blue-600">
        <div>
          <div className="rounded-t border-l border-r border-t border-red-200 bg-red-100 px-1.5 py-1 text-red-700">
            I came back down [to the San Francisco Bay Area] ’cause I decided I
            wanted to travel, but I was lacking the necessary funds.
          </div>

          <div className="border border-green-400 bg-green-200 px-1.5 py-1 text-green-800">
            I came to the San Francisco because I decided I wanted to travel,
            but I was lacking the funds.
          </div>
        </div>

        <div className="divide-y">
          <Comment name="Geoffrey Litt" color="green" createdAt="5 hours ago" />
          <Comment
            name="Paul Sonnentag"
            color="purple"
            createdAt="4 hours ago"
          />
        </div>

        <div className="border-t p-1.5">
          <input
            className="border-gray-200 bg-gray-100 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100"
            placeholder="Leave a comment..."
            type="text"
          />
        </div>
      </div>
    </div>
  )
}
export default PullRequestExperiment
