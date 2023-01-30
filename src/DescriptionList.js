import React, { useState, useEffect } from "react";
import "./DescriptionList.css";
import "./button-styles.css";
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

  useEffect(() => {
    if (isEditing) {
      const form = document.querySelector("form");
      const input = form.querySelector("input");
      input.focus();
    }
  }, [isEditing]);

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
                <p id="name-error" className="error-message">
                  Error! Invalid character entered. Please enter a valid name
                  using letters A—z, hyphens and spaces.
                </p>
              )}
            </label>
            <div>
              <button className="btn--save" type="submit">
                Save
              </button>
            </div>
          </dd>
        </form>
      ) : (
        <dd>
          {name}
          <div>
            <button className="btn--edit" onClick={handleEdit}>
              Edit name
            </button>
          </div>
        </dd>
      )}
      {statusMessage && <dd className="status-message">{statusMessage}</dd>}
    </dl>
  );
}

export default DescriptionList;
