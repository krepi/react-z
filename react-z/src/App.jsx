import {PersonInfo} from "./components/PersonInfo.jsx";

function App() {
    const jan = {
        name: "Jan",
        lastName: "Kowalski",
        mail: "j.kow@gmail.com",
        tel: "+48 888 000 111"
    }
    const janina = {
        name: "Janina",
        lastName: "Kowalska",
        mail: "jasia.kow@gmail.com",
        tel: "+48 888 100 111"
    }
    const karol = {
        name: "Karol",
        lastName: "Kowalski",
        mail: "karol.kow@gmail.com",

    }
    return (
        <>
            <PersonInfo person={jan}/>
            <br/>
            <PersonInfo person={janina}/>
            <br/>
            <PersonInfo person={karol}/>
        </>
    )
}

export default App
