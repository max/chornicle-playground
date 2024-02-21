import {Clock4, ListFilter, Tag, User} from 'lucide-react'
import {useState} from 'react'

function HistoryFilterExperiment() {
  return (
    <div className="h-[100vh] w-[100vw] bg-gray-100 p-10">
      <HistoryFilter />
    </div>
  )
}

function HistoryFilter() {
  const [showFilterSettings, setShowFilterSettings] = useState(false)

  return (
    <div className="max-w-[400px] rounded border p-4 text-sm">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            className="w-full flex-1 rounded-full border border-gray-300 bg-gray-200 px-1.5 py-1"
            placeholder="Search history..."
            type="search"
          />

          <button
            className={`flex-0 block grid h-7 w-7 place-items-center rounded-full text-white ${showFilterSettings ? 'bg-blue-500' : 'bg-black'}`}
            onClick={() => setShowFilterSettings(!showFilterSettings)}
          >
            <ListFilter className="block" size={16} strokeWidth={2} />
          </button>
        </div>

        {showFilterSettings && <FilterSettings />}
      </div>
    </div>
  )
}

function TypeIcon({annotationType}: {annotationType: string}) {
  const symbol = annotationType[0].toUpperCase()

  const colorMap: Record<string, string> = {
    comment: 'bg-yellow-500 border-yellow-600',
    change: 'bg-green-500 border-green-600'
  }

  const colorClasses = colorMap[annotationType] || 'bg-gray-500 border-grat-500' // Default color if type is not found

  return (
    <div>
      <div
        className={`flex h-4 w-4 items-center justify-center rounded border ${colorClasses}`}
      >
        <span className="white font-medium text-white shadow-sm">{symbol}</span>
      </div>
    </div>
  )
}

function FilterSettings() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="text-[10px] font-bold uppercase text-gray-500">
          Group history
        </h2>

        <div className="flex justify-between gap-2 rounded-md border border border-gray-300 bg-gray-200 p-1">
          <div className="grid flex-1 place-items-center rounded-md bg-white p-1 shadow">
            <Tag size={16} strokeWidth={2} />
          </div>
          <div className="grid flex-1 place-items-center rounded border p-1">
            <Clock4 size={16} strokeWidth={2} />
          </div>
          <div className="grid flex-1 place-items-center rounded border p-1">
            <User size={16} strokeWidth={2} />
          </div>
        </div>
      </div>

      <h2 className="text-[10px] font-bold uppercase text-gray-500">
        Timespan
      </h2>

      <div className="relative flex flex-col gap-0.5 rounded-md border border border-gray-300 bg-gray-200 p-1">
        <div className="flex items-baseline justify-between">
          {[...Array(80)].map((_, i) => (
            <div
              className="h-[8px] w-[2px] rounded bg-green-400"
              style={{height: randomHeight()}}
            ></div>
          ))}
        </div>

        <div className="flex justify-between">
          {[...Array(80)].map((_, i) => (
            <div
              className="w-[2px] rounded bg-red-400"
              style={{height: randomHeight()}}
            ></div>
          ))}
        </div>

        <div className="absolute -bottom-[2px] -top-[2px] left-24 right-8 rounded-lg border-2 border-blue-600">
          <div className="absolute left-0 flex h-full w-[8px] flex-col items-center justify-center gap-[1px] bg-blue-600 pr-[2px]">
            <div className="h-[1px] w-[4px] bg-blue-100"></div>
            <div className="h-[1px] w-[4px] bg-blue-100"></div>
            <div className="h-[1px] w-[4px] bg-blue-100"></div>
          </div>

          <div className="absolute right-0 flex h-full w-[8px] flex-col items-center justify-center gap-[1px] bg-blue-600 pl-[2px]">
            <div className="h-[1px] w-[4px] bg-blue-100"></div>
            <div className="h-[1px] w-[4px] bg-blue-100"></div>
            <div className="h-[1px] w-[4px] bg-blue-100"></div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-[10px] font-bold uppercase text-gray-500">
          Filters
        </h2>

        <div>
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <TypeIcon annotationType="comment" />
            <div>Comments</div>
          </div>

          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <TypeIcon annotationType="change" />
            <div>Changes</div>
          </div>

          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <TypeIcon annotationType="group" />
            <div>Groups</div>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <TypeIcon annotationType="reviewed" />
            <div>Reviewed Items</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HistoryTrimmer() {
  const [range, setRange] = useState({start: 0, end: 100})

  const handleRangeChange = (value, type) => {
    setRange({...range, [type]: value})
  }

  return (
    <div className="flex space-x-2">
      <input
        type="range"
        min="0"
        max="100"
        value={range.start}
        onChange={(e) => handleRangeChange(e.target.value, 'start')}
        className="w-full"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={range.end}
        onChange={(e) => handleRangeChange(e.target.value, 'end')}
        className="w-full"
      />
    </div>
  )
}

function randomHeight() {
  return Math.floor(Math.random() * (8 - 2 + 1)) + 2
}

export default HistoryFilterExperiment
