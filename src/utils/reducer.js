export const initialState = {
	user: {
		roleId: 20,
	},
	openMenu: 'menu',
	menuStyles: {},
	mobileSubMenu: false,
};
const actions = {
	setUser: 'SET_USER',
	removeUser: 'REMOVE_USER',
	openMenu: 'OPEN_MENU',
	openMobileMenu: 'OPEN_MOBILE_MENU',
	closeMobileMenu: 'CLOSE_MOBILE_MENU',
	closeMenu: 'CLOSE_MENU',
	openSub: 'OPEN_SUB',
	closeSub: 'CLOSE_SUB',
	closeBackToMenuBtn: 'CLOSE_BACK_TO_MENU_BTN',
};
const reducer = (state, action) => {
	switch (action.type) {
		case actions.setUser:
			return {
				...state,
				user: [...state.user, action.item],
			};
		case actions.openMenu:
			return {
				...state,
				openMenu: 'menu',
			};
		case actions.closeMenu:
			return {
				...state,
				openMenu: 'menu sm-menu',
			};
		case actions.openMobileMenu:
			return {
				...state,
				openMenu: 'menu has-transition',
				menuStyles: {
					transform: 'translate(0px)',
				},
			};
		case actions.closeMobileMenu:
			return {
				...state,
				openMenu: 'menu',
				menuStyles: {
					transform: 'translate(280px)',
				},
			};
		case actions.openSub:
			return {
				...state,
				mobileSubMenu: true,
			};
		case actions.closeSub:
			let subs = document.getElementsByClassName('submenu submenu-open');
			for (var i = 0; i < subs.length; i++) {
				subs[i].className = 'submenu';
			}

			return {
				...state,
				mobileSubMenu: false,
			};
		case actions.closeBackToMenuBtn:
			return {
				...state,
				mobileSubMenu: false,
			};
		default:
			return state;
	}
};

export default reducer;
