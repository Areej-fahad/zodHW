import { z, TypeOf } from 'zod';
export const parkSchama = z.object({   
    body: z.object({
      id: z.string({required_error: "Cannot be null" }).min(3),
      name: z.string({required_error: "Cannot be null" }).min(4),
      type:z.enum(["rollercoaster","thriller","water"],{required_error:"Cannot be null" }),
      Tickets: z.number({required_error:"number is required !"}),
      price: z.number({required_error:"number is required"}),
    }),



  })

export type parkSchamatype = TypeOf<typeof parkSchama>['body'];
