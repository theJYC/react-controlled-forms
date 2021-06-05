import React from "react"

const Output = props => {

    const emojify = status => {
      return status ? "✅" : "❎"
    }

    return(
        <>
            <hr></hr>

            <h3>Name: {props.firstName} {props.lastName}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Gender: {props.gender}</h3>

            <h3>Destination: {props.destination}</h3>

            <h3>Dietary Restrictions:</h3>

            <h4>Kosher: {emojify(props.kosher)}</h4>
            <h4>Vegetarian: {emojify(props.vegetarian)}</h4>
            <h4>Lactose Free: {emojify(props.lactoseFree)}</h4>
        </>
    )
}

export default Output
