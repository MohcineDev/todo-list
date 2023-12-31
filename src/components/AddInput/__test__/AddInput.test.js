import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';


const mockedSetTodo = jest.fn()

describe('AddInput', () => {

    test('should render input element', () => {

        render(<AddInput
            todos={[]}
            setTodos={mockedSetTodo}
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });
    //typing
    test('should be able to type to input', () => {

        render(<AddInput
            todos={[]}
            setTodos={mockedSetTodo}
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: 'shopping' } })
        expect(inputElement.value).toBe('shopping');
    });

    ///click btn
    test('should have empty input when add btn is clicked', () => {

        render(<AddInput
            todos={[]}
            setTodos={mockedSetTodo}
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: 'shopping' } })
        
        const addButton = screen.getByRole('button', {name:/add/i})
        fireEvent.click(addButton)


        expect(inputElement.value).toBe('');
    });
})