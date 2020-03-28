import React, { useState, useEffect, useContext } from 'react';
import Message from '../Message';
import axios from 'axios';

const MyContext = React.createContext({});

/**
 *  自定义hooks
 */
const usePerson = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`https://swapi.co/api/people/${id}/`)
      .then(res => {
        setData(res.data)
        setLoading(false);
      })
  }, [id])
  return [data, loading];
}

const Person = ({ id, data, loading }) => {
  // const [data, loading] = usePerson(id);
  const { created, edited } = useContext(MyContext);


  if (loading) return <p>
    loading......
  </p>

  return (
    <div>
      <h2>Study React Hooks</h2>
      <p>姓名:{data.name}</p>
      <p>身高:{data.height}</p>
      <p>体重:{data.mass}</p>
      <p>发色:{data.hair_color}</p>
      <p>肤色:{data.skin_color}</p>
      <p>性别:{data.gender}</p>
      <p>created:{created}</p>
      <p>edited:{edited}</p>
    </div>
  )
}

export default function Home() {
  let [count, setCount] = useState(1);
  const [data, loading] = usePerson(count);

  const handleClick = () => {
    count += 1
    setCount(count)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', padding: '5%' }}>

      <div onClick={handleClick} style={{ marginBottom: '20px', cursor: 'pointer' }}>
        click me  {count}
      </div>
      <MyContext.Provider value={{
        created: data.created, edited: data.edited
      }}>
        <Person id={count} data={data} loading={loading} />
        <Message MyContext={MyContext} loading={loading} />
      </MyContext.Provider>
    </div>
  )
}
