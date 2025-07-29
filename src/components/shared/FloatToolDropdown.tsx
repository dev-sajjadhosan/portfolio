import { TbCategory2 } from 'react-icons/tb'

const FloatToolDropdown = ({
  filter,
  handleFilter,
}: {
  filter: string
  handleFilter: (category: string, index: number) => void
}) => {
  return (
    <>
      <div className="lg:hidden fixed bottom-5 left-7 z-40">
        <details className="dropdown dropdown-top">
          <summary className="btn btn-primary btn-soft m-1">
            <TbCategory2 size={17} />
            View Categories
          </summary>
          <ul className="flex flex-col gap-1 dropdown-content bg-base-300 rounded-box z-10 w-xs p-7 shadow capitalize">
            <h3 className="flex items-center gap-1 mb-1.5">
              <TbCategory2 size={19} />
              Tech Categories
            </h3>
            {['frontend', 'backend', 'application', 'hosting', 'others'].map(
              (l, i) => (
                <li
                  onClick={() => handleFilter(l, i)}
                  className={`btn btn-sm justify-start btn-primary capitalize ${
                    filter === l ? 'btn-soft' : 'btn-ghost'
                  }`}
                >
                  <a>{l}</a>
                </li>
              ),
            )}
          </ul>
        </details>
      </div>
    </>
  )
}

export default FloatToolDropdown
