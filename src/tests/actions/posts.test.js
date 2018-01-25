import { addEntry, removeEntry, editEntry } from '../../actions/posts';

test('Should remove post', () => {
  const action = removeEntry({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_ENTRY',
    id: '123abc'
  });
});

test('Should edit post', () => {
  const action = editEntry( '123abc', {entry: 'New Update'});
  expect(action).toEqual({
    type: 'EDIT_ENTRY',
    id: '123abc',
    updates: {
      entry: 'New Update'
    }
  });
});
