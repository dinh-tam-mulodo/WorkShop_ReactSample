//Import React
import React from 'react';

//Import ReactDom
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render(){
    return(
    <div className="slds-page-header" role="banner">                
		<div className="slds-grid">
			<div className="slds-col slds-has-flexi-truncate">
				<div className="slds-media slds-no-space slds-grow">
					<div className="slds-media__figure">
						<svg aria-hidden="true" className="slds-icon slds-icon-standard-user">							
						</svg>
					</div>
					<div className="slds-media__body">
						<p className="slds-text-title--caps slds-line-height--reset">{this.props.headerName}</p>
						<h1 className="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate" title="{this.props.headerTitle}">{this.props.headerTitle}</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
	}
}
export default Header;
