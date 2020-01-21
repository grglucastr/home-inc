import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Form as FormUI,
  Button,
  Container,
  Row,
  Col,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import CurrencyInput from "react-currency-input";
import CheckIcon from "./CheckIcon";

import expenseTypeService from "../services/expenseTypeService";
import expenseService from "../services/expenseService";
import periodicityService from "../services/periodicityService";
import converterToSimpleDate from "../util/convertToSimpleDate";

const newExepense = {
  id: "",
  title: "",
  description: "",
  expenseType: { id: "" },
  cost: 0,
  dueDate: converterToSimpleDate(new Date()),
  invoiceDate: "",
  servicePeriodStart: "",
  servicePeriodEnd: "",
  periodicity: "JUST_ONCE",
  paid: false
};

export default function Form() {
  const { id } = useParams("id");
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [expense, setExpense] = useState(newExepense);
  const [periodicities, setPeriodicities] = useState([]);
  const [formDueDate, setFormDueDate] = useState(new Date());
  const [checkPaid, setCheckPaid] = useState(false);
  const [repeatAction, setRepeatAction] = useState(false);
  const history = useHistory();

  React.useEffect(() => {
    expenseTypeService.listAll().then(response => setExpenseTypes(response));
    if (id) {
      expenseService.findById(id).then(
        response => {
          setExpense(response.data);
          if (response.data.periodicity !== "JUST_ONCE") {
            setRepeatAction(true);
          }
          setFormDueDate(new Date(response.data.dueDate.replace(/-/g, "/")));
          setCheckPaid(response.data.paid);
        },
        () => history.push("/notFound")
      );
    } else {
      setExpense(newExepense);
      setFormDueDate(new Date());
    }

    periodicityService.listAll().then(values => setPeriodicities(values));
  }, [id, history]);

  const submitForm = e => {
    e.preventDefault();
    setExpense({
      ...expense,
      paid: checkPaid,
      periodicity: repeatAction ? expense.periodicity : "JUST_ONCE"
    });

    expenseService
      .create(expense)
      .then(() => {
        window.alert("Saved!");
        history.push("/");
      })
      .catch(err => console.error("Error on save", err));
  };

  const cancel = _ => {
    history.goBack();
  };

  const disableExpense = _ => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (confirmed) {
      expenseService.delete(id).then(response => {
        if (response.status === 204) {
          window.alert("Expense deleted!");
          history.push("/");
        }
      });
    }
  };

  return (
    <div>
      <FormUI onSubmit={submitForm}>
        <FormUI.Group>
          <FormUI.Label htmlFor="title">Description</FormUI.Label>
          <FormUI.Control
            type="text"
            id="title"
            name="title"
            placeholder="Conta de Luz"
            style={{ width: "50%" }}
            maxLength={80}
            value={expense.title}
            onChange={evt =>
              setExpense({ ...expense, title: evt.target.value })
            }
          />
        </FormUI.Group>

        <FormUI.Group>
          <FormUI.Label htmlFor="type">Type</FormUI.Label>
          <FormUI.Control
            as="select"
            id="type"
            name="type"
            style={{ width: "20%" }}
            value={expense.expenseType ? expense.expenseType.id : 1}
            onChange={evt =>
              setExpense({ ...expense, expenseType: { id: evt.target.value } })
            }
          >
            <option disabled>Select Type</option>
            {expenseTypes.map(exp => (
              <option key={exp.id} value={exp.id}>
                {exp.name}
              </option>
            ))}
          </FormUI.Control>
        </FormUI.Group>

        <FormUI.Group>
          <FormUI.Label htmlFor="cost">Cost</FormUI.Label>
          <div>
            <CurrencyInput
              prefix="R$ "
              decimalSeparator=","
              thousandSeparator="."
              id="cost"
              name="cost"
              placeholder="R$ 150,00"
              value={expense.cost}
              onChange={(evt, value, maskedValue) =>
                setExpense({ ...expense, cost: value })
              }
              className="form-control"
              style={{ width: "20%" }}
            />
          </div>
        </FormUI.Group>
        <FormUI.Group>
          <FormUI.Label htmlFor="dueDate">Due Date</FormUI.Label>
          <div>
            <DatePicker
              id="dueDate"
              name="dueDate"
              required="required"
              placeholderText="2019-01-20"
              className="form-control"
              dateFormat="yyyy-MM-dd"
              selected={formDueDate}
              value={formDueDate}
              onChange={date => {
                setFormDueDate(date);
                setExpense({
                  ...expense,
                  dueDate: converterToSimpleDate(date)
                });
              }}
            />
          </div>
        </FormUI.Group>

        <FormUI.Group>
          <FormUI.Check
            type="checkbox"
            id="repeat"
            name="repeat"
            value={repeatAction}
            checked={repeatAction}
            onChange={() => {
              setExpense({ ...expense, periodicity: "YEARLY" });
              setRepeatAction(!repeatAction);
            }}
            label="Repeat this action"
          />
        </FormUI.Group>

        {repeatAction && (
          <FormUI.Group>
            <FormUI.Label id="periodicity">Repeat periodicity</FormUI.Label>
            <FormUI.Control
              as="select"
              id="periodicity"
              style={{ width: "20%" }}
              value={expense.periodicity}
              onChange={evt =>
                setExpense({ ...expense, periodicity: evt.target.value })
              }
            >
              {periodicities.slice(1).map(p => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </FormUI.Control>
          </FormUI.Group>
        )}

        {expense.paid && (
          <FormUI.Group>
            <FormUI.Label htmlFor="paid">Status</FormUI.Label>

            <ButtonToolbar>
              <ToggleButtonGroup
                type="radio"
                name="paid"
                defaultValue={checkPaid}
                value={checkPaid}
                onChange={status => setCheckPaid(status)}
              >
                <ToggleButton
                  variant="warning"
                  value={false}
                  checked={checkPaid}
                >
                  <CheckIcon visible={!checkPaid} />
                  Not Paid
                </ToggleButton>
                <ToggleButton variant="success" value={true}>
                  <CheckIcon visible={checkPaid} />
                  Paid
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </FormUI.Group>
        )}

        <FormUI.Group>
          <FormUI.Label htmlFor="description">Comments</FormUI.Label>
          <FormUI.Text
            type="text"
            id="description"
            name="description"
            as="textarea"
            className="form-control"
            rows="3"
            style={{ width: "50%" }}
            value={expense.description}
            onChange={evt =>
              setExpense({ ...expense, description: evt.target.value })
            }
          />
        </FormUI.Group>

        <FormUI.Group style={{ width: "65%" }}>
          <Container>
            <Row>
              <Col>
                <Button type="button" variant="light" onClick={() => cancel()}>
                  Cancel
                </Button>
              </Col>

              <Col>
                {id && (
                  <Button
                    type="button"
                    variant="danger"
                    onClick={() => disableExpense()}
                  >
                    Delete
                  </Button>
                )}
              </Col>

              <Col>
                <Button type="submit">Save</Button>
              </Col>
            </Row>
          </Container>
        </FormUI.Group>
      </FormUI>
    </div>
  );
}
