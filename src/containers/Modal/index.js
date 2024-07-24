import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Icon from "../../components/Icon";
import "./style.scss";

const Modal = ({ opened, Content, children }) => {
  const [isOpened, setIsOpened] = useState(opened);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpened(false);
      }
    };

    if (isOpened) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpened]);

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      setIsOpened(false);
    }
  };

  return (
    <>
      {children({ isOpened, setIsOpened })}
      {isOpened && (
        <div className="modal" 
          onClick={handleOutsideClick}
          onKeyDown={(e) => e.key === 'Enter' && setIsOpened(false)}
          role="button"
          tabIndex="0"
          >
          <div className="content">
            {Content}
            <button
              type="button"
              data-testid="close-modal"
              onClick={() => setIsOpened(false)}
            >
              <Icon name="close" />
            </button>
          </div>
        </div>
      )}  
    </>
  );
};

Modal.defaultProps = {
  opened: false,
}

Modal.propTypes = {
  opened: PropTypes.bool,
  Content: PropTypes.node.isRequired,
  children: PropTypes.func.isRequired,
}

export default Modal;
