import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      course: this.state.course,
      grade: Number.parseInt(this.state.grade)
    });
    this.resetForm();
  }

  handleCancel(event) {
    event.preventDefault();
    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className="form-container col-xl-3 col-xs-12 col-sm-10 col-lg-9 col-md-9">
        <form onSubmit={this.handleSubmit}>
          <h2>Add Grade</h2>
          <div className="name-container">
            <i className="fas fa-user fa-2x" htmlFor="name"></i>
            <input
              type="name"
              className="form-control border border-secondary rounded"
              id="name"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange} />
          </div>
          <div className="course-container">
            <i className="fas fa-th-list fa-2x" htmlFor="course"></i>
            <input
              type="course"
              className="form-control border border-secondary"
              id="course"
              name="course"
              placeholder="Course"
              value={this.state.course}
              onChange={this.handleChange} />
          </div>
          <div className="grade-container">
            <i className="fas fa-graduation-cap fa-2x" htmlFor="grade"></i>
            <input
              type="number"
              className="form-control border border-secondary"
              id="grade"
              name="grade"
              placeholder="Grade"
              value={this.state.grade}
              onChange={this.handleChange} />
          </div>
          <div className="button-container no-gutters">
            <button type="submit" className="btn btn-success mr-3">Add</button>
            <button type="reset" onClick={this.handleCancel} className="btn btn-outline-dark">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default GradeForm;
