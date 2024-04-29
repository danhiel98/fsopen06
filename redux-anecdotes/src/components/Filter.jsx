import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const FilterAnecdotes = () => {
  const dispatch = useDispatch()

  return (
    <>
      filter <input type="text" onChange={({ target }) => dispatch(setFilter(target.value))} />
    </>
  )
}

export default FilterAnecdotes