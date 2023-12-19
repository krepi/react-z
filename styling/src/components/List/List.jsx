import { Item } from "../Item/Item.jsx";
import styles from './List.module.css';
import styled from "styled-components";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];


const Button=styled.button`

`;


export function List() {
    return (
        <>
            <button className={styles.btn} onClick={()=> alert(`Liczba emoji: ${emojis.length}`)}
            >
                Pokaz liczbe emoji
            </button>
        <ul className={styles.list}>
            {emojis.map((emoji) => (
                <Item key={emoji} emoji={emoji} />
            ))}
        </ul>
        </>
    );
}
