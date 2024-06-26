import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { mylibraryAdd } from './actions';

class MyLibraryAddInner extends React.Component {
	constructor(props){
		super(props)
		
		this.state = {
			title: '',
			author: '',
			genre: ''
		}
		
		this.ontitleChange = this.ontitleChange.bind(this);
		this.onauthorChange = this.onauthorChange.bind(this);
		this.ongenreChange = this.ongenreChange.bind(this);
		this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
	}

	ontitleChange(e){
		e.preventDefault();
		
		this.setState({
			title: e.target.value
		});
	}
	
	onauthorChange(e){
		e.preventDefault();
		
		this.setState({
			author: e.target.value
		});
	}
	
	ongenreChange(e){
		e.preventDefault();
		
		this.setState({
			genre: e.target.value
		});
	}
	
	onAddFormSubmit(e){
		console.log(this.props.onmealAdd);
		e.preventDefault();
		
		fetch('books', {
			method: 'POST',
			body: JSON.stringify({
				title: this.state.title,
				author: this.state.author,
				genre: this.state.genre
			}),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			return res.json();
		}).then((data) => {
			this.props.dispatch(mylibraryAdd(data._id, data.title, data.author, data.genre));
			this.props.history('/');
		});
	}
	
	render(){
		return(
			<div className="card-hover-shadow-2x mb-3 card">
				<div className="card-header-tab card-header">
					<div className="card-header-title font-size-lg text-capitalize font-weight-normal">
						<i className="bi bi-bookmark-heart"></i>&nbsp;MyLibrary
					</div>
				</div>
				<form onSubmit={this.onAddFormSubmit}>
				<div className="widget-content">
					<div className="widget-content-wrapper ml-2">
						<div className="space"><input type="text" value={this.state.title} onChange={this.ontitleChange} placeholder="Название" className="form-control"/></div>
						<div className="space"><input type="text" type="text" value={this.state.author} onChange={this.onauthorChange} placeholder="Автор" className="form-control"/></div>
						<div className="space"><input type="text" value={this.state.genre} onChange={this.ongenreChange} placeholder="Жанр" className="form-control" /></div>
						<div className="space"><input type="submit" value="Добавить" className="btn btn-primary"/></div>
					</div>
				</div>
				</form>
				<div className="d-lock text-right card-footer">
					<NavLink to='/' className="btn btn-primary">Вернуться</NavLink>
				</div>
			</div>

		)
	}

}

const MyLibraryAdd = (props) => {
	return(
	    <MyLibraryAddInner {...props} history={useNavigate()}/>
	)
}

export default connect() (MyLibraryAdd);

