import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Burger Builder</NavigationItem>
    <NavigationItem link="/orders">ORDERS</NavigationItem>
    { props.isAuthenticated 
      ? <NavigationItem link="/logout">Log Out</NavigationItem>
      : <NavigationItem link="/auth">Authenticate</NavigationItem> }
  </ul>
);

export default navigationItems;
