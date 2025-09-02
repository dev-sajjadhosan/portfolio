import { MdOutlineFileOpen } from 'react-icons/md'
import { TbDownload } from 'react-icons/tb'

const ResumeView = () => {
  const link =
    'https://drive.google.com/file/d/1OFnKMsbrO84bZlyz8J07-5XH4Khe84xg/view?usp=sharing'
  return (
    <>
      <dialog className="modal" id="resume_modal">
        <div className="modal-box w-11/12 max-w-3xl h-11/12 text-primary shadow shadow-accent">
          <div className="flex justify-between items-center">
            <h3 className="text-md ">Mohammad Sajjad Hosan - Resume</h3>
            <div className="flex items-center gap-3">
              <button
                className="btn btn-sm btn-primary btn-ghost"
                onClick={() => {
                  window.open(link, '_blank')
                }}
              >
                <MdOutlineFileOpen size={17} />
                View on Tab
              </button>
              <a
                className="btn btn-sm btn-info"
                href="/Mohammad_Sajjad_Hosan.pdf"
                download
              >
                <TbDownload size={17} />
                Download
              </a>
              <form method="dialog">
                <button className="btn btn-sm btn-error btn-ghost">
                  Close
                </button>
              </form>
            </div>
          </div>
          <div className="mt-7">
            <iframe
              src={`${'/Mohammad_Sajjad_Hosan.pdf'}#toolbar=0`}
              className="w-full h-[30rem] border-0"
              contentEditable={false}
            ></iframe>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default ResumeView
