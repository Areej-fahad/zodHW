import { z, TypeOf } from 'zod';


export const bankschama = z.object({   
    body: z.object({
      id: z.string({required_error: "Cannot be null" }).min(3),
      username: z.string({required_error: "Cannot be null" }).min(6),
       password : z .string()
  .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
  .regex(new RegExp(".*[a-z].*"), "One lowercase character")
  .regex(new RegExp(".*\\d.*"), "One number")
  .regex(
    new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
    "One special character"
  ),
  Balance:z.number().lte(5, { message: "this👏is👏too👏big" })


  })
})

export type bankschamatype = TypeOf<typeof bankschama>['body'];
