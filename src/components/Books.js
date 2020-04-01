import React from 'react'
import books from "../mocks/books";

import BookFilter from './BookFilter';
import BookList from '../BookList'

class Books extends React.Component{
    constructor(){
        super()
        this.state = {
            books : books,
            selectedFilter : 'All',
        }
    }

    selectFilter = filter=>{
        this.setState({
            selectedFilter : filter,
            books :
                filter === 'All'
                    ? books
                    : books.filter(book=>book.category === filter)
        })
    }

    render(){
        const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

        const tabItems = filters.map(filter=>(
            <li
                className={filter === this.state.selectedFilter ? 'active' : ''}
                key={filter}
                onClick={()=>this.selectFilter(filter)}
            >
                <a href="#0">{filter}</a>
            </li>
        ))

        return (
            <section id="books">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Books</h2>
                            <hr className="star-primary"/>
                        </div>
                    </div>
                    {/* Book Filter */}
                    <BookFilter tabItems={tabItems} />
                    {/* Books List */}
                    <BookList books={this.state.books} />
                </div>
            </section>
        )
    }


}

export default Books
