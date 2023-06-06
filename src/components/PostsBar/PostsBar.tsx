import { ChangeEvent, FormEvent, useState } from 'react';
import { Form, Stack, Button, Image } from 'react-bootstrap';
import sortIcon from '../../assets/icons/sort.svg';
import searchIcon from '../../assets/icons/search.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSearch, setSort } from '../../store/displayedPosts/actions';
import { SORT_ASC, SORT_DESC, SortType } from '../../store/displayedPosts/sortTypes';

const PostsBar = () => {
  const { search, sort } = useAppSelector((state) => state.displayedPosts);
  const [searchValue, setSearchValue] = useState(search);
  const [sortValue, setSortValue] = useState<SortType>(sort);
  const dispatch = useAppDispatch();

  const searchInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setSearch({ search: searchValue }));
  };

  const sortButtonHandler = () => {
    let sort: SortType = null;

    switch (sortValue) {
      case SORT_ASC:
        sort = SORT_DESC;
        break;
      case SORT_DESC:
        sort = SORT_ASC;
        break;
      case null:
        sort = SORT_ASC;
        break;
      default:
        break;
    }
    setSortValue(sort);
    dispatch(setSort({ sort }));
  };

  return (
    <Form onSubmit={submitHandler}>
      <div className='d-flex mb-4 gap-2 flex-sm-nowrap flex-wrap '>
        <Form.Control
          type='search'
          className='me-auto'
          placeholder='Поиск по заголовкам...'
          defaultValue={searchValue}
          onChange={searchInputHandler}
        />

        <Button variant='success' type='submit'>
          <Stack direction='horizontal' gap={2}>
            <Image src={searchIcon} style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
            <span>Найти</span>
          </Stack>
        </Button>

        <Button variant='secondary' title='Сортировать' onClick={sortButtonHandler}>
          <Image src={sortIcon} style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
        </Button>
      </div>
    </Form>
  );
};

export default PostsBar;
