import { TbTrash } from 'react-icons/tb'

interface ImageViewProps {
  url: string
  first: (a: string) => void
  second?: (a: string) => void
  size?: number
}

const ImageView = ({ url, first, second, size = 150 }: ImageViewProps) => {
  return (
    <>
      <div className="card relative bg-base-100 p-5">
        <img src={url} alt="" width={size} className="mx-auto" />
        <button
          type="button"
          className="btn btn-sm btn-ghost text-red-500 mt-1.5 mx-auto tooltip tooltip-right absolute bottom-5"
          data-tip="Trash"
          onClick={(e) => {
            e.preventDefault()
            first('')
            if (second) {
              second('')
            }
          }}
        >
          <TbTrash size={17} />
        </button>
      </div>
    </>
  )
}

export default ImageView
