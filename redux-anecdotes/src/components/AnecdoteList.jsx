import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { removeMessage, setMessage } from "../reducers/notificationReducer"

const compareByVotes = (a, b) => {
  if (a.votes < b.votes) {
    return 1
  } else if (a.votes > b.votes) {
    return -1
  } else {
    return 0
  }
}

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const sortedAnecdotes = [...anecdotes].sort(compareByVotes)

    const filtered = sortedAnecdotes
      .filter(({ content }) => content.includes(filter))

    return filtered
  })

  const vote = (id) => {
    const votedAnecdote = anecdotes.find(a => a.id === id)
    dispatch(voteAnecdote(id))
    dispatch(setMessage(`you voted '${votedAnecdote.content}'`))
    setTimeout(() => {
      dispatch(removeMessage())
    }, 5000)
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList