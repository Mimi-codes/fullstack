import React from "react";
import Content from "./Content";
import Header from "./Header"
import Total from "./Total";

//imports the header, content and total components

const App = () => {
  const course = 'Half Stack Application Development'

return (
<>
  <Header course = {course} />
  <Content />
  <Total />
</>
)  
}
export default App;
