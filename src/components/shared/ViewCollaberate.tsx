const ViewCollaborate = () => {
  return (
    <>
      <dialog className="modal" id="view_collaberate">
        <div className="modal-box max-w-xl w-11/12 p-7 text-primary shadow shadow-accent">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-light">Request Collaboration</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-primary btn-soft">Close</button>
            </form>
          </div>
          <form action="" className="card gap-1.5 mt-5">
            <input
              type="text"
              name="name"
              className="w-full border-0 focus:border-b border-gray-400 outline-0 py-2 px-3 text-sm"
              placeholder="Your name"
              required
            />
            <input
              type="text"
              name="name"
              className="w-full border-0 focus:border-b border-gray-400 outline-0 py-2 px-3 text-sm"
              placeholder="Your email"
              required
            />
            <textarea
              className="w-full border-0 focus:border-b border-gray-400  outline-0 py-2 px-3 text-sm"
              rows={5}
              name="message"
              placeholder="Type your message here..."
              required
            ></textarea>
            <button
              className="btn btn-sm btn-primary btn-soft mt-5 mx-auto"
              type="submit"
            >
              Request Collaboration
            </button>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default ViewCollaborate
