import './Card.css';

function Card({character}) {
    return (
        <div className="card">
            <h2>{character.name}</h2>
            <p>{character.origin.name}</p>
        </div>
    );
}

export default Card;