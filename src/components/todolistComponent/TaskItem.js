import React, { Component } from "react";

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id); //Lấy ra id truyền qua TaskList sau đó từ TaskList truyền qua App
    //TaskList là cha của TaskItem mà props của TaskList là onUpdateStatus nên ở đây ta cũng phải dùng onUpdateStatus
  };

  onDelete = () => {
    this.props.onDelete(this.props.task.id); //Lấy ra id truyền qua TaskList sau đó từ TaskList truyền qua App
    //TaskList là cha của TaskItem mà props của TaskList là onDelete nên ở đây ta cũng phải dùng onDelete
  };

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id); //Lấy ra id truyền qua TaskList sau đó từ TaskList truyền qua App
    //TaskList là cha của TaskItem mà props của TaskList là onUpdate nên ở đây ta cũng phải dùng onUpdate
  };

  render() {
    var { task, index } = this.props; //Đồng nghĩa: var {tasks,index} = this.props.tasks và this.props.index.
                                      //Vì ta để props trong <TaskItem/> bên TaskList.js là tasks và index thì ở đây ta phải gọi ra
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status === true
                ? "lab lab-success"
                : "lab lab-danger"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? "Hoàn Thành" : "Chưa Hoàn Thành"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onUpdate}
          >
            <span className="fas fa-pencil-alt mr-5" />
            Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete}
          >
            <span className="fa fa-trash mr-5" />
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
