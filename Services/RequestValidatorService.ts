namespace RequestValidators
{
    export class RequestValidatorService
    {
        public checkEmail(email: string): boolean
        {
            const regex: RegExp = new RegExp("//^[A-Za-z0-9]*@[A-Za-z0-9]*.[a-z]*$//");

            if(regex.exec(email)===null)
                return false;

            return true;
        }
        public checkPassword(password: string): boolean
        {
            const regex: RegExp = new RegExp("//^(?=.*[A-Za-z])(?=.*[@$!%*?&])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$//");

            if(regex.exec(password)===null)
                return false;

            return true;
        }

    }

}

export default RequestValidators;