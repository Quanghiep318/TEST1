

import { Request, Response } from "express";
import { todoService } from "../services/todo.service";
class TodoController {
    /** create */
 async  createTodo(req: Request, res: Response){
    try {
        await todoService.createTodo(req.body);
       res.status(201).json({
        message: "tao moi thanh cong",
     });
    } catch(error: any){
        res.status(500).json({
            message: error.message,
        });
    }
    
 }

async getAll(req: Request, res: Response){
    try{
        const result = await todoService.getAllTodo();
        res.status(200).json(result);
    } catch(error: any ){
        res.status(500).json({
            message: error.message,
        });
    }
}

async getOne(req: Request, res: Response){
    try{
        const {id} = req.params
        const result: any = await todoService.getTodoById(id);
        if(result.length === 0 ){
            return res.status(404).json({
                message: "Khong tim thay du lieu"
            })
        }
        res.status(200).json(result[0]);
    } catch(error){

        res.status(500).json({
            message: error,
        });
    }
}

async updateTodo(req: Request, res: Response){
    try{
        const {id} = req.params;
        await todoService.updateTodo(req.body, id);
        res.status(200).json({
            message: " cap nhat ok",
        })
    } catch(error){
        res.status(500).json({
            message: error,
        })
    };
    
}
async deleteTodo(req: Request, res: Response){
    try{
        const {id} = req.params;
        await todoService.deleteTodo(id);
        res.status(200).json({
            message: " xoa ok",
        });

    } catch(error){
        res.status(500).json({
            message: error,
            
        })

    }
}

}

 export const todoController = new TodoController();