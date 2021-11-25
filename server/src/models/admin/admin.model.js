const teacherDB = require('../mongo-db/teacher.mongo');
const studentDB = require('../mongo-db/student.mongo');

async function addTeacher(teacherData) {
    try {
        const resp = await teacherDB.create(teacherData);
        return {
            ok: 1,
            data: resp
        }
    }catch (err) {
        throw new Error(err.message);
    }
};

async function addStudent(studentData) {
    try {
        const resp = await studentDB.create(studentData);
        return {
            ok: 1,
            data: resp
        }
    }catch (err) {
        throw new Error(err.message);
    }
};

async function getAllStudent() {
    try {
        const data = await studentDB.find({}, {
            '__v': 0
        });
        return {
            ok: 1,
            data
        }
    }catch(err) {
        throw new Error(err.message);
    }
}

async function getAllTeacher() {
    try {
        const data = await teacherDB.find({}, {
            '__v': 0
        });
        return {
            ok: 1,
            data
        }
    }catch(err) {
        throw new Error(err.message);
    }
}

async function updateStudent(studentData) {
    try {
        const data = await studentDB.findOneAndUpdate({
            _id: studentData._id
        }, studentData, {
            upsert: true
        });
        return {
            ok: 1,
            data
        }
    }catch(err) {
        throw new Error(err.message);
    }
}

async function updateTeacher(teacherData) {
    try {
        const data = await teacherDB.findOneAndUpdate({
            _id: teacherData._id
        }, teacherData, {
            upsert: true
        });
        return {
            ok: 1,
            data
        }
    }catch(err) {
        throw new Error(err.message);
    }
}

async function deleteStudent(studentData) {
    try {
        const data = await studentDB.findOneAndDelete({
            _id: studentData._id
        }, studentData);
        return {
            ok: 1,
            data
        }
    }catch(err) {
        throw new Error(err.message);
    }
}

async function deleteTeacher(teacherData) {
    try {
        const data = await teacherDB.findOneAndDelete({
            _id: teacherData._id
        }, teacherData);
        return {
            ok: 1,
            data
        }
    }catch(err) {
        throw new Error(err.message);
    }
}

async function findStudent(filterObj) {
    return await studentDB.find(filterObj);
}

async function findTeacher(filterObj) {
    return await teacherDB.find(filterObj);
}



module.exports = {
    addTeacher,
    addStudent,
    getAllStudent,
    getAllTeacher,
    updateStudent,
    updateTeacher,
    deleteStudent,
    deleteTeacher,
    findStudent,
    findTeacher
}