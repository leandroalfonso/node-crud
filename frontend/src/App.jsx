import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [valores, setValores] = useState()

  const [items, setItems] = useState()




  const getValores = (val) => {
    setValores(prevValues => ({
      ...prevValues,
      [val.target.name]: val.target.value,
    }))
  };
  const handleClickBtn = () => {
    axios.post('http://localhost:3001/registro', {
      nome_produto: valores.nome_produto,
      valor_produto: valores.valor_produto,

      desc_produto: valores.desc_produto,

    }).then((response) => {
      console.log(response)
    })

  }

  useEffect(() => {

    axios.get('http://localhost:3001/getprodutos').then((response) => {
      setItems(response.data)
    });


  }, []);


  return (
    <div className="App">
      <div className="container--card">
        <input
          placeholder='digite o produto'
          type='text'
          className='input'
          onChange={getValores}
          name='nome_produto'
        />

        <input
          placeholder='valor do produto'
          type='text'
          className='input'
          onChange={getValores}
          name='valor_produto'

        />

        <input
          placeholder='desc_produto'
          type='text'
          className='input'
          onChange={getValores}
          name='desc_produto'

        />
        <button onClick={handleClickBtn}>Salvar </button>

      </div>
      <div className='cards'>

        {
          typeof items !== "undefined" &&
          items.map((item)=>(
            <div key={item.id_produto}>{item.nome_produto}</div>
          ))
        }
      </div>


    </div>
  )
}

export default App
