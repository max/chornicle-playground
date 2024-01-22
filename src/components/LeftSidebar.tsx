import * as Tabs from '@radix-ui/react-tabs'
import ClockIcon from './icons/ClockIcon'

function LeftSidebar() {
  return (
    <div>
      <Tabs.Root defaultValue="timeHistory">
        <Tabs.List className="flex justify-center gap-3 border-b p-1">
          <Tabs.Trigger
            className="data-[state=active]:text-blue-500"
            value="authorHistory"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="8"
                r="3.25"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></circle>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"
              ></path>
            </svg>
          </Tabs.Trigger>
          <Tabs.Trigger
            className="data-[state=active]:text-blue-500"
            value="timeHistory"
          >
            <ClockIcon />
          </Tabs.Trigger>
          <Tabs.Trigger
            className="data-[state=active]:text-blue-500"
            value="tagsHistory"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="15" cy="9" r="1" fill="currentColor"></circle>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 4.75H19.25V12L12.5535 18.6708C11.7544 19.4668 10.4556 19.445 9.68369 18.6226L5.28993 13.941C4.54041 13.1424 4.57265 11.8895 5.36226 11.1305L12 4.75Z"
              ></path>
            </svg>
          </Tabs.Trigger>
        </Tabs.List>

        <div className="relative text-sm">
          <div>
            <Tabs.Content value="authorHistory">Author</Tabs.Content>
            <Tabs.Content value="timeHistory">
              <div className="divide-y">
                {[...Array(100)].map((_, i) => (
                  <HistoryItem key={i} />
                ))}
              </div>
            </Tabs.Content>
            <Tabs.Content value="tagsHistory">Tags</Tabs.Content>
          </div>

          <div className="absolute right-2 top-4 flex items-center gap-1 rounded-lg bg-black p-1 pr-2 text-white shadow-md">
            <ClockIcon /> Wed 24
          </div>
        </div>
      </Tabs.Root>
    </div>
  )
}

function HistoryItem() {
  return (
    <div className="border-l-blue-600 p-1 hover:border-l-2">
      This is a change
    </div>
  )
}

export default LeftSidebar
