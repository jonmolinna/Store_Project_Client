import React, { useState } from "react"
import { validatorFn } from "./types"

export function useForm<T> (initialForm: T, validate: validatorFn<T>)  {
    const [form, setForm] = useState<T>(initialForm)
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
    const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: value
        }))

        if (touched[name as keyof T]) {
            const validationErrors = validate({...form, [name]: value }) 
            setErrors(prev => ({
                ...prev,
                [name]: validationErrors[name as keyof T]
            }))
        }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;

        setTouched(prev => ({
            ...prev,
            [name]: true
        }))

        const validateErrors = validate(form)

        setErrors(prev => ({
            ...prev,
            [name]: validateErrors[name as keyof T]
        }))
    }

   const handleSubmit = (handleSendData: (form: T) => void) => (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validate(form);
    setErrors(validationErrors);

    const allTouched = Object.keys(initialForm as Object).reduce((acc, key) => {
        acc[key as keyof T] = true;
        return acc;
    }, {} as Partial<Record<keyof T, boolean>>)

    setTouched(allTouched);

    if (Object.keys(validationErrors).length === 0) {
        handleSendData(form);
      }
   }

    return {
        form,
        errors,
        handleChange,
        handleSubmit,
        handleBlur
    }
}


// const handleSendData = (data: FormType) => {
//     console.log("Datos listos para enviar:", data);
// };

// const {handleSubmit} = useForm()

// <form onSubmit={(e) => handleSubmit(e, handleSendData)}>


// ------> hook
// const handleSubmit = (e: React.FormEvent, onValid: (form: T) => void) => {
//     e.preventDefault();
//     onValid(form);
// };

