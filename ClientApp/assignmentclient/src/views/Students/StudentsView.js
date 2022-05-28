import React, { useState, useEffect } from "react";
import StudentsService from "../../services/StudentsService";
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
import { CreateStudents } from "./StudentsForm";
import Alert from "../../common/alert";
import getMessage from "../../common/Messages";
import ConfirmDialog from "../../common/ConfirmDialog";
import PopupFrom from "../../components/PopupFrom";
import GridAddButton from "../../components/GridAddButton";
import DeleteButton from "../../components/DeleteButton";
import CheckBoxGrid from "../../components/CheckBoxGrid";

const fromName = "Students Registration";

const columns = [
  {
    field: "studentID",
    type: "number",
    headerName: "Student ID",
    width: 200,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "firstName",
    headerName: "First Name",
    minWidth: 200,
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "lastName",
    headerName: "Last Name",
    minWidth: 200,
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "contactPerson",
    headerName: "Contact Person",
    minWidth: 200,
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "contactNo",
    headerName: "Contact No",
    minWidth: 200,
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "emailAddress",
    headerName: "Email Address",
    minWidth: 200,
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "dateofbirth",
    headerName: "Date of birth",
    minWidth: 200,
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "age",
    headerName: "Age",
    minWidth: 200,
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
];

export default function StudentsView() {
  const [errorList, setErrorList] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedstudents, setselectedstudents] = useState(null);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const [mode, setMode] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [canDelete, setCanDelete] = useState(false);

  useEffect(() => {
    debugger;
    getStudents();
  }, [openCreateDialog, confirmDialog]);

  const getStudents = () => {
    StudentsService.getAll()
      .then((response) => {
        debugger;
        setStudents(response.data);
      })
      .catch((e) => {
        debugger;
        Alert(getMessage(400), 3); //Data Load Failure.
      });
  };

  const rows = () => {
    return students.map((x, key) => ({
      id: key,
      studentID: x.studentID,
      classroomID: x.classroomID,
      firstName: x.firstName,
      lastName: x.lastName,
      contactPerson: x.contactPerson,
      contactNo: x.contactNo,
      emailAddress: x.emailAddress,
      dateofbirth: x.dateofbirth,
      age: x.age,
    }));
  };

  const handleCreateDialogOpen = () => {
    setselectedstudents(null);
    setErrorList([]);
    setMode(0);
    setOpenCreateDialog(true);
  };

  const handleViewDialogOpen = (item) => {
    if (item != null) {
      StudentsService.get(item.studentID)
        .then((res) => {
          setselectedstudents(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
      setMode(2);
      setOpenCreateDialog(true);
    }
  };

  const onDelete = () => {
    const lstRowId = [];

    selectedRows.map((id) => {
      let selectedRow = students.find(
        (x) => x.studentID === rows()[id].studentID
      );
      if (selectedRow != null) lstRowId.push(selectedRow);
    });

    if (lstRowId.length != 0)
      StudentsService.BulkRemove(lstRowId)
        .then((res) => {
          setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
          });

          if (res.data) {
            Alert(getMessage(203), 1);
          } else {
            Alert(getMessage(303), 3);
          }
        })
        .catch((e) => {
          console.log(e);
          Alert(getMessage(303), 3);
        });
  };

  return (
    <>
      <Card sx={{ m: 5, marginTop: 2 }}>
        <CardHeader title={fromName}></CardHeader>
        <CardContent>
          <GridAddButton
            fromName={fromName}
            handleCreateDialogOpen={handleCreateDialogOpen}
          />

          <DeleteButton
            canDelete={canDelete}
            setConfirmDialog={setConfirmDialog}
            onDelete={onDelete}
          />

          <br />
          <br />

          <CheckBoxGrid
            rows={rows()}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            setCanDelete={setCanDelete}
            setSelectedRows={setSelectedRows}
            handleViewDialogOpen={handleViewDialogOpen}
          />

          <PopupFrom
            openDialog={openCreateDialog}
            setOpenDialog={setOpenCreateDialog}
            title={fromName}
            mode={mode}
            setMode={setMode}
          >
            <CreateStudents
              setOpenDialog={setOpenCreateDialog}
              mode={mode}
              selectedstudents={selectedstudents}
              students={students}
            />
          </PopupFrom>

          <ConfirmDialog
            openDialog={confirmDialog}
            setOpenDialog={setConfirmDialog}
            selectedRecorde={selectedstudents}
          ></ConfirmDialog>
        </CardContent>
      </Card>
    </>
  );
}
