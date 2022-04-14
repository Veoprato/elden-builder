import { useQuery } from '@apollo/client';
import { GET_BUILDS } from '../utils/queries.js';

const useBuilds = () => {
    const { error, loading, data } = useQuery(GET_BUILDS);
    return { error, loading, data };
};

export default useBuilds