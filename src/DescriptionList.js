import React, { useState } from "react";
import "./DescriptionList.css";
import { validateName } from "./Validation";

function DescriptionList() {
  const [name, setName] = useState("Percy Damhers");
  const [isEditing, setIsEditing] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
    setStatusMessage("");
  };

  const handleSave = (event) => {
    event.preventDefault();
    const newName = event.target.name.value;
    const isValid = validateName(newName);
    setIsValid(isValid);
    if (isValid) {
      setName(newName);
      setIsEditing(false);
      setStatusMessage("Your name is successfully updated.");
    }
  };

  return (
    <dl>
      <dt>Name:</dt>
      {isEditing ? (
        <form onSubmit={handleSave}>
          <dd>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={name}
                aria-invalid={!isValid}
                aria-errormessage={isValid ? "" : "name-error"}
              />
              {!isValid && (
                <span id="name-error" className="error-message">
                  Error! Invalid character entered.
                </span>
              )}
            </label>
            <button type="submit">Save</button>
          </dd>
        </form>
      ) : (
        <dd>
          {name} <button onClick={handleEdit}>Edit name</button>
        </dd>
      )}
      {statusMessage && <dd className="status-message">{statusMessage}</dd>}
    </dl>
  );
}

export default DescriptionList;
