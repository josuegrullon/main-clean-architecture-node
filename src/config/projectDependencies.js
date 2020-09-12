import InMemoryDatabaseServices from '../frameworks/persistance/InMemory/InMemoryDatabaseServices';
import UniversityCrmServices from '../frameworks/externalServices/UniversityCrmServices';

export default (() => {
    return {
        DatabaseService: new InMemoryDatabaseServices(),
        CrmServices: new UniversityCrmServices()
    };
})();
