import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid, Container } from "@material-ui/core";

import { tableIcons } from "./table-config";

import { 
  httpPostAddStudent, 
  httpGetStudents, 
  httpPutUpdateStudent, 
  httpDeleteStudent 
} from "../../requests/admin.requests";

function AddStudents() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getStudents() {
      const response = await httpGetStudents();
    
      if(response?.data?.length > 0) {
        setData(response.data)
      }
    }

    getStudents();
  }, []);

  const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    {
        title: 'Hall',
        field: 'hall',
        lookup: { ASH: 'ASH', Bkh: 'Bkh', Abh: 'Abh' },
        initialEditValue: 'ASH',
      },
    {
        title: 'Department',
        field: 'department',
        lookup: { ICE: 'ICE', EEE: 'EEE', CSTE: 'CSTE' },
        initialEditValue: 'ICE',
    },
    { title: "Session", field: "session" },
    
    { title: 'Active', field: 'status', type: 'boolean', initialEditValue: true },
  ];

  return (
    <Container>
      <Grid container spacing={1} direction="column"
        alignItems="center"
        justifyContent="center">
        <MaterialTable style={{marginTop:"100px"}}
          title="Add New Student...."
          icons={tableIcons}
          data={data.map((student) => {
            const {_id, name, email, hall, department,session, status} = student;
            return {_id, name, email, hall, department, session, status};
          })}
          columns={columns}
          editable={{
            onRowAdd: (newRow) =>
              new Promise(async (resolve, reject) => {
                //send req to server to add student
                const req = await httpPostAddStudent({...newRow, joined: new Date()});
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
                const req = await httpDeleteStudent(selectedRow);
                if(!req.data){
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
                const req = await httpPutUpdateStudent(updatedRow);
                if(!req.data){
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

export default AddStudents;
