namespace RequestValidators
{
    export class RequestValidatorService
    {
        public checkId(id: object): boolean
        {
            if(typeof id!=="object")
                return false;

            return true;
        }
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
        public checkName(name: string): boolean
        {
            const regex: RegExp = new RegExp("//^[A-Za-z0-9@$!%*?&]$//");

            if(regex.exec(name) === null)
                return false;
            
            return true;
        }
        public checkContent(content: string): boolean
        {
            const regex: RegExp = new RegExp("//(?=[^<>\/[[]])[a-zA-Z0-9]/");

            if(regex.exec(content)===null)
                return false;

            return true;
        }

    }

}

export default RequestValidators;