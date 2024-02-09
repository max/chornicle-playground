// import EditorLayoutExperiment from './components/EditorLayoutExperiment'
// import HistoryFilterExperiment from './components/HistoryFilterExperiment'
// import PullRequestExperiment from './components/PullRequestExperiment'
// import HistoryExperiment from './components/HistoryExperiment'

import {useRef, useState} from 'react'
import Screen from './components/Screen.tsx'
import {AnimatePresence, motion} from 'framer-motion'
import Markdown from 'react-markdown'
import {useHotkeys} from 'react-hotkeys-hook'

const PAGE_OFFSET = 20
const PAGES = [
  {id: 1, name: 'Main'},
  {id: 2, name: "Geoffrey's Edit"}
]
const SCALE_FACTOR = 0.05

function move(array: any[], moveIndex: number, toIndex: number) {
  /* #move - Moves an array item from one position in an array to another.

     Note: This is a pure function so a new array will be returned, instead
     of altering the array argument.

    Arguments:
    1. array     (String) : Array in which to move an item.         (required)
    2. moveIndex (Object) : The index of the item to move.          (required)
    3. toIndex   (Object) : The index to move item at moveIndex to. (required)
  */
  let itemRemovedArray = [
    ...array.slice(0, moveIndex),
    ...array.slice(moveIndex + 1, array.length)
  ]
  return [
    ...itemRemovedArray.slice(0, toIndex),
    array[moveIndex],
    ...itemRemovedArray.slice(toIndex, itemRemovedArray.length)
  ]
}

const SAMPLE_TEXT = `# Copy of Embark demo email

\`\`\`
subject: Embark travel planner demo
to: user@user.com
cc: geoffrey, paul, alex (for reply purposes)
\`\`\`

Hi {name},  
Thanks for reaching out! We'd love for you to try Embark, our flexible outliner for travel planning.

Sorry that it took us a while to get back to you. If you're wondering "What is Embark again?", [the essay](https://www.inkandswitch.com/embark/) might help refresh your memory.

Before you dive in, a disclaimer: **Embark is a research prototype, not a product.** While we've used Embark to plan our own trips successfully, it has some rough edges:

- Data loss is possible. If you make plans that you care about, we recommend taking screenshots as a backup.
- Although we promise not to look at your data, we haven't focused on security, so we don't recommend storing sensitive information in Embark.
- Please don't share the demo link widely, this is just for you.
- Expect some glitches.

OK, if you're still here after that disclaimer, here's the process to try Embark!

1. **Watch the [tutorial video](https://www.loom.com/share/6f40f0c83de24675ab76c7b274f9c447?sid=bf17e83a-da73-4f0e-92bb-6ddddad34cbc)**
2. **Access the demo: [Embark Demo](https://secret-embark-demo.vercel.app)**
3. **Share your feedback!**

Please reply-all to this email and let us know your thoughts or questions.

The most helpful feedback would be ways that you found Embark valuable or unhelpful when trying to plan a real upcoming trip. Screenshots or Loom videos are great if you're comfortable sharing.

Your thoughts will help inform our future work. While we don't plan to iterate on Embark specifically, we are planning to incorporate an improved version of the ideas into our upcoming work on malleable software.

Thanks so much!  
Paul, Geoffrey, Alex, and the Ink & Switch team`

function Page() {
  return (
    <div className="prose h-full w-full overflow-scroll p-4">
      <Markdown>{SAMPLE_TEXT}</Markdown>
    </div>
  )
}

function PageStack() {
  const [pages, setPages] = useState(PAGES)
  const [showLabels, setShowLabels] = useState(false)

  useHotkeys('ctrl+x', () => {
    moveToEnd(0)
  })

  const moveToEnd = (from: number) => {
    setPages(move(pages, from, pages.length - 1))
  }

  const constraintsRef = useRef(null)

  return (
    <motion.div className="relative h-[1000px] w-[800px]">
      {pages.map((page, index) => {
        const canDrag = index === 0

        return (
          <motion.div
            animate={{
              left: index * -PAGE_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: PAGES.length - index
            }}
            className="absolute h-[1000px] w-[800px] origin-left rounded bg-white shadow"
            key={page.id}
            ref={constraintsRef}
            whileDrag={{rotate: 2}}
            drag={canDrag ? 'x' : false}
            dragSnapToOrigin
            dragElastic={0.8}
            onDragStart={() => setShowLabels(true)}
            onDragEnd={(event, info) => {
              setShowLabels(false)
              if (Math.abs(info.point.x) > 1500) {
                moveToEnd(index)
              }

              if (Math.abs(info.point.x) > 2000) {
                alert('Foo')
              }
            }}
          >
            <AnimatePresence>
              {showLabels && (
                <motion.div
                  className="absolute -top-8 rounded-full bg-black/90 px-1.5 py-0.5 text-white"
                  animate={{opacity: 1, top: -35}}
                  exit={{opacity: 0, top: 0}}
                  initial={{opacity: 0, top: 0}}
                  transition={{duration: 0.2}}
                >
                  {page.name}
                </motion.div>
              )}
            </AnimatePresence>

            <Page />
          </motion.div>
        )
      })}
    </motion.div>
  )
}

function SpatialExperiment() {
  return (
    <Screen className="absolute inset-0 flex items-center justify-center bg-neutral-200">
      <PageStack />
    </Screen>
  )
}

function App() {
  // return <EditorLayoutExperiment />
  // return <PullRequestExperiment />
  // return <HistoryFilterExperiment />
  // return <HistoryExperiment />
  return <SpatialExperiment />
}

export default App
