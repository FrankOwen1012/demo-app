import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const ConceptosBasicos = () => {
    return (
        <div>


            <h2>ConceptosBasicos</h2>
            <Router>
                <Switch>
             
                    <Route exact path="/contacto">
                        <h3>Contactenos</h3>
                    </Route>
                    <Route exact path="/acerca">
                        <h3>Acerca</h3>
                        <p>
                            
                        </p>
                    </Route>
                    <Route exact path="/">
                        <h3>Home</h3>
                        <p>BIENVENIDO A LA PARTE DEL HOME @</p>
                    </Route>
                </Switch>


            </Router>

        </div>
    )
}
export default ConceptosBasicos;