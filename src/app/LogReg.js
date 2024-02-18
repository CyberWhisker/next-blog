'use client';
import { useState } from 'react';
import {Card} from 'antd';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegistrationForm';
const LogReg = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);
    const handleToggleForm = () => {
      setShowLoginForm(prevState => !prevState);
    }
    return (
        <div className="mr-40 mt-20">
          <Card
            title={showLoginForm ? 'Login Form' : 'Register Form'}
            bordered={false}
            style={{
              width: 400,
            }}
          >
            {showLoginForm ? <LoginForm onToggleForm={handleToggleForm}/> : <RegisterForm onToggleForm={handleToggleForm}/>}
          </Card>
        </div>

    )
}

export default LogReg;