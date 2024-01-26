const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0].toUpperCase())
    .join('')

function Avatar({src, name, color}) {
  const initials = getInitials(name)

  const colors = {
    purple: 'bg-purple-300 text-purple-800',
    green: 'bg-green-300 text-green-800',
    blue: 'bg-blue-300 text-blue-800',
    red: 'bg-red-300 text-red-800',
    yellow: 'bg-yellow-300 text-yellow-800',
    indigo: 'bg-indigo-300 text-indigo-800',
    pink: 'bg-pink-300 text-pink-800',
    gray: 'bg-gray-300 text-gray-800'
  }

  return (
    <span
      className={`inline-flex h-[32px] w-[32px] items-center justify-center rounded-full text-sm font-bold ${colors[color]}`}
    >
      {src ? <img src={src} /> : initials}
    </span>
  )
}

export default Avatar
