import React from "react";
import ContactLastMessage from "./ContactLastMessage";
import ContactName from "./ContactName";
import { Link } from "react-router-dom";

function ContactTab(props) {
  const { image, name, chatlog, id } = props.contact;
  

  ;
  let length = chatlog.length;
  const noMessage = {
    text: " No Conversation",
  };

 


  return (
    <Link to={`/conversations/${id}`}  className="link-tag">
      <div className="contact-tab"  >
        <div>
          {" "}
          
          <div>
            <img src={image} alt="user-avatar" className="avatar" />
          </div>
        </div>

        <div style={{ marginLeft: "16px"}}>
          <ContactName name={name} />
          <div></div>
          <ContactLastMessage
            chatlog={length > 0 ? chatlog[length - 1] : noMessage}
          />
        
        </div>
      </div>
    </Link>
  );
}

export default ContactTab;