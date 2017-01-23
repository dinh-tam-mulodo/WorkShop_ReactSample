//Import React
import React from 'react'

//Import ReactDom
import ReactDOM from 'react-dom';

//Import Redux Components
import { connect } from 'react-redux';

//Import Action
import { qryAccts,addAccount,deleteAccount } from '../actions/index';

class Datatable extends React.Component {
  constructor (props)
  {
    super(props);

    this.state = {
      term : '',
      accName: '',
    };

    this.updateState = this.updateState.bind(this);
  }

  //Perform Functions when our React Component is about to mount
  componentWillMount()
  {
    this.props.dispatch(qryAccts());
  }

  onChangeInput(term) {
    if (this.state.timer) {
     clearInterval(this.state.timer); 
    }
    var self = this;
    var timer = setTimeout(function(){
      self.setState({term, timer});
    },300);    
  }

  filterAccounts(account) {
     return account.Name.toUpperCase().indexOf(this.state.term.toUpperCase()) > -1;
  }

  addAccount(accName){    
    this.props.dispatch(addAccount(accName));
    this.setState({accName: ''});
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }
  deleteAccount(accId){
    var r = confirm("Delete this account?!");
    if (r == true) {
        this.props.dispatch(deleteAccount(accId));
    }
  }
  updateState(e) {
      this.setState({accName: e.target.value});
  }
  render () {

    var styles = {
      buttonSave: {
        margin: '5px 0px',
      },
      textSearch:{
        margin: '5px 0px',
      },
    };
    return (      
      <div>
        <div className="slds-form-element">
          <div className="slds-text-heading--medium">Add New Account</div>
          <div className="slds-form-element__control">          
            <input className="slds-input" placeholder="Account Name" onChange = {this.updateState} 
               ref = "myInput" value={this.state.accName}/>
            <button style={styles.buttonSave} type="button" className="slds-button slds-button--brand" onClick={(event) => this.addAccount(this.state.accName)}>Save</button>    
          </div>
        </div>
        <div className="slds-form-element slds-float--right">          
          <div className="slds-form-element__control">
            <input style={styles.textSearch} onChange={(event) => this.onChangeInput(event.currentTarget.value)} className="slds-input" placeholder="Search Account"/>          
          </div>
        </div>    
      <div className="slds-text-heading--medium">Account List</div>
        <table className="slds-table slds-table--bordered">
          <thead>
            <tr className="slds-text-heading--label">
              <th className="slds-is-sortable" scope="col">
                <div className="slds-truncate"> Name
                </div>
              </th>
              <th className="slds-is-sortable" scope="col">
                <div className="slds-truncate"> Phone
                </div>
              </th>
              <th className="slds-is-sortable" scope="col">
                <div className="slds-truncate"> Fax
                </div>
              </th>
              <th className="slds-is-sortable" scope="col">
                <div className="slds-truncate"> Action
                </div>
              </th>
              <th className="slds-cell-shrink"></th>
            </tr>
          </thead>
          <tbody>
           {this.props.accts.filter(this.filterAccounts.bind(this)).map((v,i) =>
             <tr className="slds-hint-parent" key={i}>
               <td className="slds-truncate">
                 {v.Name}
               </td>
               <td className="slds-truncate">
                 {v.Phone}
               </td>
               <td className="slds-truncate">
                 {v.Fax}
               </td>
               <td>
                  <button onClick={(event) => this.deleteAccount(v.Id)} className="slds-button slds-button--destructive">Delete</button>
               </td>
             </tr>
           )}
          </tbody>
        </table>
      </div>      
    );
  }
}

//Connects Redux State to React, Injects reducer as a property
export default connect(state => ({ accts: state.accts }))(Datatable);
