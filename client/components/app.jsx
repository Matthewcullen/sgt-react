import React from 'react';
import GradeTable from './grade-table';
import PageTitle from './header';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addGrade = this.getAverageGrade.bind(this);
  }

  getAverageGrade() {
    const allGrades = this.state.grades;
    let added = 0;
    for (let i = 0; i < allGrades.length; i++) {
      added += allGrades[i].grade;
    }
    let average = null;
    if (!(allGrades.length)) {
      average = 'NA';
      return average;
    } else {
      average = Math.ceil(added / allGrades.length);
      return average;
    }
  }

  componentDidMount() {
    fetch('api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error(err.message));
  }

  addGrade(newGrade) {
    fetch('api/grades', {
      method: 'POST',
      body: JSON.stringify(newGrade),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          grades: this.state.grades.concat(data)
        });
      })
      .catch(err => console.error(err.message));
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle averageGrade={this.getAverageGrade()} text="Student Grade Table" />
            <GradeTable grades={this.state.grades} />
            <GradeForm onsubmit={this.addGrade()} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
