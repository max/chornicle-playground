import HomeIcon from './icons/HomeIcon'
import ShareIcon from './icons/Share3Icon'

function Toolbar() {
  return (
    <div className="flex justify-between px-4 py-3 text-sm text-gray-500">
      <div className="flex-none">
        <HomeIcon />
      </div>
      <div className="flex-1 text-center">Make Something Wonderful</div>
      <div className="flex-none">
        <ShareIcon />
      </div>
    </div>
  )
}

export default Toolbar
