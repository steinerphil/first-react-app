import './Card.css';

function Card({name, origin, image}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{origin}</p>
            <img src={image} className="img" alt="character"/>
        </div>
    );
}

export default Card;