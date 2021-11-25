import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Routes, Route, Link } from "react-router-dom";
import AddNewTeachers from "../TeacherTable/AddTeachers";
import AddStudents from "../StudentTable/AddStudents";

const Menu = () => {
  const routes = ["/add-students", "/add-teachers"];
  return (
    <>
      <AppBar>
        <Tabs>
          <Tab label="Add Students" to={routes[0]} component={Link} />
          <Tab label="Add Teachers" to={routes[1]} component={Link} />
        </Tabs>
      </AppBar>
      <Routes>
        <Route path="/add-students" element={<AddStudents />} />
        <Route path="/add-teachers" element={<AddNewTeachers />} />
      </Routes>
    </>
  );
};

export default Menu;
