import { useState } from 'react'
import reactLogo from './assets/react.svg'
import * as Yup from 'yup'
import './App.css'
import { useFormik } from 'formik';

const App = () => {

  const formik=useFormik({
    initialValues :{
      name:'',
      email:'',
      password:''

    },

     validationSchema:Yup.object({
       name:Yup.string().max(15,"Must be 15 character or less")
       .required(`can't be empty`),
       email:Yup.string().email('Invalid email').required(`can't be empty`),
       password:Yup.string().min(8,'to shoort').required(`can't be empty`)
     }),

    onSubmit:(values)=>{
      console.log('submited')
    }
  });
  
  console.log(formik.errors)
   return(
    <form onSubmit={formik.handleSubmit}>
    <div className='input-field'>
      <input
       type='text'
       name='name'
       placeholder='enter name'
       value={formik.values.name}
      onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       className={`${formik.errors.name ? 'invalidInput':'validInput'}`}

       />
       { formik.touched.name &&  formik.errors.name && <p className='error'>{formik.errors.name}</p>}
    </div>

    <div className='input-field'>
      <input
       type='email'
       name='email'
       placeholder='enter email'
       value={formik.values.email}
     onBlur={formik.handleBlur}
       onChange={formik.handleChange}

       />
       { formik.touched.email && formik.errors.email && <p className='error'>{formik.errors.email}</p>}

    </div>

    <div className='input-field'>
      <input
       type='password'
       name='password'
       onChange={formik.handleChange}
       placeholder='enter Password' 
        onBlur={formik.handleBlur}
       value={formik.values.password}
       />
              {  formik.touched.password && formik.errors.password && <p className='error'>{formik.errors.password}</p>}

    </div>

    <button type='submit' >Submit</button>
    </form>
   )
 };

export default App;