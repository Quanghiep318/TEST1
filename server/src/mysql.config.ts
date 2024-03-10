import  mysql2 from "mysql2";

export const connection = () => {
    try{
        const createConnection  = mysql2.createConnection({
            host: "localhost",
            user: "root",
            password: "3108",
            database: "TEST",
            port: 3306,
        });

        if (createConnection){
            console.log("ket noi thanh cong");
        }
        return createConnection;

    } catch (error) {
        throw new Error(error as any);
    }
};