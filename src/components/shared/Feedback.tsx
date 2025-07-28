const reactions = [
  { id: 1, emoji: '😠', label: 'Angry' },
  { id: 2, emoji: '😐', label: 'Meh' },
  { id: 3, emoji: '🙂', label: 'Nice' },
  { id: 4, emoji: '😍', label: 'Loved it' },
  { id: 5, emoji: '🤯', label: 'Mind Blown' },
]

const Feedback = () => {
  return (
    <dialog className="modal" id="feedback_modal">
      <div className="modal-box w-11/12 max-w-2xl p-11 shadow shadow-accent">
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-primary font-light">
            How did the portfolio feel?
          </h3>
          <form method="dialog">
            <button className="btn btn-sm btn-soft btn-error px-5">
              Close
            </button>
          </form>
        </div>

        <div className="mt-4 flex flex-col justify-center items-center">
          <p className="text-sm mb-1 text-gray-400"></p>
          <div className="flex gap-2 items-center">
            {reactions.map((emoji, i) => (
              <button
                key={i}
                className="hover:scale-105 transition btn btn-sm  btn-ghost text-xl tooltip"
                data-tip={emoji.label}
              >
                {emoji.emoji}
              </button>
            ))}
          </div>
        </div>

        <form className="flex flex-col gap-3 mt-5 text-primary">
          <input
            type="text"
            placeholder="What's your name, 👀"
            className="input input-primary input-ghost w-full"
          />
          <input
            type="email"
            placeholder="Drop your email 📬"
            className="input input-primary input-ghost w-full"
          />
          <textarea
            placeholder="Tell me what you loved, hated, or wanna see next... Let it out! 💬"
            className="textarea textarea-primary textarea-ghost w-full"
            rows={5}
          />
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-primary file-input-ghost w-full"
          />
          <button className="btn btn-primary btn-soft mt-2 w-1/2 mx-auto">
            Send it 🚀
          </button>
        </form>

        <p className="text-sm text-center mt-4 italic text-gray-300">
          I actually read every feedback. Your words help me level up. 💖
        </p>
      </div>
    </dialog>
  )
}
export default Feedback
