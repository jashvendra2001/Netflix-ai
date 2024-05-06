 export const validateFields=(email,password)=>
{
    const validEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!validEmail)return "Email Id is not correct "
    if(!validPassword)return "Password is not correct "

    return null;
}