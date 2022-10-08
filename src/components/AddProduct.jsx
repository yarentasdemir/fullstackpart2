
import { Button, Checkbox, Col, Form, Input, message, Row, Select } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const { Option } = Select

function AddProduct() {

    const [categories, setCategories] = useState([])
    const [suppliers, setSuppliers] = useState([])

    const [form] = Form.useForm();

    useEffect(() => {

        
        axios.get(`/categories`)
         .then(res => {
            setCategories(res.data)

         })

              
         axios.get('/suppliers')
         .then(res => {
            setSuppliers(res.data)

         })
   
    }, [])
    
    const submit = (values) => {

        axios.post('products', values)
        .then(res => {
            form.resetFields();
            message.success('Success!!');
        })
    }
    
  return ( <>
 <Form
            onFinish={submit}
            form={form} 
        >

        <Row gutter={24}>
            <Col span={12}>

                <Form.Item
                name='categoriesId'
                label='Categories'
                >
                <Select
                defaultValue='Lütfen bir kategori seçiniz '
                >
                    {
                 categories.map((item) =>{
                    return <Option
                     key={item.id}
                      value={item.id}></Option>
                 })     

                    }
                </Select>
                </Form.Item>
               
            </Col>

            <Col span={12}>

<Form.Item
name='supplierId'
label='Supplier'
>
<Select
defaultValue='Lütfen bir tedarikci seçiniz '
>
    {
 suppliers.map((item) =>{
    return <Option 
    key={item.id}
     value={item.companyName}></Option>
 })     

    }
</Select>
</Form.Item>

</Col>

        </Row>

        <Row gutter={24}>
            <Col span={12}>
                <Form.Item
                 label='Product Name'
                 name='productName'
                >
                <Input/>
                </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                 label='Unit Price'
                 name='unitPrice'
                >
                <Input/>
                </Form.Item>
            </Col>
            <Row>
                <Col>
                <Form.Item
                name='discontiuned'
                valuePropName='checked'
                
                >
                    <Checkbox>Discontiuned</Checkbox>
                </Form.Item>
                </Col>

            </Row>

        </Row>

        <Button type="primary" htmlType="submit">Add</Button>
    </Form>
  
  </>
    
  )
}

export default AddProduct


//AndDesign da Form elemnti ile sarılır.
//Formik de ise Formik elementi ile sarılır.