function DraftList() {
  return (
    <div className="flex justify-center gap-4 p-4">
      <DraftItem key={0} id={0} />

      {[...Array(6)].map((_, i) => (
        <DraftItem key={i + 1} id={i + 1} />
      ))}
    </div>
  )
}

function DraftItem({id}: {id: number}) {
  return (
    <div className="text-xs">
      <div className="h-[128px] w-[96px] rounded bg-white p-1 shadow-md">
        My draft {id}
      </div>

      <div className="mt-1 text-center">Draft Title</div>
    </div>
  )
}

export default DraftList
