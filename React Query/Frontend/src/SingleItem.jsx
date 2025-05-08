import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./custom";
import { toast } from "react-toastify";
const SingleItem = ({ item }) => {
  console.log(item.id)
  const queryclient = useQueryClient()
  const {mutate:editTask} = useMutation({
    mutationFn: ({taskId,isDone}) =>  customFetch.patch(`/${taskId}`,{isDone}),
    onSuccess: () =>{
      queryclient.invalidateQueries({queryKey:['tasks']})
    },

  })

  const {mutate:deleteTask,isLoading} = useMutation({
    mutationFn: ({id}) => customFetch.delete(`/${id}`),
    onSuccess : () =>{
      queryclient.invalidateQueries({queryKey:['tasks']})
      toast.success('Task deleted successfully')
    },
  })
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editTask({taskId:item.id , isDone:!item.isDone})}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTask({id:item.id})}
        disabled={isLoading}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
