import  {useState} from "react";
import {Review} from "./Review.jsx";



export function Form({onReviewSubmit}) {

    const [inputValue, setInputValue] = useState('Krepi');
    const [textareaValue, setTextareaValue] = useState('');



    function handleSubmit(e) {
        e.preventDefault();
        const author = inputValue;
        const text = textareaValue;

        // setReviews((prevReviews => {
        //     return [{
        //         author, text, id: prevReviews.length + 1
        //     },
        //         ...prevReviews
        //     ];
        // }))
        onReviewSubmit(author,text);
        setInputValue("");
        setTextareaValue("")
    }

    return (
        <>

            <h2>Dodaj recenzję</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="author">Author</label>
                    </div>
                    <input type="text"
                           name="author"
                           id="author"
                           value={inputValue}
                           onChange={(e) => {
                               setInputValue(e.target.value)
                           }}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="text">Text</label>
                    </div>
                    <textarea
                        name="text"
                        id="text"
                        value={textareaValue}
                        onChange={(e) => {
                            setTextareaValue(e.target.value)
                        }}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={inputValue === '' || textareaValue === ''}
                >
                    Dodaj
                </button>
            </form>
        </>
    );
}