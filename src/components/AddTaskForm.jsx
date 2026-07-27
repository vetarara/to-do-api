import Button from "./Button"
import Field from "./Field"

const AddTaskForm = (props) => {
    const {
        addTask,
    } = props

    // по умолчанию браузер  при отправке формы перезагружает страницу, поэтому нужно объявить собственную функцию onSubmit
    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field
                className="todo__field"
                label="New task title"
                id='new-task'
            />
            <Button type="submit">Add</Button>
        </form>
    )
}

export default AddTaskForm