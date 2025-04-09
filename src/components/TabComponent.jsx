export default function TabButton({ children, click }) {

    function handleClick(){
        console.log("clicked");
    }
    return (
      <li>
        <button onClick={click}>{children}</button>
      </li>
    );
  }