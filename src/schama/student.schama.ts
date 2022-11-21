import { z, TypeOf } from 'zod';


export const stdentscama = z.object({   
    body: z.object({
      id: z.string({required_error: "Cannot be null" }).min(3),
      name: z.string({required_error: "Cannot be null" }).min(4),
      major:z.enum(["IT","IS","CS","SWE"],{required_error:"Cannot be null" }),
      Level:   z.number().min(1).max(8), 
      GPA: z.number().min(0).max(5)

    }),



  })

export type stdentscamatype = TypeOf<typeof stdentscama>['body'];
