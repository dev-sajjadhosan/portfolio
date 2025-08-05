import { useFieldArray, useForm, useWatch } from 'react-hook-form'
import { LuImagePlus } from 'react-icons/lu'
import type { ProjectDocument } from '../../../types'
import AddPreview from '../../components/shared/AddPreview'
import ShowPreview from '../../components/shared/ShowPreview'
import { VscOpenPreview, VscPreview } from 'react-icons/vsc'
import { useState } from 'react'
import ImageView from '../../components/ui/ImageView'
// import useAuth from '../../hooks/useAuth'
// import tech from '../../utils/shared'

const CreateProject = () => {
  // const { post } = useAuth()
  const [picture, setPicture] = useState('')
  const [logo, setLogo] = useState('')
  // const [tech, setTech] = useState([])

  const {
    register,
    handleSubmit,
    control,
    setValue,
    // getValues,
    // formState: { errors },
  } = useForm<ProjectDocument>({
    defaultValues: {
      name: '',
      type: '',
      status: '',
      shortVideo: '',
      isVideo: false,
      isFigma: false,
      level: '',
      picture: '',
      logo: '',
      figma: '',
      repo: { parent: '', client: '', server: '' },
      live: '',
      technologies: [],
      newTechnologies: [],
      creatingJourney: '',
      features: [],
      comingFeatures: [],
      description: '',
      previews: [],
      reactions: [],
      timeline: { start: '', end: '', duration: '' },
      feedbacks: [],
    },
  })

  const isVideo = useWatch({ control, name: 'isVideo' })
  const isFigma = useWatch({ control, name: 'isFigma' })
  const {
    fields: previewFields,
    append: appendPreview,
    remove: removePreview,
  } = useFieldArray({ control, name: 'previews' })

  const onSubmit = (data: ProjectDocument) => {
    console.log(data)
  }

  const cInput =
    'border-0 outline-0 bg-base-100 rounded-lg py-3 px-2.5 text-sm focus:outline outline-white/20'
  const cdInput =
    'border-0 outline-0 bg-base-100 rounded-lg py-3 px-2.5 text-sm focus:outline outline-white/20 flex items-center gap-1'

  return (
    <>
      <AddPreview appendPreview={appendPreview} />
      <ShowPreview previews={previewFields} removePreview={removePreview} />
      <div className="p-9 max-w-5xl mx-auto text-primary">
        <h3 className="text-xl text-center">Listed your recipe on the menu</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-3 mt-9"
        >
          <div className="grid grid-cols-3 gap-2">
            {picture ? (
              <ImageView url={picture} first={setPicture} />
            ) : (
              <label
                htmlFor="picture"
                className="card gap-1 h-40 items-center justify-center bg-base-100 transition-all duration-100 active:scale-95 text-sm"
              >
                <LuImagePlus size={23} />
                Project Banner
                <input
                  {...register('picture')}
                  hidden
                  type="file"
                  id="picture"
                  onChange={(e) => {
                    if (e.target.files && e.target.files?.[0]) {
                      const url = URL.createObjectURL(e.target.files?.[0])
                      setPicture(url)
                      setValue('picture', url)
                    }
                  }}
                />
              </label>
            )}

            {logo ? (
              <ImageView url={logo} first={setLogo} size={110} />
            ) : (
              <label
                htmlFor="logo"
                className="text-sm card gap-1 h-full items-center justify-center bg-base-100 transition-all duration-100 active:scale-95"
              >
                <LuImagePlus size={23} />
                Project Logo
                <input
                  {...register('logo')}
                  hidden
                  type="file"
                  id="logo"
                  onChange={(f) => {
                    if (f.target.files && f.target.files?.[0]) {
                      const url = URL.createObjectURL(f.target.files?.[0])
                      setLogo(url)
                      setValue('logo', url)
                    }
                  }}
                />
              </label>
            )}

            <div className="card gap-1.5 items-center justify-center p-9 bg-base-100">
              <button
                type="button"
                onClick={() =>
                  (
                    document.getElementById('previews') as HTMLDialogElement
                  )?.showModal()
                }
                className="btn btn-sm btn-primary btn-ghost px-5"
              >
                <VscOpenPreview size={21} />
                Show Preview
              </button>
              <button
                type="button"
                onClick={() =>
                  (
                    document.getElementById('view_preview') as HTMLDialogElement
                  )?.showModal()
                }
                className="btn btn-sm btn-secondary px-5"
              >
                <VscPreview size={21} />
                Add Preview
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <input
              {...register('name', { required: true })}
              placeholder="Project Name"
              className={cInput}
            />
            <input
              {...register('live')}
              placeholder="Live URL"
              className={cInput}
            />
            <select {...register('type')} className="select">
              <option defaultChecked>Select Type</option>
              <option value="Solo">Solo</option>
              <option value="Team">Team</option>
              <option value="Client">Client</option>
            </select>

            <select {...register('status')} className="select">
              <option defaultChecked>Select Status</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Planned">Planned</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className={cdInput}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" {...register('isVideo')} />
              </label>
              <input
                {...register('shortVideo')}
                placeholder="Short Video URL"
                disabled={!isVideo}
                className="border-0 outline-0 py-0.5 px-1 text-sm w-full"
              />
            </div>

            <div className={cdInput}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" {...register('isFigma')} />
              </label>
              <input
                {...register('figma')}
                placeholder="Figma File URL"
                disabled={!isFigma}
                className="border-0 outline-0 py-0.5 px-1 text-sm w-full"
              />
            </div>

            <select {...register('level')} className="select">
              <option defaultChecked>Select Level</option>
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Professional">Professional</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <input
              {...register('repo.parent')}
              placeholder="Parent Repo"
              className={cInput}
            />
            <input
              {...register('repo.client')}
              placeholder="Client Repo"
              className={cInput}
            />
            <input
              {...register('repo.server')}
              placeholder="Server Repo"
              className={cInput}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <textarea
              {...register('creatingJourney')}
              placeholder="Creating Journey"
              className={cInput}
            />
            <textarea
              {...register('description')}
              placeholder="Description"
              rows={7}
              className={cInput}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="date"
              {...register('timeline.start')}
              className={cInput}
            />
            <input
              type="date"
              {...register('timeline.end')}
              className={cInput}
            />
            <input
              {...register('timeline.duration')}
              placeholder="Duration"
              className={cInput}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div
              className={
                cInput + 'flex flex-row items-center justify-between gap-1'
              }
            >
              <input
                type="text"
                className="border-0 outline-0 text-sm w-4/5 px-1.5"
                placeholder="Add Technologies"
                // value={featureInput}
                // onChange={(e) => setFeatureInput(e.target.value)}
              />
              <button
                className="btn btn-sm btn-primary btn-soft px-4"
                type="button"
                // onClick={handleAddFeature}
                // disabled={featureInput === '' ? true : false}
              >
                Add
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-4 mx-auto w-1/3">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default CreateProject
