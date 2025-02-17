
import NewTasks from "./NewTasks";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className=" text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTasks onAdd={onAdd} />
      
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            <li className="flex justify-between my-4" key={task.id}>
              <span> {task.id} </span>
              <button className="text-stone-700 hover:text-red-500"> clear</button>
            </li>;
          })}
        </ul>
    </section>
  );
}
