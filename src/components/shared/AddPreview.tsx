import { TbPlaylistAdd, TbX } from 'react-icons/tb'
import { VscPreview } from 'react-icons/vsc'
import { useState } from 'react'
import { LuImagePlus } from 'react-icons/lu'
import ImageView from '../ui/ImageView'

type Preview = {
  name: string
  picture: string
  features: string[]
  description: string
}

type AddPreviewProps = {
  register?: (name: string) => void
  appendPreview: (preview: Preview) => void
}

const AddPreview = ({ appendPreview }: AddPreviewProps) => {
  const [name, setName] = useState('')
  const [picture, setPicture] = useState<string>('')
  const [description, setDescription] = useState('')
  const [features, setFeatures] = useState<string[]>([])
  const [featureInput, setFeatureInput] = useState('')
  const [localPreviews, setLocalPreviews] = useState('')

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setFeatures((prev) => [...prev, featureInput.trim()])
      setFeatureInput('')
    }
  }
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPicture(file as unknown as string) // store the file as a string (not ideal, but matches state type)
      setLocalPreviews(url) // still use URL for preview

      // Optional cleanup
      return () => URL.revokeObjectURL(url)
    }
  }

  const handleAddPreview = () => {
    if (name === '') return
    const newPreview: Preview = {
      name,
      picture,
      features,
      description,
    }

    appendPreview(newPreview)
    // setLocalPreviews((prev) => [...prev, newPreview])

    // Reset
    setName('')
    setPicture('')
    setLocalPreviews('')
    setDescription('')
    setFeatures([])

    const modal = document.getElementById('view_preview') as HTMLDialogElement
    modal?.close()
  }

  const cInput =
    'border-0 outline-0 bg-base-100 rounded-lg py-2 px-2.5 text-sm focus:outline outline-white/20 w-full'

  return (
    <dialog className="modal" id="view_preview">
      <div className="modal-box max-w-2xl w-11/12 p-11 bg-base-300">
        <div className="flex items-center justify-between">
          <h3 className="text-md flex items-center gap-1">
            <VscPreview size={21} />
            Create Preview
          </h3>
          <form method="dialog">
            <button className="btn btn-sm btn-primary btn-soft">
              <TbX size={17} />
              Close
            </button>
          </form>
        </div>

        <div className="mt-5">
          <form className="flex flex-col gap-2 items-center">
            <div className="w-full">
              {localPreviews ? (
                <ImageView
                  url={localPreviews}
                  first={setLocalPreviews}
                  second={setPicture}
                />
              ) : (
                <label
                  htmlFor="picture"
                  className="card mx-auto w-xs h-28 items-center justify-center bg-base-100 cursor-pointer transition-all duration-100 active:scale-95"
                >
                  <LuImagePlus size={23} />
                  Preview Picture
                  <input
                    value={picture}
                    hidden
                    type="file"
                    id="picture"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e)}
                  />
                </label>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2 w-full">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Preview Name"
                className={cInput}
              />

              <div className={cInput + 'flex flex-row items-center justify-between gap-1'}>
                <input
                  type="text"
                  className='border-0 outline-0 text-sm w-4/5 px-1.5'
                  placeholder="Add Features"
                  value={featureInput}
                  onChange={(e) => setFeatureInput(e.target.value)}
                />
                <button
                  className="btn btn-sm btn-primary btn-soft px-4"
                  type="button"
                  onClick={handleAddFeature}
                  disabled={featureInput === '' ? true : false}
                >
                  Tech
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 w-full my-1">
              {features.map((f, i) => (
                <span
                  key={i}
                  className="btn btn-xs btn-primary btn-soft cursor-pointer"
                  onClick={() => setFeatures((p) => p.filter((fi) => fi !== f))}
                >
                  {f}
                </span>
              ))}
            </div>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className={cInput}
              rows={5}
            />

            <button
              type="button"
              className="btn btn-primary btn-soft px-7"
              onClick={handleAddPreview}
            >
              <TbPlaylistAdd size={17} />
              Add Preview
            </button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default AddPreview
