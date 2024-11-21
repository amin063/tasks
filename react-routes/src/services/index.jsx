import api from "../api"

export const supplierMethods = {
    getSuppliers: async () => {
        try {
            const res = await api.get("/suppliers")
            return res.data;

        } catch (error) {
            console.log(error);
        }
    },
    getDetails: async (id) => {
        try {
            const res = await api.get(`/suppliers/${id}`)
            console.log(res.data);

            return res.data;
        } catch (error) {
            console.error();
        }
    },
    addSuppliers: async (supplierData) => {
        api.post("/suppliers", supplierData, {
            headers: { 'Content-Type': 'application/json' }
        })
    },
    deleteSuppliers: async (id) => {
        await api.delete(`/suppliers/${id}`)
    }
}

export default supplierMethods;