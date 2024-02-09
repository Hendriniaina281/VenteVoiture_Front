import React,{useState} from 'react';
import Popup from 'reactjs-popup';
import '../css/styleLogin.css';

const Login = (props) => {
    const token = sessionStorage.getItem("token");
    const [showPopup, setShowPopup] = useState(false);
    

    const handleSubmit = () => {
        if (token == null) {
            setShowPopup(true);
        } else {
            window.location.href = '/chat?prop='+props.prop;
        }
    };

    return (
        <div>
            <button onClick={handleSubmit}>Contacts</button>
            {token == null && (
                <Popup
                    open={showPopup}
                    position="right center"
                    onClose={() => setShowPopup(false)}
                >
                    Veuillez vous connecter.
                </Popup>
            )}
        </div>

    );
};

export default Login;
