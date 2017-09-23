const contentNode = document.getElementById('contents');

class IssueList extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Issue Tracker'
      ),
      React.createElement(IssueFilter, null),
      React.createElement('hr', null),
      React.createElement(IssueTable, null),
      React.createElement('hr', null),
      React.createElement(IssueAdd, null)
    );
  }
}

class IssueFilter extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'This is a placeholder for the Issue Filter.'
    );
  }
}

class IssueTable extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'This is a placeholder for a table of Issues.'
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'This is a placeholder for an Issue Add entry form.'
    );
  }
}
ReactDOM.render(React.createElement(IssueList, null), contentNode); //Render the component inside the content node