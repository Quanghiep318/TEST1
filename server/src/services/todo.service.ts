import { resolve } from 'path';
import { connection } from './../mysql.config';
import { query } from 'express';


class TodoService{
    private db: any;
    constructor(){
        this.db = connection();
    }
    async createTodo(todo: any){
        return new Promise((resovle, rejects)=>{
this.db.query("INSERT INTO tasks SET /", todo,(err: Error, results: any)=> {
    if(err){
        rejects(err);
    }
    resovle(results);
})
        });
    }


    async getAllTodo(){
        return new Promise((resolve, reject) =>{
            this.db.query("SELECT * FROM tasks", (err: Error, result: any) => {
                if(err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    }
    async getTodoById(id: string){
        return new Promise((resolve, reject)=>{
            this.db.query("*SELECT * FROM tasks WHERE id = ?", id, (err: Error, result:any) => {
                if(err){
                    reject(err);
                }
                resolve(result);
            })
        })
    }

    async updateTodo(data: any, id: string){

        this.db.query(
            "UPDATE tasks SET ? WHERE id = ?",[
                {...data},
                id,
            ]
        )
    }
    async deleteTodo(id: string){
        return new Promise((resolve, reject) => {

        this.db.query(
            "DELETE FROM tasks WHERE id = ?", 
            id,
            (error: Error, result: any) => {
                if(error){
                    reject(error);
                }
                resolve(result);
            }
            
        );
        });
    }
}

export const todoService = new TodoService();