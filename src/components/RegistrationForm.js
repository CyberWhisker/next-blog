'use client'
import { useAuth } from '@/hooks/auth';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import InputError from './InputError';
const RegisterForm = ({onToggleForm}) => {
    
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [errors, setErrors] = useState([])

    const submitForm = (values) => {
        const name = values.name
        const email = values.email
        const password = values.password
        const passwordConfirmation = values.passwordConfirmation
        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }
    return (
        <div>
            {/* Form Start Here */}
            <Form
                name="normal_register"
                className="register-form"
                onFinish={submitForm}
                >
                <Form.Item
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Name!',
                    },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                    ]}
                >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Password Required!',
                    },
                    {
                        min: 6,
                        message: 'Password must be at least 6 characters long.',
                    },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="passwordConfirmation"
                    rules={[
                    {
                        required: true,
                        message: 'Please Confirm Password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords do not match.');
                        },
                    }),
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Confirm Password"
                    />
                </Form.Item>

                <Form.Item>
                    <div className="text-center">
                    <Button type="primary" htmlType="submit" className="login-form-button w-full">
                    Register
                    </Button>
                    Or <a href="#" onClick={onToggleForm}>Login</a>

                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default RegisterForm;