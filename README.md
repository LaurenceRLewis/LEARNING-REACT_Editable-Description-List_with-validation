# LEARNING-REACT_Editable-Description-List_with-validation

## Steps used to build the component

1. Created a new React component named DescriptionList.
2. Imported React and the useState hook.
3. Defined the initial state for the component, including a default name, an editMode state, an error state, and a status state.
4. Created a handleEdit function that sets the editMode state to true and clears the status message.
5. Created a handleSave function that is triggered when the form is submitted. This function checks if the input value is a valid name using a regular expression. If it is not, it sets the error state to true. If it is a valid name, it sets the name state to the input value, sets the editMode state to false, sets the error state to false, and sets the status message to "Your name is successfully updated."
6. Returned JSX that renders a description list with a dt of "Name" and a dd that displays the name state. If the editMode state is true, it renders a form with an input for the name and a save button. If the editMode state is false, it renders the dd with the name state and an "Edit name" button.
7. In the JSX, added an error message that is only displayed if the error state is true, and added a status message that is only displayed if the status state is not an empty string.
8. Created a CSS file and added styles for the description list and the error and status messages.
9. Imported the CSS file into the component file.

### Validation: (Changes to use useEffect hook)

1. Import the useEffect hook from the React library
2. Removed the handleSave function
3. Added the useEffect hook to validate the name
4. Updated the form element to submit the form when the "Enter" key is pressed
5. Added the aria-invalid and aria-errormessage attributes to the input element for accessibility.

#### How to implement the useEffect hook

1. Import the useEffect hook from the React library: import React, { useState, useEffect } from "react";
2. Remove the handleSave function and update the const handleEdit function to call setIsEditing(true) and setStatusMessage("").
3. Add the useEffect hook to the top of the component, just below the state variables, to run the validateName function when the name changes.
4. Update the form element in the return statement to submit the form when the "Enter" key is pressed, rather than clicking the "Save" button. This is because the handleSave function was removed.
5. Add the aria-invalid and aria-errormessage attributes to the input element to help users with accessibility issues.

6. Import the useEffect hook from the React library
   Removed the handleSave function
   Added the useEffect hook to validate the name
   Updated the form element to submit the form when the "Enter" key is pressed
   Added the aria-invalid and aria-errormessage attributes to the input element for accessibility.

#### Validation: (old method using handleSave)

1. To validate the input, a regular expression was used to check that the input value only contains letters and hyphens.
2. The regular expression is tested against the input value in the handleSave function.
3. If the regular expression test returns false, the error state is set to true and an error message is displayed.
4. If the regular expression test returns true, the error state is set to false and the input value is saved.
5. In the JSX, the input field has been given the attribute "pattern" with the regular expression as its value. The input field also has the attributes "aria-invalid" and "aria-errormessage". The "aria-invalid" attribute is set to the error state and the "aria-errormessage" attribute is set to the ID of the error message, to make sure that the error message is accessible to screen reader users.
6. When the error state is false, the error message is not displayed and when the error state is true, the error message is displayed.
7. Additionally, when the input value is a valid name, the status message is displayed to confirm that the name has been updated successfully.
8. When the user clicks on the "Edit name" button, the error message and status message are cleared.
9. When the user enters a valid name after an error, the error message is cleared and the valid name can be saved.
10. On successful save of the name, the focus is set to the "Edit name" button.
