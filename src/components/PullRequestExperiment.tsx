import Editor from './Editor'

function PullRequestExperiment() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-gray-100">
      <div className="bg-white p-8 shadow-md">
        <div>
          <a href="#">Back to main</a>
        </div>

        <div>
          <h1 className="text-lg font-bold">
            Restructure arguments and reword introduction{' '}
            <span className="text-gray-500">#243</span>
          </h1>

          <div>
            <p>
              <span className="bold">Geoffrey Litt:</span> I spent some time
              this morning rewording the introduction as well as some open heart
              surgery on the order of arguments. What do you think?
            </p>

            <p className="text-right">
              <span className="bold">Max Schoening:</span> Sure, that can work.
              It's genuinely one of the best things.
            </p>

            <div>
              <input type="text" placeholder="Reply..." />
            </div>
            <button>Comment</button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl p-8">
        <Editor className="shadow-md" />
      </div>
    </div>
  )
}

export default PullRequestExperiment
