import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/anecdoteFilter'

const Filter = () => {
    const dispatch = useDispatch()
    const handleFilter = (event) => {
        event.preventDefault()
        const filter = event.target.value
        dispatch(filterChange(filter))
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div className={style}>
            <input type="text" onChange={handleFilter} />
        </div>
    )
}

export default Filter