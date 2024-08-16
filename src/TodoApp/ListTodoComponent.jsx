export default function ListTodoComponent() {

  const today = new Date()
  const targetDate = new Date(today.getFullYear()+12,today.getMonth(),today.getDay())

  const todos = [
    { id: 1, description: "Aws",done:false,targetdate:targetDate },
    { id: 2, description: "Arch Linux",done:false ,targetdate:targetDate},
    { id: 3, description: "Fedora",done:false ,targetdate:targetDate},
    { id: 4, description: "Void Linux",done:false ,targetdate:targetDate},
  ]

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>id </td>
            <td>description</td>
            <td>Done </td>
            <td>Target Dates</td>
          </tr>
        </thead>
        <tbody>
          {
            todos.map(
              todo => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done}</td>
                  <td>{todo.targetdate.toString()}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </>
  )
}
