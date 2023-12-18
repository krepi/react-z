import './App.css'

function App() {

    const buttonEl =(
      <button onClick={()=>{alert("klik")}}>Pokaż spoiler</button>
    );

  return (
    <>
   <h1>Gwiezdne wojny V</h1>
        <h2>Rok produkcji: 1980</h2>
        <h2>Fabuła</h2>
        <p>Dobrzy walczą ze złymi. Trzeba wyłączuc pole siłowe</p>
        {/*<button>Pokaż spoiler</button>*/}
        {buttonEl}
        <p>Vader okazuje sie być ojcem Luka</p>
    </>
  )
}

export default App
