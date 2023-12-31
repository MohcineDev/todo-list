import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom'

const MockTodoFooter = ({ numTasks }) => {
    return <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numTasks} />
    </BrowserRouter>
}

///organizing blocks
describe('TodoFooter', () => {

    describe('for function 1', () => {

        test('should render the correct amount of incomplete tasks', () => {
            render(<MockTodoFooter numTasks={5} />);
            const paragraphElement = screen.getByText(/5 tasks left/i);
            expect(paragraphElement).toBeInTheDocument();
        });
    })

    test('should render "task" when the number of incomplete tasks is 1', () => {
        render(<MockTodoFooter numTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });
})
 
test('should render "task" when the number of incomplete tasks is 1', () => {
    render(<MockTodoFooter numTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeTruthy()
});


test('should render "task" when the number of incomplete tasks is 1', () => {
    render(<MockTodoFooter numTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible()
});

test('should render "task" when the number of incomplete tasks is 1', () => {
    render(<MockTodoFooter numTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toContainHTML('p')
});

test('should render "task" when the number of incomplete tasks is 1', () => {
    render(<MockTodoFooter numTasks={1} />);
    const paragraphElement = screen.getByTestId('paragraph');
    expect(paragraphElement).toHaveTextContent('1 task left')
});

///its textContent
test('should render "task" when the number of incomplete tasks is 1', () => {
    render(<MockTodoFooter numTasks={1} />);
    const paragraphElement = screen.getByTestId('paragraph');
    expect(paragraphElement.textContent).toBe('1 task left')
});  