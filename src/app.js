
// *****************************************************************************

// GUYS FIND YOUR NAME BELOW AND ADD YOUR COMMENTS!!! 😇

// *****************************************************************************

import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './style.scss'
import 'bulma'

class App extends React.Component{
  constructor(){
    super()

    this.state={}
  }


  componentDidMount() {
    axios.get('/api/students')
      .then(res => this.setState({ students: res.data }))

  }


  render(){
    if(!this.state.students) return null
    console.log(this.state.students)
    return(
      <main>
        <section className="section">
          <div className="container">
            <h1 className="title">GOODBYE MIKE</h1>
            <h1 className="subtitle">-WDI 38 ❤️</h1>
            <p className="card-header-title">{this.state.students.length} comments</p>

            {this.state.students.map(student =>
              <section key={student.name} className="card">
                <div className="card-header">
                  <p className="card-header-title"></p>
                  <a target="_blank" rel="noopener noreferrer" href={student.linkedin}>
                    <div style={{backgroundImage: `url(${student.image})`}}className="user"/>
                  </a>
                </div>
                <div className="card-content">
                  {student.comment}
                </div>
                <div className="card-content">
                </div>
              </section>
            )}
          </div>
        </section>
      </main>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('root') )
