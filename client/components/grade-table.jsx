import React from 'react';

function Grade(props) {
  const grade = props.grade;
  const gId = `grade${grade.id}`;
  return (
    <tr id={gId}>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
    </tr>
  );
}

function GradeTable(props) {
  return (
    <table className="table table-striped">
      <thead className="thead-light">
        <tr>
          <th className="col">Name</th>
          <th className="col">Course</th>
          <th className="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {
          props.grades.map(grade => {
            return (
              <Grade
                key={grade.id}
                grade={grade}
              />
            );
          })}
      </tbody>
    </table>
  );
}

export default GradeTable;
