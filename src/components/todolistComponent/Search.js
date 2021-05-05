import React, { Component } from "react";

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword:'',
    } 
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onChange(e){
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]:value
    });
  }

  onSearch(){
    // console.log(this.state);
    // Truyền giá trị ra ngoài (để hàm onSearch của Control bên App.js nhận được)
    this.props.onSearch(this.state.keyword)
  }

  render() {
    var {keyword} = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
            name="keyword"
            value = {keyword}
            onChange = {this.onChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button" onClick={this.onSearch}>
              <span className="fa fa-search mr-5" />
              Tìm kiếm
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
