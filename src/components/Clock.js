import React , {Component} from 'react';

class Clock extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		}

		/*console.log('this.props',this.props);*/
	}

	getTimeUntil(deadline){
		const time = Date.parse(deadline) - Date.parse(new Date());
		const seconds = Math.floor((time/1000) % 60);
		const minutes = Math.floor((time/1000/60) % 60);
		const hours = Math.floor(time/(1000*60*60) % 24);
		const days = Math.floor(time/(1000*60*60*24));

		/*console.log('time:', time);*/
		console.log('seconds:',seconds, 'minutes:', minutes, 'hours:', hours, 'days:', days);

		this.setState({
			days: this.leading0(days),
			hours: this.leading0(hours),
			minutes: this.leading0(minutes),
			seconds: this.leading0(seconds)
		});
	}

	componentWillMount() {
		this.getTimeUntil(this.props.deadline);
	}

	componentDidMount() {
		setInterval( () => this.getTimeUntil(this.props.deadline) , 1000);
	}

	leading0(num){
		return num < 10 ? '0' + num : num;
	}

	render(){
		return(
			<ul className="list-group flex-row justify-content-center">
				<li className="list-group-item Clock-days">{this.state.days} days</li>
				<li className="list-group-item Clock-hours">{this.state.hours} hours</li>
				<li className="list-group-item Clock-minutes">{this.state.minutes} minutes</li>
				<li className="list-group-item Clock-seconds">{this.state.seconds} seconds</li>
			</ul>
		);
	}
}

export default Clock;