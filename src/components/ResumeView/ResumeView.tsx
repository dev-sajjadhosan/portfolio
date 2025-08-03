import { MdOutlineFileOpen } from 'react-icons/md'
import { TbDownload } from 'react-icons/tb'

const ResumeView = () => {
  const link =
    'https://docs.google.com/document/d/1E8Wpb1BBAwtDrozpW5xOCNHKXL3WY-jq_fCQzacO_P8/preview?tab=t.0'
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
                href="/mohammad-sajjad-hosan.pdf"
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
              src={`${link}#toolbar=0&zoom=2.3`}
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
