import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1, //all(tất cả): -1, active(kích hoạt): 1, deactive: 0
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    // Lấy ra các đối tượng ô input
    var target = e.target;
    // Lấy ra name của các ô input
    var name = target.name;
    // Lấy ra giá trị của các ô input
    var value = target.value;
    this.props.onFilter(
      // Truyền 2 tham số ra ngoài (truyền đến hàm onFilter của TaskList bên App.js)
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus,
    )
    this.setState({
      [name]: value
    });
  }

  render() {
    var {tasks} = this.props; //Đồng nghĩa: var {tasks} = this.props.tasks. 
                              //Vì ta để props trong <TaskList/> bên App.js là tasks thì ở đây ta phải gọi ra
    var  { filterName,filterStatus } = this.state;
    var elmTasks = tasks.map((task,index) => {
      return <TaskItem
                key={task.id}
                index={index}
                task={task}
                onUpdateStatus = {this.props.onUpdateStatus} //Vì trong TaskList bên App.js có truyền vào props onUpdateStatus nên bên TaskList.js có thể gọi ra
                onDelete = {this.props.onDelete}             //Vì trong TaskList bên App.js có truyền vào props onDelete nên bên TaskList.js có thể gọi ra
                onUpdate = {this.props.onUpdate}             //Vì trong TaskList bên App.js có truyền vào props onUpdate nên bên TaskList.js có thể gọi ra
             />
    });

    return (
      <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td/>
            <td>
              <input type="text" className="form-control" name="filterName" value = { filterName } onChange={this.onChange}/>
            </td>
            <td>
              <select className="form-control" name="filterStatus" value = { filterStatus } onChange={this.onChange}>
                <option value={-1}>Tất Cả</option>
                <option value={0}>Chưa hoàn thành</option>
                <option value={1}>Hoàn thành</option>
              </select>
            </td>
            <td/>
          </tr>
        {/* Start TaskItem */}
        {elmTasks}
        {/* End TaskItem */}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
