import { useEffect } from 'react'
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
  }


  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th width="10%" onClick={() => setSort('id')}>ID<img src={sort}/></th>
            <th width="50%" onClick={() => setSort('title')}>Заголовок<img src={sort}/></th>
            <th width="40%" onClick={() => setSort('description')}>Описание<img src={sort}/></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => 
                index >= (currentPage-1)*10 && 
                index < (currentPage*10) &&
                <tr key={index}>
                  <td className='table__id-column'>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                </tr>
              )
        }
        </tbody>
      </table>
      {!data.length && <div className='dataNotFound'>Ничего не найдено</div>}
    </>
  )
}

export default Table