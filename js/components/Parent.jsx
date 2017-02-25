import React from 'react';

import Child from './Child.jsx';

export default class Parent extends React.Component {
	constructor(props) {
		super(props);


		this.store = {};
		this.Children = [];

		var updateStore = this.updateStore;

		for(var i = 0; i < this.props.numberOfChildren; i++) {
			//use a hash so this strategy can be used for 'n' number of elements
			//pass in this.updateStore to be able to have a handle in this Parent component for when the child component's state changes
			
			var callback = function(key, newValue) {
				// var newValue = self.getNewValue();
				console.log(key, newValue)
				this.store[key] = newValue;
				console.log(this.store)
			}

			callback = callback.bind(this);

			this.store['childElement' + i] = 'defaultValue';

			this.Children.push(<Child keyId={'childElement' + i} key={'childElement' + i} updateStoreCallback={callback} />)
		}
	}
	updateStore() {

	}
	render() {
		return (
			<div>
				{ this.Children.map((ChildElement) => ChildElement) }
			</div>
		)
	}
}
