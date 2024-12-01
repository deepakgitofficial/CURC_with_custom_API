import { useId } from "react"
import { Form } from "react-router-dom";

export const contactFormData= async({request})=>{
  try {
    const formRes= await request.formData();
    const formObj= Object.fromEntries(formRes);
    console.log(formObj);
    return formObj; 

  } catch (error) {
    console.log(error, 'form data error')
  }
}

const Contact = () => {
  const fId = useId(); 
  return (
    <div className="form-section">
      <h1 className="text-center">Contact Page</h1>
      <div className="contact-form">
        <Form method="POST" action="/contact" >
          <div className="input-group">
            <label htmlFor= {fId+ 'name'} className="font-medium leading-6 text-gray-900">User name</label>
            <input type="text" id={fId + 'name'} name="username" />
          </div>
          <div className="input-group">
            <label htmlFor={fId +'email'} className="font-medium leading-6 text-gray-900">Email</label>
            <input type="email" id={fId +'email'} name="email"/>
          </div>
          <div className="col-span-full">
            <label htmlFor={fId + 'message'} className="block text-sm font-medium leading-6 text-gray-900">
              Your Message
            </label>
            <div className="mt-2">
              <textarea
                id={fId + 'message'}
                name="message"
                rows={3}
                className="block w-full d border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200"
                defaultValue={''}
              />
            </div > 
            <div className="mt-5">
              <input className="bg-green-400 rounded-full" type="submit" name="submit" value='Sent' />
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Contact