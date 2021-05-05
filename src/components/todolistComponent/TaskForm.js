import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }

  // Gọi mỗi lần refresh trang web
  componentWillMount() {
    // Vì TaskForm bên App.js truyền props là task nên bên TaskForm.js phải gọi props là task
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status,
      });
      console.log(this.state);
    }
  }

  componentWillReceiveProps(nextProps) {
    // Vì TaskForm bên App.js truyền props là task nên bên TaskForm.js phải gọi props là task
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status,
      });
    } else if (nextProps && nextProps.task === null) {
      // console.log('Sửa thành thêm');
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    }
  }

  // Arrow Function
  onCloseForm = () => {
    // onCloseForm này chính là props ta nhận từ bên thằng <TaskForm/> bên App.js
    this.props.onCloseForm();
  };

  onChange = (e) => {
    // Lấy ra các đối tượng ô input
    var target = e.target;
    // Lấy ra name của các ô input
    var name = target.name;
    // Lấy ra giá trị của các ô input
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false; //Ép kiểu string về boolean
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    // Ngăn chặn load lại trang
    e.preventDefault();
    // onSubmit này chính là props ta nhận từ bên thằng <TaskForm/> bên App.js
    this.props.onSubmit(this.state);
    // Khi submit form tiến hành truyền state này ra ngoài để bên thằng <TaskForm/> bên App.js nhận được
    // Sau khi lưu lại thì reset các ô input và đóng form thêm
    this.onClear();
    this.onCloseForm();
  };

  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
  };

  render() {
    var { id } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== "" ? "Cập nhật công việc" : "Thêm Công Việc"}
            <span
              className="fa fa-times-circle text-right"
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span className="fa fa-plus mr-5"></span>Lưu Lại
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                <span className="fa fa-close mr-5"></span>Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
