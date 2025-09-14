
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {Routes, Route, Navigate} from "react-router-dom";
import {Container} from "react-bootstrap";

function App() {

  return (
      <Container className="my-4" fluid>
          <Routes>
              <Route path={"/"} element ={<h1>YO</h1>} />
              <Route path={"/new"} element ={<h1> NEW YO</h1>} />
              <Route path={"*"} element ={<Navigate to={"/"}/>} />
              <Route path={":/id"} >
                  <Route index element={<h1>Show</h1>} />
                  <Route path={"edit"} element={<h1>Edit</h1>} />
              </Route>
          </Routes>
      </Container>
  )
}

export default App
