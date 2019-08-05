import React from 'react'
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {person: [], paging: {}};
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
      fetch('https://reqres.in/api/users?page=1')
      .then((results ) => {
        results.json().then((userlist) =>{
          this.setState({ person: userlist.data }, function(){});
          this.setState({ paging: userlist }, function(){});          
        });        
      });
  }

  handlePagination(currentPage){
    fetch('https://reqres.in/api/users?page='+currentPage)
    .then((results ) => {
      results.json().then((userlist) =>{
        this.setState({ person: userlist.data }, function(){});
        this.setState({ paging: userlist }, function(){});          
      });        
    });    
  }

  render() {
    let pageNumberState = this.state.paging;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pageNumberState.total / pageNumberState.per_page); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className={(this.state.paging.page === number ? 'active ' : '')}
          key={number}
          id={number}          
        >
          <a title={number} onClick={() => this.handlePagination(number)} href="javascript:void(0)">{number}</a>
        </li>
      );
    });
    return( 
      <div>
        <h1>Users</h1>
        <table className="table table-striped table-bordered">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        {this.state.person.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td>{listValue.id}</td>
              <td>{listValue.first_name} {listValue.last_name}</td>
              <td>{listValue.email}</td>
            </tr>
          );
        })}
        </table>
        <div>
          <ul className="pagination">{renderPageNumbers}</ul>
        </div>  
      </div>  
    );
  }
}
export default Users