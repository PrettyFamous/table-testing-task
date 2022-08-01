import Search from './components/Search/Search';
import Table from './components/Table/Table';
import Pages from './components/Pages/Pages';

import './App.css';

import data from './data/data'
import { useEffect, useState } from 'react';

function App() {
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
        item.description.indexOf(filter) != -1)
  
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

export default App;
