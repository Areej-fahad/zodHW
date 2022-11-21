import { z, TypeOf } from 'zod';


export const movieschama = z.object({   
    body: z.object({
      id: z.string({required_error: "Cannot be null" }).min(3),
      name: z.string({required_error: "Cannot be null" }).min(4),
      genre:z.enum(["Drama","Action","Comedy"],{required_error:"Cannot be null" }),
      rating:   z.number().min(1).max(5), 
      duration: z.number().min(60)

    }),



  })

export type movieschamatype = TypeOf<typeof movieschama>['body'];
