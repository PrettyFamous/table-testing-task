import Search from '../Search/Search';
import Table from '../Table/Table';
import Pages from '../Pages/Pages';


import data from '../../data/data'
import { useEffect, useState } from 'react';

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState('')
  const [parsedData, setParsedData] = useState(data)
  const [sortBy, setSortBy] = useState('')
  const [sortAsc, setSortAsc] = useState(false)
  
  useEffect(() => {
    let filteredData = parsedData

    if (!filter) {
      filteredData = data
    } 
    else {
      let filtered = data.filter(item => 
        item.id.toString().indexOf(filter) != -1 || 
        item.title.indexOf(filter) != -1 || 
        item.body.indexOf(filter) != -1)
  
      filteredData = filtered
    }

    let sortedData = [...filteredData]
    sortedData.sort((a, b) => {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    });

    if (!sortAsc) {
      sortedData.reverse()
    }

    setParsedData(sortedData);
  }, [filter, sortBy, sortAsc])

 
  return (
    <div className='container'>
      <Search setFilter={setFilter}/>
      <Table 
        data={parsedData} 
        currentPage={currentPage} 
        setSortBy={setSortBy}
        sortAsc={sortAsc}
        setSortAsc={setSortAsc}
      />
      <Pages 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        maxPage={Math.ceil(parsedData.length/10)}
      />
    </div>
  );
}

export default MainPage