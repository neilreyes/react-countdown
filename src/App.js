import React, { Component } from 'react';
import Clock from './components/Clock';

class App extends Component{
	constructor(props){
		super(props);

		this.state = {
			deadline: 'December 25, 2017',
			newDeadline: '',
		}
	}

	changeDeadline(event){
		this.setState({
			deadline: this.state.newDeadline,
		});
		/*console.log(this.state);*/
	}

	handleOnChangeDate(event){
		this.setState(
			{
				newDeadline: event.target.value
			}
		)
	}

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<h2>Countdown to {this.state.deadline}</h2>
						<Clock deadline={this.state.deadline} />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="form-group form-inline flex-row justify-content-center">
							<input
								type="text"
								placeholder="enter new date"
								className="form-control"
								onChange={ this.handleOnChangeDate.bind(this)  }
							/>

							<button
								className="btn btn-primary"
								onClick={ this.changeDeadline.bind(this) }
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;