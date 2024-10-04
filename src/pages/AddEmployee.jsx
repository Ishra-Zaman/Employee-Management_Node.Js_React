import React from 'react'
import { Input } from '@nextui-org/react'

const AddEmployee = () => {
  return (
    <div className='w-full'>
      <h2 className='text-2xl mb-6 mt-4 text-center text-primary'>
        Add Employee
      </h2>
      <form>
        <Input type='text' label="First Name" placeholder='Enter your first name' isRequired />
      </form>
    </div>
  )
}

export default AddEmployee