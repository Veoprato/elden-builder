import { useQuery } from '@apollo/client';
import { GET_CLASSES } from '../utils/queries.js';

const useClasses = () => {
    const { error, loading, data } = useQuery(GET_CLASSES);
    return { error, loading, data };
};

export default useClasses