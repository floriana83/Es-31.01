import { ListGroup, InputGroup, FormControl } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Note from './Note';
import { addTodo } from '../Store/actions';
import { v4 as uuidv4 } from 'uuid';
const uuid = require ('uuid-v4');

const Notes = () => {
    const { todos } = useSelector(state => state);
    const dispatch = useDispatch();
    const onType = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            dispatch(
                addTodo({
                    text: e.target.value,
                    done: false,
                    id: uuid(),
                }));
            e.target.value = '';
        }
    };

    return (
        <div>
            <div>
            <h2>All tasks</h2>
            <ListGroup as='ol' numbered>
                {todos.map((todo) =>
                    (<Note key={todo.id} id={todo.id} note={todo} />))}
            </ListGroup>
            </div>

            <div>
            <h3>Uncompleted tasks</h3>
            <ListGroup as="ol" numbered>
                {todos.filter((todo) =>
                    (todo.done === false))
                    .map((todo) =>
                        (<Note key={todo.id} note={todo} />))}
            </ListGroup>
            </div>

            <div>
            <h3>Completed tasks</h3>
            <ListGroup as="ol" numbered>
                {todos.filter((todo) =>
                    (todo.done === true))
                    .map((todo) =>
                        (<Note key={todo.id} note={todo} />))}
            </ListGroup>
            </div>

            <div>
            <InputGroup size='sm' className='mb-3'>
                <InputGroup.Text id='inputGroup-sizing-sm'>
                    Insert a note
                </InputGroup.Text>
                <FormControl
                    onKeyDown={onType}
                    aria-label='Small'
                    aria-describedby='inputGroup-sizing-sm'
                />
            </InputGroup>
            </div>
            
        </div>
    );
};

export default Notes;