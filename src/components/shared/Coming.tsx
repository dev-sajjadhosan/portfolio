import { TbHourglassEmpty } from 'react-icons/tb'

const ComingSoon = () => {
  return (
    <dialog className="modal" id="coming_view">
      <div className="modal-box p-7 w-11/12 shadow shadow-accent text-primary">
        <div className="flex flex-col items-center justify-center mt-3">
          <TbHourglassEmpty size={45} />
          <div className="text-center mt-5">
            <p className="text-lg text-gray-500">Stay tuned for updates!</p>
            <p className="text-sm text-gray-400 mb-3">
              We are working hard to bring you something amazing.
            </p>
            <form method="dialog">
              <button className="btn btn-sm btn-primary btn-soft">Close</button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default ComingSoon
