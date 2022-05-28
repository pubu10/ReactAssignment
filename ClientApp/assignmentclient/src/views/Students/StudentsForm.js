import React, { useState, useEffect } from "react";
import { useFormNew } from "../../hooks/useFormNew";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import StudentsService from "../../services/StudentsService";
import Alert from "../../common/alert";
import FormFooterButton from "../../components/FormFooterButton";
import getMessage from "../../common/Messages";

const initialRecordState = {
  StudentID: 0,
  ClassroomID: 0,
  FirstName: "",
  LastName: "",
  ContactPerson: "",
  ContactNo: "",
  EmailAddress: "",
  Dateofbirth: "",
  Age: 0,
};

export function CreateStudents({
  setOpenDialog,
  mode,
  selectedstudents,
  students,
}) {
  const [isReset, setIsReset] = useState(false);

  const validate = () => {
    let temp = {};

    // temp.ClassroomID =
    //   values.ClassroomID !== "" ? "" : "This field is required";
    temp.FirstName = values.FirstName !== "" ? "" : "This field is required";
    temp.LastName = values.LastName !== "" ? "" : "This field is required";
    temp.ContactPerson =
      values.ContactPerson !== "" ? "" : "This field is required";
    temp.ContactNo = values.ContactNo !== "" ? "" : "This field is required";
    temp.EmailAddress =
      values.EmailAddress !== "" ? "" : "This field is required";
    temp.Dateofbirth =
      values.Dateofbirth !== "" ? "" : "This field is required";
    temp.Age = values.Age !== "" ? "" : "This field is required";

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useFormNew(initialRecordState, true, validate);

  useEffect(() => {
    resetForm();
    if (selectedstudents != null)
      setValues({
        ...selectedstudents,
      });
  }, [selectedstudents, isReset]);

  const saveRecord = (e) => {
    e.preventDefault();

    try {
      debugger;
      if (validate()) {
        let response;

        if (mode) {
          response = StudentsService.update(values);
          response.then((res) => {
            setOpenDialog(false);
            debugger;
            Alert(mode == 0 ? getMessage(201) : getMessage(202), 1);
            setValues(initialRecordState);
          });
        } else {
          response = StudentsService.create(values);
          var a = JSON.stringify(values);
          debugger;
          response.then((result) => {
            setOpenDialog(false);
            setOpenDialog(false);
            debugger;
            Alert(mode == 0 ? getMessage(201) : getMessage(202), 1);
            setValues(initialRecordState);
          });
        }
      }
    } catch (e) {
      debugger;
    }
  };

  return (
    <>
      <form noValidate autoComplete="on" onSubmit={saveRecord}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="First Name"
              name="FirstName"
              type="text"
              fullWidth
              variant="outlined"
              InputProps={{ inputProps: { min: 1, max: 999 } }}
              value={values.FirstName}
              onChange={handleInputChange}
              {...(errors.FirstName && {
                error: true,
                helperText: errors.FirstName,
              })}
              disabled={mode == 0 ? false : true}
              required="required"
              inputProps={{ maxLength: 150 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Last Name"
              name="LastName"
              type="text"
              fullWidth
              variant="outlined"
              value={values.LastName}
              onChange={handleInputChange}
              {...(errors.LastName && {
                error: true,
                helperText: errors.LastName,
              })}
              disabled={mode != 2 ? false : true}
              required="required"
              inputProps={{ maxLength: 150 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Contact Person"
              name="ContactPerson"
              type="text"
              fullWidth
              variant="outlined"
              value={values.ContactPerson}
              onChange={handleInputChange}
              {...(errors.ContactPerson && {
                error: true,
                helperText: errors.ContactPerson,
              })}
              disabled={mode != 2 ? false : true}
              required="required"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Email Address"
              name="EmailAddress"
              type="email"
              fullWidth
              variant="outlined"
              value={values.EmailAddress}
              onChange={handleInputChange}
              {...(errors.EmailAddress && {
                error: true,
                helperText: errors.EmailAddress,
              })}
              disabled={mode != 2 ? false : true}
              required="required"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              margin="dense"
              label=""
              name="Dateofbirth"
              type="date"
              fullWidth
              variant="outlined"
              value={values.Dateofbirth}
              onChange={handleInputChange}
              {...(errors.Dateofbirth && {
                error: true,
                helperText: errors.Dateofbirth,
              })}
              disabled={mode != 2 ? false : true}
              required="required"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              margin="dense"
              label=""
              name="ContactNo"
              type="text"
              fullWidth
              variant="outlined"
              value={values.ContactNo}
              onChange={handleInputChange}
              {...(errors.ContactNo && {
                error: true,
                helperText: errors.ContactNo,
              })}
              disabled={mode != 2 ? false : true}
              required="required"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Age"
              name="Age"
              type="number"
              fullWidth
              variant="outlined"
              value={values.Age}
              onChange={handleInputChange}
              {...(errors.Age && {
                error: true,
                helperText: errors.Age,
              })}
              disabled={mode != 2 ? false : true}
              required="required"
            />
          </Grid>
        </Grid>

        <FormFooterButton
          mode={mode}
          isReset={isReset}
          setIsReset={setIsReset}
        />
      </form>
    </>
  );
}
