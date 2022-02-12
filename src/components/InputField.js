import { ErrorMessage, useField } from 'formik';
import React from 'react'

const InputField = (props) => {
    const [field, meta] = useField(props);
    return (
        <div className='mb-4'>
            <input className="block text-gray-500 pl-8 font-semibold w-full bg-gray-100 p-2 rounded-md focus:outline-none border focus:bg-gray-200 focus:shadow-inner" {...field} {...props}/>
            <ErrorMessage className='text-red-400 font-semibold ml-5' name={field.name} component='div'/>
        </div>
    )
}

export default InputField;
