import React from 'react';
import { connect } from 'react-redux';

import { mylibraryDelete } from './actions';
import { mylibraryUpdate } from './actions';

class MyLibrary extends React.Component {
	constructor(props){
		super(props)
		
		this.onStatusClick = this.onStatusClick.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}
	
	onStatusClick(e){
		e.preventDefault();
		
		fetch(`books/${this.props.book._id}`, {
			method: 'PATCH',
			body: JSON.stringify({
				done: !this.props.book.done
			}),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			if (res.status === 200){
				console.log('Updated');
				this.props.dispatch(mylibraryUpdate(this.props.book._id));
			}
			else{
				console.log('Not updated');
			}
		});
	}
	
	onDeleteClick(e){
		e.preventDefault();
		
		fetch(`books/${this.props.book._id}`, {
			method: 'DELETE'
		}).then((res) => {
			if (res.status === 200){
				console.log('Deleted');
				this.props.dispatch(mylibraryDelete(this.props.book._id));
			}
			else{
				console.log('Not deleted');
			}
		});
	}
	
	render(){
		return(
			<li className="list-group-item">
				
				<div className="widget-content p-0">
					<div className="widget-content-wrapper">
						<div className="widget-content-left">
							<div className="widget-heading">
								{this.props.book.title}
								<div className="badge ml-2">Автор:&nbsp;
								{this.props.book.author}
								</div>
							</div>
							<div className="widget-subheading">Жанр:
								<div>{this.props.book.genre}</div>
							</div>
						</div>
						<div className="widget-content-right">
							<span onClick={this.onStatusClick}><b>{this.props.book.done ? 'Прочитано' : 'В планах'}</b> </span>
							<button className="border-0 btn-transition btn btn-outline-danger" onClick={this.onDeleteClick}>
								<i className="fa fa-trash"></i>
							</button>
						</div>
					</div>
				</div>
			</li>
		)
	}

}

export default connect () (MyLibrary);

