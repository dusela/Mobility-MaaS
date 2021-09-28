import React, { Component } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import App from './App';

class App2 extends Component {
  constructor (probs) {
    super(probs)
    this.state = {
        showResult: false
    }}


  render () {
    return (
            <div class="row" className="App" exact path='/suche'>
              <header className="App-header">
              <details class="erklaerung">
                <summary>Zusammenfassung</summary>
                <p>Der Routenplaner+ stell exemplarisch die einzelnen Prozesschritte einer potenziellen SSI-basierten Lösung
                 eines (nahtlosen) multimodalen Mobilitätsbuchungsvorgangs vor. Zum Besseren Verständnis wird im folgenden wird 
                 daher eine kurze Einordnung der einzelnen Prozesschritte bereitgestellt</p>
                <ol>
                  <li>So funktioniert HTML</li>
                  <li>Wichtige HTML-Elemente</li>
                  <li>Gestalten mit CSS</li>
                </ol>
              </details>
              <h1 class="p">Routenplaner+</h1>
              <form class="Abstand">
                <label for="AStandort">Aktueller Standort:</label>
                <input name="APosition" id="AusgangsPosition" type="text" value="Hamburg Hauptbahnhof" />
                <br></br>
                <br></br>
                <label for="AStandort">Zieldestination:</label>
                <input name="ZPosition" id="ZielPosition" type="text" value="London Heathrow" />
                <Button onClick={() => this.setState({showResult: true})}>Suchen</Button>
              </form>
              </header>
              <div>
                {this.state.showResult && <App></App>}
              </div>
            </div>
            
    )
  }
}
export default (App2)