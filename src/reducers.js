import { combineReducers } from 'redux';
import { MYLIBRARY_ADD, MYLIBRARY_ALL, MYLIBRARY_DELETE, MYLIBRARY_UPDATE } from './actions';

function todo(state = [], action){
	switch (action.type) {
		case MYLIBRARY_ADD:
		    return [
			    ...state, 
				{
					_id: action._id, 
					title: action.title, 
					author: action.author,
					genre: action.genre,					
					done: false
				}
			]
		case MYLIBRARY_ALL:
		    return [
			    ...action.mylibrary_list
			]
		case MYLIBRARY_DELETE:
		    return state.filter(function(book){
				return book._id !== action._id;
			})
		case MYLIBRARY_UPDATE:
		    return state.map(function(book){
				if (book._id ===action._id){
					return {...book, done: !book.done}
				}
				return book
			})
		default:
		    return state
	}
}

export default combineReducers({
	books: todo
});