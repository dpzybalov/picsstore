import React from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import {
  Card,
  CardBody,
  Modal,
  ModalBody,
  Input,
  Row,
  Col, NavItem, Breadcrumb, BreadcrumbItem, Nav
} from "reactstrap"
import axios from "axios"
import {ContextLayout} from "../../../../utility/context/Layout"
import {AgGridReact} from "ag-grid-react"
import {
  Trash2,
} from "react-feather"
import {history} from "../../../../history"
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../assets/scss/pages/users.scss"
import {Link} from "react-router-dom";


class UsersList extends React.Component {
  state = {
    rowData: null,
    pageSize: 20,
    isVisible: true,
    reload: false,
    collapse: true,
    status: "Opened",
    role: "All",
    selectStatus: "All",
    verified: "All",
    department: "All",
    defaultColDef: {
      sortable: true
    },
    searchVal: "",
    columnDefs: [
      {
        headerName: "ФИО Фотографа",
        field: "username",
        filter: false,
        width: 800,
        cellRendererFramework: params => {
          return (
            <div
              className="d-flex align-items-center cursor-pointer"
              onClick={() => history.push("/app/user/edit")}
            >
              <span>{params.data.name}</span>
            </div>
          )
        }
      },
      {
        headerName: "Удалить",
        field: "transactions",
        width: 150,
        cellRendererFramework: params => {
          return (
            <div className="actions cursor-pointer">
              <Trash2
                size={15}
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows()
                  this.gridApi.updateRowData({remove: selectedData})
                }}
              />
            </div>
          )
        }
      }
    ],
    layoutName: "default",
    input: "",
    modal: false
  }


  onChange = input => {
    this.setState({input});
    console.log("Input changed", input);
  };

  onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    const layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  onChangeInput = event => {
    const input = event.target.value;
    this.setState({input});
    this.keyboard.setInput(input);
  };

  async componentDidMount() {
    await axios.get('http://212.220.45.36:81/api?method=photographers.list').then(response => {
      let rowData = response.data.photographers
      console.log(rowData.photographers)
      this.setState({rowData})
    })
  }

  onGridReady = params => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
  }

  filterData = (column, val) => {
    var filter = this.gridApi.getFilterInstance(column)
    var modelObj = null
    if (val !== "all") {
      modelObj = {
        type: "equals",
        filter: val
      }
    }
    filter.setModel(modelObj)
    this.gridApi.onFilterChanged()
  }

  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val))
      this.setState({
        pageSize: val
      })
    }
  }
  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val)
    this.setState({
      searchVal: val
    })
  }

  refreshCard = () => {
    this.setState({reload: true})
    setTimeout(() => {
      this.setState({
        reload: false,
        role: "All",
        selectStatus: "All",
        verified: "All",
        department: "All"
      })
    }, 500)
  }

  toggleCollapse = () => {
    this.setState(state => ({collapse: !state.collapse}))
  }
  onEntered = () => {
    this.setState({status: "Opened"})
  }
  onEntering = () => {
    this.setState({status: "Opening..."})
  }

  onEntered = () => {
    this.setState({status: "Opened"})
  }
  onExiting = () => {
    this.setState({status: "Closing..."})
  }
  onExited = () => {
    this.setState({status: "Closed"})
  }
  removeCard = () => {
    this.setState({isVisible: false})
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    const {rowData, columnDefs, defaultColDef, pageSize} = this.state
    return (

      <Row className="app-user-list">
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className="modal-dialog-centered modal-lg"
          backdrop={false}
        >
          <ModalBody>
            <Keyboard
              keyboardRef={r => (this.keyboard = r)}
              layoutName={this.state.layoutName}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
            />
          </ModalBody>
        </Modal>

        <Col sm="12">
          <Card>
            <CardBody>
                    <Breadcrumb className='breadcrumb-chevron'>
                      <BreadcrumbItem>
                        <Link to='/app/user/list'> Фотографы </Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active>
                        <span> Список фотографов </span>
                      </BreadcrumbItem>
                    </Breadcrumb>
              <div className="ag-theme-material ag-grid-table">
                <div className="ag-grid-actions d-flex justify-content-between flex-wrap mb-1">
                  <div className="sort-dropdown">
                  </div>
                  <div className="filter-actions d-flex">
                    <Input
                      className="w-100 mr-1 mb-1 mb-sm-0"
                      type="text"
                      placeholder="Поиск..."
                      //onClick={this.toggleModal}
                      onChange={e => this.updateSearchQuery(e.target.value)}
                      value={this.state.searchVal}
                    />
                  </div>
                </div>
                {this.state.rowData !== null ? (
                  <ContextLayout.Consumer>
                    {context => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        pagination={true}
                        pivotPanelShow="always"
                        paginationPageSize={pageSize}
                        resizable={true}
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                ) : null}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default UsersList
