import { fireEvent, render, screen } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const MockTodo = () => {
    return <BrowserRouter>
        <Todo />
    </BrowserRouter>
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement)

    })
}
describe('Todo', () => {

    test('should render input element', () => {

        render(<MockTodo />);

        addTask(['shopping'])

        const divElement = screen.getByText(/shopping/i)
        expect(divElement).toBeInTheDocument();
    });


    test('should render multiple items', () => {

        render(<MockTodo />);

        addTask(['coding', 'riding my bike', 'workout'])

        const divElements = screen.getAllByTestId('task-container')
        expect(divElements.length).toBe(3);
    });

    test('task should not have completed css class when its rendered', () => {

        render(<MockTodo />);

        addTask(['workout'])

        const divElement = screen.getByText(/workout/i)

        expect(divElement).not.toHaveClass('todo-item-active');
    });


    test('task should have completed css class when it clicked', () => {

        render(<MockTodo />);

        addTask(['workout'])

        const divElement = screen.getByText(/workout/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass('todo-item-active');
    });


});


