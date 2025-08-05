import { TbTrash, TbX } from 'react-icons/tb'

type PreviewField = {
  id: string | number
  name: string
  picture?: string | object
  description?: string
}

type ShowPreviewProps = {
  removePreview: (index: number) => void
  previews: PreviewField[]
}

const ShowPreview = ({ removePreview, previews }: ShowPreviewProps) => {
  return (
    <>
      <dialog className="modal" id="previews">
        <div className="modal-box max-w-4xl w-11/12 p-7 overflow-y-auto h-11/12 shadow shadow-accent">
          <div className="flex items-center justify-between">
            <h3 className="text-lg">Previews</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-primary btn-soft">
                <TbX size={17} />
                Close
              </button>
            </form>
          </div>
          {previews.length <= 0 ? (
            <div className="flex items-center justify-center min-h-5/6">
              <div className="card p-11 bg-base-200 items-center justify-center w-sm mx-auto">
                <h3 className="text-2xl">No Preview here.</h3>
              </div>
            </div>
          ) : (
            <div className="my-5 grid grid-cols-2 gap-5">
              {previews.map((field, index) => (
                <div
                  key={field.id}
                  className="card p-4 border border-base-300 rounded-md space-y-2 relative"
                >
                  <button
                    type="button"
                    className="absolute top-2 right-2 btn btn-sm text-error btn-ghost  tooltip"
                    data-tip="Trash"
                    onClick={() => removePreview(index)}
                  >
                    <TbTrash size={17} />
                  </button>
                  <p>
                    <span className="font-medium">Name:</span> {field.name}
                  </p>
                  <img
                    src={
                      field.picture && typeof field.picture !== 'string'
                        ? URL.createObjectURL(field.picture as Blob)
                        : (field.picture as string) || ''
                    }
                    alt=""
                    width={150}
                  />
                  <p className="text-xs">
                    <span className="font-medium">Description:</span>{' '}
                    {field.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </dialog>
    </>
  )
}

export default ShowPreview
