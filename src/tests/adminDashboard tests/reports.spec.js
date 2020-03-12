import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReportsPage from '../../components/AdminDashboard/AdminDashboard';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { renderWithRouter } from '../testUtils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

let ReportsComponent = (
	<BrowserRouter>
		<ReportsPage />
	</BrowserRouter>
);
afterEach(cleanup);

describe('Reports', () => {
	const mockStore = configureStore();
	let store, wrapper;

	it('renders without crashing', () => {
		store = mockStore();

		render(<Provider store={store}>ReportsComponent</Provider>);
	});

	// it('matches snapshot', () => {
	// 	const tree = renderer.create(Reports);
	// 	expect(tree.toJSON()).toMatchSnapshot();
	// });
});
