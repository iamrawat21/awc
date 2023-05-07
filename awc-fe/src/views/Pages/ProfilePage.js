import React, { useState, useEffect }  from "react";
import classnames from "classnames";
import resources from "./resources.json";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

function ProfilePage() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    // fetch list data and update state
    fetch('/api/list')
      .then(response => response.json())
      .then(data => setListData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>List Page</h1>
      <ul>
        {listData.map(item => (
          <li key={item.id}>
            {item.title}
            <h1>{resources.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfilePage;