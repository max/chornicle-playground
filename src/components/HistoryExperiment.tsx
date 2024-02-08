import {Folder, FolderOpen} from 'lucide-react'
import {ReactNode, useState} from 'react'

function SampleDocument() {
  return (
    <div className="grid h-[650px] w-[1000px] place-items-center bg-white shadow-md">
      Sample Document
    </div>
  )
}

function DiffChange({children}: {children: ReactNode}) {
  return (
    <span className="border-b-2 border-b-green-300 bg-green-100">
      {children}
    </span>
  )
}

function Snippet({children}: {children: ReactNode}) {
  return <div className="prose bg-white px-1 py-0.5 shadow">{children}</div>
}

function Annotation({children}: {children: ReactNode}) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex flex-col gap-1">
      <div
        className="flex items-center gap-1 text-sm text-neutral-500"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <Folder size={16} /> : <FolderOpen size={16} />} My group
        name
      </div>

      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}

function HistorySidebar() {
  return (
    <div className="flex min-w-20 flex-col gap-10">
      <Annotation>
        <Snippet>
          <DiffChange>This is a change</DiffChange>
        </Snippet>

        <Snippet>
          <DiffChange>This is a change</DiffChange>
        </Snippet>

        <Snippet>
          <DiffChange>This is a change</DiffChange>
        </Snippet>
      </Annotation>

      <Annotation>
        <Snippet>
          <DiffChange>This is a change</DiffChange>
        </Snippet>
      </Annotation>

      <Annotation>
        <Snippet>
          <DiffChange>This is a change</DiffChange>
        </Snippet>
      </Annotation>
    </div>
  )
}

function HistoryExperiment() {
  return (
    <div className="absolute inset-0 bg-neutral-300 p-8">
      <div className="flex gap-8">
        <SampleDocument />
        <HistorySidebar />
      </div>
    </div>
  )
}

export default HistoryExperiment
