import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Button,
  Breadcrumb, BreadcrumbItem
} from "reactstrap"
import {Edit, Trash} from "react-feather"
import {Link} from "react-router-dom"

import userImg from "../../../../assets/img/portrait/small/avatar-s-18.jpg"
import "../../../../assets/scss/pages/users.scss"

class UserView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle> <Breadcrumb className='breadcrumb-chevron'>
                  <BreadcrumbItem>
                    <Link to='/app/user/list'> Фотографы </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>
                    <span> Профиль фотографа </span>
                  </BreadcrumbItem>
                </Breadcrumb>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">

                  <Col className="pl-0" sm="12">
                    <Media className="d-sm-flex d-block">
                      <Media className="mt-md-1 mt-0" left>
                        <Media
                          className="rounded mr-2"
                          object
                          src={userImg}
                          alt="Generic placeholder image"
                          height="112"
                          width="112"
                        />
                      </Media>
                      <Media body>
                        <Row>
                          <Col sm="9" md="6" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  ФИО
                                </div>
                                <div>Зыбалов Дмитрий</div>
                              </div>
                            </div>
                          </Col>
                          <Col md="12" lg="5">
                            <Button.Ripple className="mr-1" color="primary" outline>
                      <Link to="/app/user/edit">
                        <Edit size={15}/>
                        <span className="align-middle ml-50">Редактировать</span>
                      </Link>
                    </Button.Ripple>
                    <Button.Ripple color="danger" outline>
                      <Trash size={15}/>
                      <span className="align-middle ml-50 mt-50">Удалить</span>
                    </Button.Ripple>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>

                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default UserView
