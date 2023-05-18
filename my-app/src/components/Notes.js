import React, {useContext} from 'react';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { AlertContext } from '../context/alert/alertContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Notes = ({notes}) => {
	const {removeNode} = useContext(FirebaseContext);
	const alert = useContext(AlertContext);

	const onRemove = (id) => {
		removeNode(id);
		alert.show('Заметка была удалена', 'info');
	}

	const toLocaleString = (date) => {
		return `${(new Date(date)).toLocaleDateString()} ${(new Date(date)).toLocaleTimeString()}`;
	}

	return (
		<TransitionGroup component={'ul'} className="list-group">
			{notes.map(note => (
				<CSSTransition
					key={note.id}
					classNames={'note'}
					timeout={800}
				>
					<li className="list-group-item note">
						<div>
							<strong>{note.title}</strong>
							<small>{toLocaleString(note.date)}</small>
						</div>
						<button 
							onClick={() => onRemove(note.id)}
							type="button" 
							className="btn btn-outline-danger btn-sm">&times;</button>
					</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	)
};
