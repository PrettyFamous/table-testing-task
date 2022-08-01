import Search from './components/Search/Search';
import Table from './components/Table/Table';
import Pages from './components/Pages/Pages';

import './App.css';

import data from './data/data'
import { useEffect, useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState('')
  const [filteredData, setFilteredData] = useState(data)
  const [sortBy, setSortBy] = useState('')
  const [sortAsc, setSortAsc] = useState(false)
  
  /* При выборе колонки для сортировки в стейте sortBy ещё 1 клик будет старое значение */

  useEffect(() => {
    if (!filter) {
      setFilteredData(data)
    } 
    else {
      let filtered = data.filter(item => 
        item.id.toString().indexOf(filter) != -1 || 
        item.title.indexOf(filter) != -1 || 
        item.description.indexOf(filter) != -1)
  
      setFilteredData(filtered)
    }

    console.log(sortBy)
    console.log(sortAsc)
    console.log(filteredData)
    switch (sortBy) {
      case 'id':
        sortById(sortAsc)
        break
      case 'title':
        sortByTitle(sortAsc)
        break
      case 'description':
        sortByDescription(sortAsc)
    }
  }, [filter, sortBy, sortAsc, setSortBy, setSortAsc])

  const sortById = (asc) => {
    filteredData.sort((a,b) => {
      return a.id - b.id
    })

    if (!asc) {
      filteredData.reverse()
    }
  }

  const sortByTitle = (asc) => {
    filteredData.sort(compareTitle)

    if (!asc) {
      filteredData.reverse()
    }
  }

  const sortByDescription = (asc) => {
    filteredData.sort(compareDescription)

    if (!asc) {
      filteredData.reverse()
    }
  }

  const compareTitle = (a, b) => {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }
  const compareDescription = (a, b) => {
    if ( a.description < b.description ){
      return -1;
    }
    if ( a.description > b.description ){
      return 1;
    }
    return 0;
  }


  return (
    <div className='container'>
      <Search setFilter={setFilter}/>
      <Table 
        data={filteredData} 
        currentPage={currentPage} 
        setSortBy={setSortBy}
        sortAsc={sortAsc}
        setSortAsc={setSortAsc}
      />
      <Pages 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        maxPage={Math.ceil(filteredData.length/10)}
      />
    </div>
   
  );
}

export default App;
