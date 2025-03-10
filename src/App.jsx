const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const des = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <h1>React Essentials</h1>
      <p>
        {des} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props){
  return(
    <li>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>

      <section id="core-concepts">
        <ul>
          <CoreConcepts 
            title="Props"
            description = "Props description"
          />
          <CoreConcepts 
            title="React"
            description = "React description"
          />
          <CoreConcepts
           title="Props2"
            description = "Props2 description"
          />
        </ul>
      </section>
    </div>
  );
}

export default App;