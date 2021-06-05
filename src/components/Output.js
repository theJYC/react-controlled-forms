import React from "react"

const Output = props => {

    const emojify = status => {
      return status ? "✅" : "❎"
    }

    return(
        <>
            <hr></hr>

            <h3>Name: {props.state.firstName} {props.state.lastName}</h3>
            <h3>Age: {props.state.age}</h3>
            <h3>Gender: {props.state.gender}</h3>

            <h3>Destination: {props.state.destination}</h3>

            <h3>Dietary Restrictions:</h3>

            <h4>Kosher: {emojify(props.state.kosher)}</h4>
            <h4>Vegetarian: {emojify(props.state.vegetarian)}</h4>
            <h4>Lactose Free: {emojify(props.state.lactoseFree)}</h4>
        </>
    )
}

export default Output
