// ButtonComponent.js
import Button from "../../../../packages/components/Button/Button";
import { FaHeart, FaStar } from "react-icons/fa";
import "./Button.module.scss";

const ButtonComponent = () => {

  return (
    <div className="button-container">
      {/* Example 1: Customizing text content */}
      <Button className="custom-button">
        Click me
      </Button>

      {/* Example 2: Customizing with icons */}
      <Button
        className="custom-button"
        leadingIcon={<FaHeart />}
        trailingIcon={<FaStar />}
      >
        Love and Star
      </Button>

      {/* Example 3: Specifying a different type (e.g., 'submit') */}
      <Button className="custom-button" type="submit">
        Submit Form
      </Button>

      {/* Example 4: Custom onClick handler */}
      <Button
        className="custom-button"
        onClick={() => alert("Custom click handler")}
      >
        Show Alert
      </Button>

      {/* Example 5: Custom Primary Buttons */}
      <Button
        className="primary-button custom-1" 
        variant="primary"
        backgroundColor="#FFAEBC"
        hoverColor="#D8A7B1"
        activeColor="#EF7C8E"
      >
        Custom Primary Button 1
      </Button>
      <Button
        className="primary-button custom-2" 
        variant="primary"
        backgroundColor="#B6E2D3"
        hoverColor="#D8A7B1"
        activeColor="#EF7C8E"
      >
        Custom Primary Button 2
      </Button>
     

      {/* Example 6: Custom Secondary Buttons */}
      <Button
        className="secondary-button custom-1" 
        variant="secondary"
        backgroundColor="#A0E7E5"
        hoverColor="#B4F8C8"
        activeColor="#922b21"
      >
        Custom Secondary Button 1
      </Button>
      <Button
        className="custom-2 secondary-button" 
        variant="secondary"
        backgroundColor="#DDFFE7"
        hoverColor="#B4F8C8"
        activeColor="#922b21"
      >
        Custom Secondary Button 2
      </Button>
      
      {/* Example 7: Disabled button */}
      <Button className="custom-button disabled-button"  disabled>
        Disabled Button
      </Button>

      {/* Example 8: Custom button with size and variant */}
      <Button className="custom-button secondary-button" size="large" variant="secondary">
        Large Secondary Button
      </Button>
    </div>
  );
};

export default ButtonComponent;
