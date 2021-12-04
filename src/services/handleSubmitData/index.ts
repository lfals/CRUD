import * as Yup from 'yup'

    export default async function addContatToList(data: any){
        console.log("yup data",data);

        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome é um campo obrigatório'),
                phone: Yup.number().typeError('Número invalido').min(9, 'Número invalido').required(),
                email: Yup.string().email('O campo deve ser preenchido com um email'),
            });

            await schema.validate(data, {
                abortEarly: false,
            })

            console.log(data);
            
        } catch(err) {
            var validationErrors: string[] = [];
            if (err instanceof Yup.ValidationError) {
              err.inner.forEach(error => {
            console.log(error);

                validationErrors.push(error.message);
            });
            return validationErrors
            }
        }

    }