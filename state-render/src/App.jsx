import './App.css'
import {LikesCounter} from "./components/LikesCounter.jsx";
import {Plot} from "./components/Plot.jsx";
import {Form} from "./components/Form.jsx";
import {Reviews} from "./components/Reviews.jsx";
import {useState} from "react";

const initialReviews = [
    {author: "Brian", text: "Super Film", id: 1},
    {author: "Jessica", text: "Slaby Film", id: 2},
];

function App() {
    const [reviews, setReviews] = useState(initialReviews);

    return (
        <>
            <h1>Gwiezdne wojny V</h1>
            <h2>Rok produkcji: 1980</h2>
            <LikesCounter/>
            <Plot/>
            <Reviews reviews={reviews}/>
            <Form onReviewSubmit={(author, text) => {
                setReviews((prevReviews => {
                    return [{
                        author, text, id: prevReviews.length + 1
                    },
                        ...prevReviews
                    ];
                }));
            }}/>
        </>
    );
}

export default App;