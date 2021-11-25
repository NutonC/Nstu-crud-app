const { 
    addTeacher,
    findTeacher,
    addStudent,
    getAllStudent,
    updateStudent,
    deleteStudent,
    findStudent,
    updateTeacher,
    getAllTeacher,
    deleteTeacher,
    
} = require('../../models/admin/admin.model');

async function httpPostAddTeacher(req, res) {
    const { name, email, phone, department,position, status, joined } = req.body;

    const teacherExists = await findTeacher({email});
    if(teacherExists.length) {
        return res.status(409).json({ error: 'Failed to add teacher', message: 'Teacher already exists' });
    }

    try {
        const resp = await addTeacher({ name, email, phone, department,position, status, joined });
        if (resp.ok === 1) {
            return res.status(201).json({ data: resp.data, message: 'Successfully added teacher' });
        }
    }catch(err) {
        console.error(err)
        return res.status(400).json({ error: 'Failed to add teacher', message: err.message });
    }
}


async function httpPutUpdateTeacher(req, res) {
    const TeacherData = req.body;

    try {
        const resp = await updateTeacher(TeacherData);
        if(resp.ok === 1) {
            return res.status(200).json({ data: resp.data, message: 'Successfully updated teacher' });
        }
    }catch(err) {
        console.error(err);
        return res.status(400).json({ error: 'Failed to Update teacher data', message: err.message });
    }
}


async function httpDeleteTeacher(req, res) {
    const teacherData = req.body;

    try {
        const resp = await deleteTeacher(teacherData);
        if(resp.ok === 1) {
            return res.status(200).json({ data: resp.data, message: 'Successfully deleted teacher' });
        }
    }catch(err) {
        console.error(err);
        return res.status(400).json({ error: 'Failed to delete teacher data', message: err.message });
    }
}


async function httpGetAllTeacher(req, res) {
    try {
        const resp = await getAllTeacher();
        if(resp.ok === 1) {
            return res.status(200).json({ data: resp.data, message: 'Successfully Fetched' });
        }
    }catch(err) {
        console.error(err);
        return res.status(400).json({ error: 'Failed to fetch teacher data', message: err.message });
    }
}



async function httpPostAddStudent(req, res) {
    const { name, email, hall, department,session, status, joined } = req.body;

    const studentExists = await findStudent({email});
    if(studentExists.length) {
        return res.status(409).json({ error: 'Failed to add student', message: 'Student already exists' });
    }

    try {
        const resp = await addStudent({ name, email, hall, department,session, status, joined });
        if (resp.ok === 1) {
            return res.status(201).json({ data: resp.data, message: 'Successfully added student' });
        }
    }catch(err) {
        console.error(err)
        return res.status(400).json({ error: 'Failed to add student', message: err.message });
    }
}

async function httpGetAllStudent(req, res) {
    try {
        const resp = await getAllStudent();
        if(resp.ok === 1) {
            return res.status(200).json({ data: resp.data, message: 'Successfully Fetched' });
        }
    }catch(err) {
        console.error(err);
        return res.status(400).json({ error: 'Failed to fetch student data', message: err.message });
    }
}

async function httpPutUpdateStudent(req, res) {
    const studentData = req.body;

    try {
        const resp = await updateStudent(studentData);
        if(resp.ok === 1) {
            return res.status(200).json({ data: resp.data, message: 'Successfully updated student' });
        }
    }catch(err) {
        console.error(err);
        return res.status(400).json({ error: 'Failed to Update student data', message: err.message });
    }
}

async function httpDeleteStudent(req, res) {
    const studentData = req.body;

    try {
        const resp = await deleteStudent(studentData);
        if(resp.ok === 1) {
            return res.status(200).json({ data: resp.data, message: 'Successfully deleted student' });
        }
    }catch(err) {
        console.error(err);
        return res.status(400).json({ error: 'Failed to delete student data', message: err.message });
    }
}

module.exports = {
    httpPostAddStudent,
    httpPostAddTeacher,
    httpGetAllStudent,
    httpPutUpdateStudent,
    httpDeleteStudent,
    httpPutUpdateTeacher,
    httpDeleteTeacher,
    httpGetAllTeacher
}