import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import { AlertContext } from '../context/alert/alertContext';

export const Navbar = () => {
	const {hide} = useContext(AlertContext);

	return (
		<nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
			<div className='navbar-brand'>
				Note App
			</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink onClick={hide} className='nav-link' end  to={'/'}>Главная</NavLink>
				</li>
				<li className="nav-item">
					<NavLink onClick={hide} className='nav-link' to={'/about'}>Информация</NavLink>
				</li>
			</ul>
		</nav>
	)
}


// style={({isActive}) => ({color: isActive ? 'white' : ''})}