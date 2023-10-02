import {z} from 'zod'

export const SendMailFormSchema = z.object({
    name: z
      .string()
      .trim()
      .min(2, 'O nome precisa conter pelo menos 2 caracteres')
      .max(20, 'O máximo de caracteres suportado pelo nome são 20')
      .nonempty('O campo não pode ser enviado vazio')
      ,
    email: z
      .string()
      .email('Utilize um formato de email válido: exemplo@gmail.com'),
    message: z
      .string()
      .trim()
      .min(3, 'A mensagem precisa conter pelo menos 3 caracteres')
      .nonempty('O campo não pode ser enviado vazio'),
  })