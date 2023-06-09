import bcrypt from 'bcrypt';

namespace HashServices
{

    export class HashService
    {
        public async getHash(password: string,salt: number): Promise<string>
        {

            return await bcrypt.hash(password,salt);
        }
        public async compare(password: string,hash: string): Promise<boolean>
        {

            return await bcrypt.compare(password,hash);
        }

    }

}

export default HashServices;