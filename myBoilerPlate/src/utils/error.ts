export const createError = (status:number, message:string) => {
	const err = new Error();
	err.status = status;
	err.message = message;
	return err;
  };