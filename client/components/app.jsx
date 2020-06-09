import React from 'react';
import GradeTable from './grade-table';
import PageTitle from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
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
        <PageTitle text="Student Grade Table"/>
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
