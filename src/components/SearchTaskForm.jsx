import Field from "./Field"

const SearchTaskForm = (props) => {
    const {
        onSearchInput,
    } = props

    return (
        <form
            className="todo__form"
            // этого достаточно, чтобы нажатие Enter не перезагружало страницу
            onSubmit={(event) => event.preventDefault()}
        >
            <Field
                className='todo__field'
                label='Search task'
                id='search-task'
                type='search'
                // не нужно передавать в onSearchInput целый объект события, нам важен только текст из поля
                onInput={(event) => onSearchInput(event.target.value)}
            />
        </form>
    )
}

export default SearchTaskForm