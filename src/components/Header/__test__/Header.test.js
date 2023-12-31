import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('header', () => {

    test('should render some text passed into title prop', () => {
        render(<Header title="my Header" />);
        const headingElement = screen.getByText(/my Header/i);
        expect(headingElement).toBeInTheDocument();
    });
}) 
test('should render some text passed into title prop', () => {
    render(<Header title="my Header" />);
    const headingElement = screen.getByRole("heading", {name:"my Header"});
    expect(headingElement).toBeInTheDocument();
});


test('should render some text passed into title prop', () => {
    render(<Header title="my Header" />);
    const headingElement = screen.getByTitle("header");
    expect(headingElement).toBeInTheDocument();
});

test('should render some text passed into title prop', () => {
    render(<Header title="my Header" />);
    const headingElement = screen.getByTestId("header-one");
    expect(headingElement).toBeInTheDocument();
});

////find by

test('should render some text passed into title prop',async () => {
    render(<Header title="my Header" />);
    const headingElement = await screen.findByText("my Header");
    expect(headingElement).toBeInTheDocument();
});

///query by


test('should render some text passed into title prop', () => {
    render(<Header title="my Header" />);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
});

test('should render some text passed into title prop', () => {
    render(<Header title="my Header" />);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
}); 