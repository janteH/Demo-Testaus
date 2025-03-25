type Todo = {

  date: string;
  description: string;
}

type TodoTableProps = {
  todos: Todo[];
}




export default function TodoTable(props: TodoTableProps) {
  return (
    <div>
      <table id="todotable">
        <tbody>
          {
            props.todos.map((todo: Todo, index: number) =>
              <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.description}</td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}