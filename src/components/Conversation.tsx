function Conversation() {
  return (
    <div className="flex h-full flex-col">
      <main className="flex-1 space-y-4 overflow-auto p-4">
        <div className="flex flex-col items-start gap-2">
          <span className="text-xs text-gray-500">
            Geoffrey Litt • 10:15 AM
          </span>
          <div className="max-w-xs rounded-lg bg-gray-200 p-3 dark:bg-gray-800">
            I rewrote most of the introduction and also restructured the core
            arugments towards the bottom.
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-xs text-gray-500">You • 10:16 AM</span>
          <div className="max-w-xs rounded-lg bg-blue-500 p-3 text-white">
            This works a lot better.
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="text-xs text-gray-500">
            Geoffrey Litt • 10:18 AM
          </span>
          <div className="max-w-xs rounded-lg bg-gray-200 p-3 dark:bg-gray-800">
            Great. I'll merge this in.
          </div>
        </div>
      </main>
      <footer className="border-t p-4">
        <form className="flex items-center gap-2">
          <textarea
            className="bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full flex-1 rounded-md border border-gray-300 p-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700"
            placeholder="Type your message..."
          ></textarea>
          <button className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 w-20 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Send
          </button>
        </form>
      </footer>
    </div>
  )
}

export default Conversation
