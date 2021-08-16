import React from "react"
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup, TabPane, CardHeader,
} from "reactstrap"
import "../../../../assets/scss/plugins/extensions/dropzone.scss"
import DropzoneAccept from "../../../../extensions/dropzone/DropzoneAccept";


class UserAccountTab extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" st>
          <Form onSubmit={e => e.preventDefault()}>
            <Row>
              <Col md="12" sm="12">
                <FormGroup>
                  <CardHeader>
                  <Input
                    type="text"
                    id="username"
                    placeholder="ФИО"
                  />
                  </CardHeader>
                  <DropzoneAccept />{" "}
                </FormGroup>
              </Col>
              <Col className="d-flex justify-content-end flex-wrap mt-2" sm="12">
                <Button.Ripple className="mr-1" color="primary">
                  Добавить фотографа
                </Button.Ripple>
                <Button.Ripple color="flat-warning">Сбросить</Button.Ripple>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default UserAccountTab
