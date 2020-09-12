import Student from '../../entities/Student';

export default (StudentRepository) => {

    async function Execute(firstName, lastName, email) {
        return StudentRepository.getAll();
    }

    return {
        Execute
    };
};
