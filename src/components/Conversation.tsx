import Avatar from './Avatar'

function Conversation() {
  return (
    <div className="flex h-full flex-col">
      <main className="flex-1 space-y-4 overflow-auto p-4">
        <div className="flex flex-col gap-2 border-b">
          <div className="flex items-center gap-2 text-sm">
            <Avatar color="purple" initials="GL" />
            <span>Geoffrey Litt</span>{' '}
            <span className="text-gray-400">25 minutes ago</span>
          </div>

          <div>
            I rewrote most of the introduction and also restructured the core
            arugments <a href="#">towards the bottom</a>.
          </div>
        </div>

        <div className="flex flex-col gap-2 border-b">
          <div>
            <span className="text-xs text-gray-500">
              <Avatar color="green" initials="MS" /> You • 10:16 AM
            </span>

            <div className="rounded-lg">This works a lot better.</div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm">
            <Avatar color="purple" initials="GL" />
            <span>Geoffrey Litt</span>{' '}
            <span className="text-gray-400">25 minutes ago</span>
          </div>

          <div>Great. I'll merge this in.</div>
        </div>
      </main>

      <footer className="border-t p-4">
        <form className="flex items-center gap-2">
          <input
            className="bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full flex-1 rounded-full border border-gray-300 p-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700"
            placeholder="Reply..."
          />
        </form>
      </footer>
    </div>
  )
}

export default Conversation
