function App() {
  return (
    <div className="container">
      <div className="alert">
        <p>
          Service Status:
          <span className="text-success"> Online </span>
          <span className="text-danger"> Offline </span>
        </p>
      </div>
      <h1>Ranking Groups</h1>
      <hr />
      <div className="row">
        <div className="col-8">Table</div>
        <div className="col-4">Add Group</div>
      </div>
    </div>
  );
}

export default App;
