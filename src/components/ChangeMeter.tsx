function ChangeMeter({size}: {size: number}) {
  return (
    <div className="flex justify-end gap-0.5">
      {[...Array(size)].map((i) => {
        return (
          <div
            className={`h-1 w-1 rounded-full ${Math.random() < 0.5 ? 'bg-green-500' : 'bg-red-500'}`}
          ></div>
        )
      })}
    </div>
  )
}

export default ChangeMeter
