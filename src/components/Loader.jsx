import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function Loader() {
  return (
    <>
      <div className="spinner-container position-fixed z-2 d-flex justify-content-center align-items-center">
        <div>
          <FontAwesomeIcon icon={faCircleNotch} spin size="2xl" />
        </div>
      </div>
    </>
  );
}
