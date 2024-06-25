export const MYLIBRARY_ADD = 'MYLIBRARY_ADD'
export const MYLIBRARY_ALL = 'MYLIBRARY_ALL'
export const MYLIBRARY_DELETE = 'MYLIBRARY_DELETE'
export const MYLIBRARY_UPDATE = 'MYLIBRARY_UPDATE'

export function mylibraryAdd (_id, title, author, genre){
	return { type: MYLIBRARY_ADD, _id, title, author, genre};
}

export function mylibraryAddAll (mylibrary_list){
	return { type: MYLIBRARY_ALL, mylibrary_list };
}

export function mylibraryDelete (_id){
	return { type: MYLIBRARY_DELETE, _id };
}

export function mylibraryUpdate (_id){
	return { type: MYLIBRARY_UPDATE, _id };
}