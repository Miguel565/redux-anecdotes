import { useDispatch } from 'redux'
import { filterChange } from '../reducers/anecdoteFilter'

const Filter = () => {
    const dispatch = useDispatch()
    const handleFilter = (event) => {
        event.preventDefault()
        dispatch(filterChange(event.target.filter.value))
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div className={style}>
            <input type="text" name="filter" onChange={handleFilter} />
        </div>
    )
}

export default Filter