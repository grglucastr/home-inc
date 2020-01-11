import React, { useState } from "react";
import { Alert, Form, Button, Row, Col } from "react-bootstrap";
import Switch from "react-switch";
import DatePicker from "react-datepicker";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const lastDay = new Date(currentYear, currentMonth, 0).getDate();

const emptyFilterParams = {
  period: {
    start: `${currentYear}-${currentMonth}-01`,
    end: `${currentYear}-${currentMonth}-${lastDay}`
  },
  active: true
};

export default function Filter({ onFilter }) {
  const [filterParams, setFilterParams] = React.useState(emptyFilterParams);
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  return (
    <div>
      <Alert variant="secondary" style={{ paddingBottom: 0 }}>
        <Form>
          <Row>
            <Col>
              <Form.Group style={{ margin: 0 }}>
                <Row>
                  <Col>
                    <Form.Label>Due Date</Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <DatePicker
                        id="start"
                        name="start"
                        placeholderText="2019-01-20"
                        className="form-control"
                        dateFormat="yyyy-MM-dd"
                        selected={dateStart}
                        onChange={date => setDateStart(date)}
                      />
                    </div>
                  </Col>
                  <Col>
                    <DatePicker
                      id="end"
                      name="end"
                      placeholderText="2019-01-20"
                      className="form-control"
                      dateFormat="yyyy-MM-dd"
                      selected={dateEnd}
                      onChange={date => setDateEnd(date)}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Form.Group style={{ margin: 0 }}>
                <Row>
                  <Col>&nbsp;</Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>
                      Active Expenses
                      <Switch
                        name="active"
                        id="active"
                        checked={filterParams.active}
                        onChange={evt => {
                          setFilterParams({
                            ...filterParams,
                            active: !filterParams.active
                          });
                        }}
                      />
                    </Form.Label>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col>
              <Row>
                <Col>&nbsp;</Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group style={{ margin: 0, marginTop: "10px" }}>
                    <Button
                      variant="primary"
                      type="button"
                      onClick={() => onFilter(filterParams)}
                    >
                      Search
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Alert>
    </div>
  );
}
