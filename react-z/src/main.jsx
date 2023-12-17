import ReactDOM from 'react-dom/client'
import {Link} from "./components/Link.jsx";

const linkElement = (
    <a href="https://zrozumiecreact.pl"
       target="_blank"
       rel="noopener noreferrer"
    >
        Strona kursu
    </a>
);


const element =
    <>
        <h1>Nasza Strona</h1>
        <main>
            < Link text = 'sprawdz strone kursu' shouldOpenNewTab = {true}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolores earum eligendi et facilis nobis
                ratione. Ducimus quas quisquam veritatis.</p>
           <Link  shouldOpenNewTab = {false} />
        </main>
    </>;
ReactDOM.createRoot(document.getElementById('root')).render(element);
