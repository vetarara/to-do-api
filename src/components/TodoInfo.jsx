
// ничего не знает про конкретные задачи, просто отображает значение, переданное извне

const TodoInfo = (props) => {
    const {
        total,
        done,
        onDeleteAllButtonClick
    } = props

    const hasTasks = total > 0

    return (
        <div className="todo__info">
            <div className="todo__total-tasks">
                Done {done} from {total}
            </div>
            {hasTasks && (
                <button
                    // button -  HTML-элемент, здесь onClick - событие кнопки, которое нельзя переименовывать
                    className="todo__delete-all-button"
                    type="button"
                    onClick={onDeleteAllButtonClick}
                // пользователь нажимает кнопку -> реакт вызывает onDeleteAllButtonClick(), а это на самом деле deleteAllTasks();
                >
                    Delete all
                </button>
            )}
        </div>
    )
}

export default TodoInfo