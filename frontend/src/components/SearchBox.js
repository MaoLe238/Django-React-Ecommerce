import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function SearchBox() {

    const [keyword, setKeyword] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword){
            navigate(`/?keyword=${keyword}&page=1`)
        }else{
            navigate(navigate.pathname)
        }
    }

    return (
        <Form onSubmit={submitHandler} className='d-flex flex-row'>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
            >
            </Form.Control>
            &nbsp;&nbsp;&nbsp;
            <Button
                type='submit'
                variant='outline-success'
                className='p-2'
            > Submit
            </Button>
        </Form>

    )
}

export default SearchBox