import React from 'react'

class SearchBar extends React.Component {

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" action="">
          <label htmlFor="">Image Search</label>
          <input className="field" type="text" />
        </form>
      </div>
    )
  }
}

export default SearchBar