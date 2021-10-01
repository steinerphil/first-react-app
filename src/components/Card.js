import './Card.css';
import styled from "styled-components/macro";

function Card({name, origin, image, gender}) {
    return (
        <CardStyle gender={gender} className="card">
            <p>{gender}</p>
            <h2>{name}</h2>
            <p>{origin}</p>
            <img src={image} className="img" alt="character"/>
        </CardStyle>
    );
}

export default Card;

const CardStyle = styled.div`

  background-color: ${props => {
    if (props.gender === "Male") {
      return "lightgreen"
    }
    if (props.gender === "Female") {
      return "pink"
    }
    if (props.gender === "Genderless") {
      return "yellow"
    }
    if (props.gender === "unknown") {
      return "lightgrey"
    }
  }};

`