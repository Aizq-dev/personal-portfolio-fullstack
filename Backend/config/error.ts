
export const setError= (status:number, message: string)=>{
    const error = new Error as Error &{status?: number};
    error.status = status;
    error.message = message;
    return error;
};