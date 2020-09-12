import { Router } from 'express';
import StudentController from '../../../controllers/students/StudentController';

// address - api/students
// load dependencies
const studentsRouter = (dependencies) => {
    const router = Router();

    // load controller with dependencies
    const controller = StudentController(dependencies);

    router.route('/')
        .get(controller.getAllStudents)
        .post(controller.addNewStudent);
    router.route('/:studentId')
        .get(controller.getStudent);
    router.route('/enrollment/:studentId')
        .post(controller.addEnrollment);
    return router;
};


export default studentsRouter;
