import React from "react"

//class-based component vs functional component to utilise state:
const Form = props => {

    return(
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            onChange={props.handleChange}
            placeholder="First Name"
          />
          <br />

          <input
            type="text"
            name="lastName"
            onChange={props.handleChange}
            placeholder="Last Name"
          />
          <br />

          <input
            type="text"
            name="age"
            onChange={props.handleChange}
            placeholder="Age"
          />
          <br />

          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={props.handleChange}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={props.handleChange}
          />
          <label>Female</label>
          <br />

          <label>Destination: </label>
          <select
            name="destination"
            onChange={props.handleChange}
          >
            <option value="New York">NYC</option>
            <option value="Miami">MIA</option>
            <option value="San Francisco">SF</option>
          </select>

          <br />

          <label>Dietary Restrictions: </label>
          <br />

          <input
            type="checkbox"
            name="kosher"
            checked={props.state.kosher}
            onChange={props.handleChange}
          />
          <label>Kosher</label>
          <br />

          <input
            type="checkbox"
            name="vegetarian"
            checked={props.state.vegetarian}
            onChange={props.handleChange}
          />
          <label>Vegetarian</label>
          <br />

          <input
            type="checkbox"
            name="lactoseFree"
            checked={props.state.lactoseFree}
            onChange={props.handleChange}
          />
          <label>Lactose Free</label>
          <br />

          <br />
          <button>Submit</button>
        </form>

     </div>
    )
}

export default Form
