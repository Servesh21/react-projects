import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import customFetch from './custom';
import {toast} from 'react-toastify'

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  const queryCLint = useQueryClient()
  const {mutate:createTask,isLoading} = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/',{title:taskTitle}),
    onSuccess:() =>{
      queryCLint.invalidateQueries({queryKey:['tasks']})
      toast.success('task added successfully')
      setNewItemName('')
    },
    onError: (error) => {
    console.log(error)
    toast.error(error.response.data.msg)
    }
  })
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask(newItemName);

  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn' disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
