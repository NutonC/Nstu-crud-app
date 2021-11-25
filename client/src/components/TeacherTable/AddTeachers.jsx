import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid, Container } from "@material-ui/core";

import { tableIcons } from "../../lib/material-table-config";

import {
  httpPostAddTeacher,
  httpGetTeachers,
  httpPutUpdateTeacher,
  httpDeleteTeacher,
} from "../../requests/admin.requests";

function AddNewTeachers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getTeachers() {
      const response = await httpGetTeachers();

      if (response?.data?.length > 0) {
        setData(response.data);
      }
    }

    getTeachers();
  }, []);

  const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: "phone" },
    {
      title: "Department",
      field: "department",
      lookup: { ICE: "ICE", EEE: "EEE", CSE: "CSTE" },
      initialEditValue: "ICE",
    },
    {
      title: "Position",
      field: "position",
      lookup: { Teacher: "Teacher", Student: "Student", Admin: "Admin" },
      initialEditValue: "Teacher",
    },
    {
      title: "Active",
      field: "status",
      type: "boolean",
      initialEditValue: true,
    },
  ];

  return (
    <Container>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <MaterialTable style={{marginTop:"100px"}}
          title="Add New Teacher...."
          icons={tableIcons}
          data={data.map((teacher) => {
            const {_id, name, email, phone, department,position, status} = teacher;
            return {_id, name, email, phone, department,position, status};
          })}
          columns={columns}
          editable={{
            onRowAdd: (newRow) =>
              new Promise(async (resolve, reject) => {
                //send req to server to add student
                const req = await httpPostAddTeacher({...newRow, joined: new Date()});
                console.log(req.data)
                if(!req.data){
                  alert(req.message);
                  reject();
                }
                const updatedRows = [
                  ...data,
                  { id: Math.floor(Math.random() * 100), ...newRow },
                ];
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
            onRowDelete: (selectedRow) =>
              new Promise(async (resolve, reject) => {
                //send data for deleteion to server
                const req = await httpDeleteTeacher(selectedRow);
                if (!req.data) {
                  alert(req.message);
                  reject();
                }

                const index = selectedRow.tableData.id;
                const updatedRows = [...data];
                updatedRows.splice(index, 1);
                setTimeout(() => {
                  setData(updatedRows);
                  // success msg
                  resolve();
                }, 2000);
              }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise(async (resolve, reject) => {
                //send data to server for update
                const req = await httpPutUpdateTeacher(updatedRow);
                if (!req.data) {
                  alert(req.message);
                  reject();
                }

                const index = oldRow.tableData.id;
                const updatedRows = [...data];
                updatedRows[index] = updatedRow;

                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
          }}
          options={{
            actionsColumnIndex: -1,
            addRowPosition: "first",
          }}
        />
      </Grid>
    </Container>
  );
}

export default AddNewTeachers;
