import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MyLibraryList from './MyLibraryList';
import MyLibraryAdd from './MyLibraryAdd';
import { mylibraryAddAll } from './actions';

class App extends React.Component {
	
	componentDidMount(){
		fetch('books').then(function(res){
			return res.json();
		}).then((data) => {
			this.props.dispatch(mylibraryAddAll(data));
		});
	}
	
	render(){
		
	    return (
		    <div className="row d-flex justify-content-crnter container">
				<div className="col-md-8">
					<Provider store={this.props.store}>
						<Router>
							<Routes>
								<Route path="/" element={<MyLibraryList />}/>
								<Route path="/add" element={<MyLibraryAdd />}/>
							</Routes>
						</Router>
					</Provider>
				</div>
			</div>
        );
	}

}

export default connect()(App);
