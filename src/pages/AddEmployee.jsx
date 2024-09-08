import { Box, Heading, TextField } from '@radix-ui/themes'
import React from 'react'
import * as Form from '@radix-ui/react-form'

const AddEmployee = () => {
  return (
    <Box width="100%">
      <Heading size="6" mb="6" mt="4" align="center" color="violet">
        Add Employee
      </Heading>
      <Form.Root>
        <Form.Field>
          <Form.Label htmlFor="first_name">First Name</Form.Label>
          <Form.Control asChild>
            <TextField.Root variant="primary" type='email' required />
            </Form.Control>
        </Form.Field>
      </Form.Root>
    </Box>
  )
}

export default AddEmployee