import { sort } from '../../assets/img'

import './Table.scss'

const Table = (
  {
    data, 
    currentPage,
    setSortBy, 
    sortAsc, 
    setSortAsc
  }) => {

  const setSort = (sortBy) => {
    setSortBy(sortBy)
    setSortAsc(!sortAsc)

    const arrow = document.getElementById(sortBy)
    sortAsc ? arrow.classList.add('desc') : arrow.classList.remove('desc')
  }


  return (
    <>
      <table>
        <thead>
          <tr>
            <th width="10%" onClick={() => setSort('id')}>ID<img id='id' src={sort}/></th>
            <th width="50%" onClick={() => setSort('title')}>Заголовок<img id='title' src={sort}/></th>
            <th width="40%" onClick={() => setSort('description')}>Описание<img id='description' src={sort}/></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => 
                index >= (currentPage-1)*10 && 
                index < (currentPage*10) &&
                <tr key={index}>
                  <td className='table__id-column'>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              )}
        </tbody>
      </table>
      {!data.length && <div className='dataNotFound'>Ничего не найдено</div>}
    </>
  )
}

export default Table