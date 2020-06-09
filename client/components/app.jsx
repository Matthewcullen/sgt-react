import React from 'react';
import GradeTable from './grade-table';
import PageTitle from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  getAverageGrade() {
    const allGrades = this.state.grades;
    let added = 0;
    for (let i = 0; i < allGrades.length; i++) {
      added += allGrades[i].grade;
    }
    const average = Math.ceil(added / allGrades.length);
    return average;
  }

  componentDidMount() {
    fetch('api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error(err.message));
  }

  render() {

    return (
      <div>
        <PageTitle averageGrade={this.getAverageGrade()} text="Student Grade Table"/>
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
