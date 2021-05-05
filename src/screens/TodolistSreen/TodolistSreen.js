import React, { Component } from "react";
import TaskForm from "../../components/todolistComponent/TaskForm";
import Control from "../../components/todolistComponent/Control";
import TaskList from "../../components/todolistComponent/TaskList";
import _ from "lodash" ;
import './TodolistSreen.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], //id:unique,name,status
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: "",
        status: -1,
      },
      keyword: "",
      sortBy: 'name', 
      sortValue: 1,   
    };
    this.onToggleForm = this.onToggleForm.bind(this);
    this.onCloseForm = this.onCloseForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdateStatus = this.onUpdateStatus.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onShowForm = this.onShowForm.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSort = this.onSort.bind(this);
  }

  //componentWillMount Sẽ được gọi khi ta refresh trang web. Chỉ được gọi duy nhất 1 lần
  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }

  // onGenerateData() {
  //   var tasks = [
  //     {
  //       id: this.generateID(),
  //       name: "Ngôn ngữ C",
  //       status: true,
  //     },
  //     {
  //       id: this.generateID(),
  //       name: "Ngôn ngữ C++",
  //       status: true,
  //     },
  //     {
  //       id: this.generateID(),
  //       name: "Ngôn ngữ C#",
  //       status: false,
  //     },
  //   ];
  //   this.setState({
  //     tasks: tasks, //tasks 1 Khai báo trong constructor, tasks 2 Chính là var tasks
  //   });
  //   // Lưu vào localStorage
  //   localStorage.setItem("tasks", JSON.stringify(tasks)); //('keys',value). Nên chuyển từ object về string để dễ lưu trữ
  // }

  randomString() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateID() {
    return (
      this.randomString() +
      "-" +
      this.randomString() +
      "-" +
      this.randomString() +
      "-" +
      this.randomString() +
      "-" +
      this.randomString()
    );
  }

  // Thêm task
  onToggleForm() {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null,
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null,
      });
    }
  }

  onCloseForm() {
    this.setState({
      isDisplayForm: false,
    });
  }

  onShowForm() {
    this.setState({
      isDisplayForm: true,
    });
  }

  // data là tham số nhận được từ hàm onSubmit của TaskForm.js
  onSubmit(data) {
    var { tasks } = this.state;
    // Thêm dữ liệu
    if (data.id === "") {
      data.id = this.generateID();
      tasks.push(data);
    }
    // Cập nhật dữ liệu
    else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  onUpdateStatus(id) {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    // Nếu tìm thấy (khác -1)
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  findIndex(id) {
    var { tasks } = this.state;
    // Nếu result khác -1 => Tìm được vị trí
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    // Không tìm được thì trả về result là -1
    return result;
  }

  onDelete(id) {
    var { tasks } = this.state;
    // var index = this.findIndex(id);
    // Thay vì dùng hàm findIndex thì ta sẽ dùng thư viện của lodash
    var index = _.findIndex(tasks,(task)=>{ //Tham số thứ 1 là mảng mà chúng ta tìm kiếm. Tham số thứ 2 là từng đối tượng object mà chúng ta trả về
      // Tìm theo id
      return task.id === id;
    });
    if (index !== -1) {
      //Xóa phần từ ở vị trí được tìm thấy
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem(tasks, JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  onUpdate(id) {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    // Lấy ra vị trí của thằng cần cập nhật
    var taskEditing = tasks[index];
    // console.log(taskEditing);
    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  }

  // Nhận 2 tham số truyền về từ TaskList.js là filterName và filterStatus
  onFilter(filterName, filterStatus) {
    // Ép kiểu từ string về number
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
  }

  // Nhận về keyword được truyền từ onSearch trong Search.js
  onSearch(keyword) {
    this.setState({
      // 1 keyword là từ constructor 1 keyword là giá trị nhận về
      keyword: keyword,
    });
  }

  onSort(sortBy,sortValue){
    console.log(sortBy,' - ',sortValue);
    this.setState({
        sortBy:sortBy,
        sortValue:sortValue
    });
    console.log(this.state);
  }

  render() {
    var { tasks, isDisplayForm, taskEditing, filter, keyword, sortBy, sortValue} = this.state; 

    // Nếu biến filter tồn tại
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1; //Khác -1 là tìm thấy
        });
      }
      // Không nên dùng filter.status vì nó vừa có nghĩa là !== null, !== undefined, !== 0. '
      // Ở đây ta không cần kiểm tra điều kiện status vì filter.status luôn luôn có giá trị
      tasks = tasks.filter((task) => { //Hàm filter của javascript
        if (filter.status == -1) {
          return task; //Lấy tất cả
        } else {
          // Vì task.status có kiểu là true false nghĩa là 1,0 nên ta sẽ ép kiểu từ number về boolean của filter.status
          return task.status === (filter.status === 1 ? true : false);
        }
      });
    }

    // Nếu biến keyword tồn tại
    // if (keyword) {
    //   tasks = tasks.filter((task) => { //Hàm filter của javascript
    //     return task.name.toLowerCase().indexOf(keyword.toLowerCase) !== -1; //Khác -1 là tìm thấy
    //   });
    // }

    //Dùng hàm filter của thư viện lodash
    tasks = _.filter(tasks,(task) =>{ //Tham số thứ 1 là mảng mà chúng ta tìm kiếm. Tham số thứ 2 là từng đối tượng object mà chúng ta trả về
      return task.name.toLowerCase().indexOf(keyword.toLocaleLowerCase()) !==  -1;
    }) 

    //Nếu mà isDisplayForm là true thì hiển thị ngược lại không
    var elmTaskForm = isDisplayForm ? (
      <TaskForm
        onCloseForm={this.onCloseForm}
        onSubmit={this.onSubmit}
        task={taskEditing}
      />
    ) : (
      ""
    );

    // Sắp xếp theo tên
    if(sortBy === 'name'){
      tasks.sort((a,b) =>{
        if(a.name > b.name) return sortValue; //Sort tăng dần. Thay vì return 1 ta nên return sortValue (sortValue chính là 1)
        else if(a.name < b.name) return -sortValue; //Sort giảm dần. Thay vì return -1 ta nên return -sortValue (-sortValue chính là -1)
        else return 0;
      });
    }
    else{
      tasks.sort((a,b) =>{
        if(a.status > b.status) return -sortValue; //Kích hoạt nằm trên
        else if(a.status < b.status) return sortValue; //Kích hoạt nằm dưới
        else return 0;
      });
    }


    return (
      <div className="container">
        <div className="text-center">
          <h1>GHI CHÚ
              
          </h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {/* Start Form */}
            {elmTaskForm}
            {/* End Form */}
          </div>
          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5" />
              Thêm Ghi Chú
            </button>

            {/* <button
              type="button"
              className="btn btn-danger ml-5"
              onClick={this.onGenerateData}
            >
              <span className="fa fa-plus mr-5" />
              Generate Data
            </button> */}
            {/* Start Search - Sort */}
            <Control onSearch={this.onSearch} onSort={this.onSort} sortBy={sortBy} sortValue={sortValue}/>
            {/* End Search - Sort */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* Start List */}
                <TaskList
                  tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete}
                  onUpdate={this.onUpdate}
                  onFilter={this.onFilter}
                />
                {/* tasks = {tasks} nghĩa là prop tasks = this.state.tasks */}
                {/* End List */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// Các thao tác thêm xóa sửa luôn luôn thap tác trên App.js
