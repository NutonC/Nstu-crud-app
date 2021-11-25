const API_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000';

export async function httpPostAddTeacher(teacherData) {
    try {
        const resp = await fetch(`${API_URL}/admin/add-teacher`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teacherData),
        });

        return await resp.json();
    } catch(err) {
        return {
            ok: false,
        };
    }
}

export async function httpGetTeachers() {
    try {
        const resp = await fetch(`${API_URL}/admin/get-teachers`);
        return await resp.json();
    }catch(err) {
        return {
            ok: false
        }
    }
}


export async function httpPutUpdateTeacher(teacherData) {
    try {
        const resp = await fetch(`${API_URL}/admin/update-teacher`, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teacherData),
        });

        return await resp.json();
    } catch(err) {
        return {
            ok: false,
        };
    }
}


export async function httpDeleteTeacher(teacherData) {
    try {
        const resp = await fetch(`${API_URL}/admin/delete-teacher`, {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teacherData),
        });

        return await resp.json();
    } catch(err) {
        return {
            ok: false,
        };
    }
}
export async function httpPostAddStudent(studentData) {
    try {
        const resp = await fetch(`${API_URL}/admin/add-student`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studentData),
        });

        return resp.json();
    } catch(err) {
        return {
            ok: false,
        };
    }
}

export async function httpGetStudents() {
    try {
        const resp = await fetch(`${API_URL}/admin/get-students`);
        return await resp.json();
    }catch(err) {
        return {
            ok: false
        }
    }
}

export async function httpPutUpdateStudent(studentData) {
    try {
        const resp = await fetch(`${API_URL}/admin/update-student`, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studentData),
        });

        return await resp.json();
    } catch(err) {
        return {
            ok: false,
        };
    }
}

export async function httpDeleteStudent(studentData) {
    try {
        const resp = await fetch(`${API_URL}/admin/delete-student`, {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studentData),
        });

        return await resp.json();
    } catch(err) {
        return {
            ok: false,
        };
    }
}

