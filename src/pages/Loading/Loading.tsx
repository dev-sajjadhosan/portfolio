const LoadingPage = () => {
  return (
    <>
      <div className="flex flex-col text-primary gap-1.5 items-center justify-center h-screen">
        <span className="loading loading-xl loading-dots"></span>
        <h3 className="text-lg tracking-wide mt-1">Please wait</h3>
      </div>
    </>
  )
}

export default LoadingPage
