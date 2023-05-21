const Notification = ({ notification }) => {
    const style = {
      fontSize: "20px",
      borderStyle: "solid",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "10px",
      borderColor: 'green'
    };
  
    if (notification === "") {
      return null;
    }
    return <div style={style}>{notification}</div>;
  };
export default Notification  