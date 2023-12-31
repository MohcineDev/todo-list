import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


const MockFollowersList = () => {
    return <BrowserRouter>
        <FollowersList />
    </BrowserRouter>
}


describe('FollowersList', () => {

    test('should render Follower item 0', async () => {
        render(<MockFollowersList />);

        const followerDivElement = await screen.findByTestId('follower-item-0');
        screen.debug()
        expect(followerDivElement).toBeInTheDocument();
    });
    ///find all follwers
    test('should render Followers List', async () => {
        render(<MockFollowersList />);

        const followerDivElements = await screen.findAllByTestId(/follower-item/i);
        expect(followerDivElements.length).toBe(5);
    });

})