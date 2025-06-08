import { useSelector, useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const debounced = useDebouncedCallback(
    (value) => dispatch(changeFilter(value)),
    300,
  );

  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        defaultValue={filter}
        onChange={(e) => debounced(e.target.value)}
      />
    </div>
  );
}
