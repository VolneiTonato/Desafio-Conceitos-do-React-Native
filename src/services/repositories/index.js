import { api} from './config'

const ApiRepository = {

    get: async () => {
        return await api.get('/repositories')
        
    },
    like: async (id) => {
        return await api.post(`/repositories/${id}/like`)
    }
}


export {ApiRepository}