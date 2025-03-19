import React, { useState, useEffect } from 'react';

const XComponent = (props) => {
  const [list, setList] = useState<any[]>([]);
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState<number|string>('0');

  useEffect(() => {
    fetch(props.apiEndpoint)
      .then(res => res.json())
      .then(d => setList(d.items))
      .catch(e => console.log(e))
  }, [])

  const handleClick = (item) => {
    if (flag === false) {
      setFlag(true)
      alert('Flag set!')
    } else {
      setFlag(false)
      console.log('Flag unset.')
    }
    let num = parseInt(count)
    setCount((num + 1).toString())
  }

  const doRender = () => {
    let arr = []
    for (let i = 0; i < list.length; i++) {
      arr.push(
        <div style={{ border: '1px solid black', margin: 5 }}>
          <p>{list[i].name}</p>
          <button onClick={() => handleClick(list[i])}>Click</button>
        </div>
      )
    }
    return arr
  }

  return (
    <div style={{ backgroundColor: flag ? 'lightgreen' : 'lightcoral' }}>
      <h2>{props.title}</h2>
      {doRender()}
      <p>Counter: {count}</p>
    </div>
  )
}

export default XComponent
