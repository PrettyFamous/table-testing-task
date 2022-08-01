import { useEffect } from 'react'
import './Pages.scss'

const Pages = ({currentPage, setCurrentPage, maxPage}) => {
  useEffect(() => {
    document.querySelector('.active')?.classList.remove('active')
    document.querySelectorAll('.button__number')[currentPage-1].classList.add('active')
  }, [currentPage])


  const incPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const decPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const NumberPages = () => {
    let buttons = []
    for (let i = 1; i <= maxPage; i++) {
      buttons.push(
        <button key={i}
          className='button__number' 
          onClick={(e) => setCurrentPage(Number(e.target.innerText))}
        >
          {i}
        </button>
      )
    }

    return buttons
  }



  return (
    <footer className='pages'>
      <button className='button__selector' onClick={decPage}>Назад</button>
      <div>{NumberPages()}</div>
      <button className='button__selector' onClick={incPage}>Далее</button>
    </footer>
  )
}

export default Pages