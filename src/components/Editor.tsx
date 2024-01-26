import {ReactNode} from 'react'
import Maximize2Icon from './icons/Maximize2Icon'

function Editor({className}: {className?: string}) {
  return (
    <div className={className}>
      <div className="prose bg-white py-4">
        <h1 className="text-900 text-xl font-bold">
          <span className="font-mono text-gray-400">#</span> Make Something
          Wonderful
        </h1>
        <p>
          I came back down [to the San Francisco Bay Area] ’cause I decided I
          wanted to travel, but I was lacking the necessary funds.
        </p>
        <p>
          I came back down [to the San Francisco Bay Area] ’cause I decided I
          wanted to travel, but I was lacking the necessary funds.
        </p>
        <p>
          This was <AdditionDiffSpan>California</AdditionDiffSpan>. You can get
          LSD fresh-made from Stanford University. You can go sleep on the beach
          at night with your girlfriends and whatever meaningful others. You
          could … I didn’t really realize how different California was than the
          middle of America, and even to some extent the East Coast, until I
          traveled to those places. I’d never been to any of those places until
          my early twenties. California has a sense of{' '}
          <AdditionDiffSpan deletion={true}>
            experimentation about it
          </AdditionDiffSpan>
          , and a sense of openness about it—openness and new possibility—that I
          really didn’t appreciate till I went to other places.
        </p>

        <CollapsedDiffPlaceholder lineCount={4} />

        <p>
          So I volunteered to go; well, they asked me if I’d go, and I said I
          definitely would love to, but I’d like to take a leave of absence when
          I was there. So they let me do that, and I ended up in Switzerland and
          flew from Zurich to New Delhi. And I spent some time in India.
        </p>

        <CollapsedDiffPlaceholder lineCount={24} />

        <p>
          I’m stupefied to sort of summarize [my trip to India]. Anyone would
          have a hard time summarizing a meaningful experience of their life in
          a page. I mean, if I was William Faulkner, I might be able to do it
          for you, but I’m not.
        </p>
        <p>
          Coming back was more of a culture shock than going. All I really
          wanted to do [after returning to California] was to go find a grassy
          meadow and just sit. I didn’t want to drive a car. I didn’t want to go
          to San Francisco or do all these things. I didn’t want to do it. So I
          didn’t, for about three months. I just read and sat. When you are a
          stranger in a place, you notice things that you rapidly stop noticing
          when you become familiar.
        </p>
        <p>
          I was a stranger in America for the first time in my life, and so I
          saw things I’d never seen before. And I tried to pay attention to them
          for those three months because I knew that gradually, bit by bit, my
          familiarity would be gained again.
        </p>
      </div>
    </div>
  )
}

function CollapsedDiffPlaceholder({lineCount}: {lineCount: number}) {
  return (
    <div className="hidden-diff flex items-center justify-between gap-1 border-b border-t bg-gray-100 text-xs text-gray-500 shadow-inner-sm">
      <div></div>
      <div>{lineCount} lines hidden</div>
      <div className="text-gray-400">
        <Maximize2Icon />
      </div>
    </div>
  )
}

function AdditionDiffSpan({
  children,
  deletion
}: {
  children: ReactNode
  deletion?: boolean
}) {
  return (
    <>
      <span
        className={`rounded-sm ${deletion && 'border-r-4 border-r-red-300'} bg-green-100 text-green-700`}
      >
        {children}
      </span>
    </>
  )
}

export default Editor
