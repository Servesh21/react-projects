import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './custom';

const Items = ({ items }) => {
  const {isLoading,data,isError,error} = useQuery({
    queryKey:['tasks'],
    queryFn: async () => {
      const {data} = await customFetch.get('/')
      return data 
      
    }

  })
  console.log(data)
  if(isLoading){
    return <p style={{marginTop:'1rem'}}>loading</p>
  }
  if(error ){
    return <p style={{marginTop:'1rem'}}> {error.message} </p>
  }
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
