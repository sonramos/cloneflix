"use client"

import Input from "@/app/_components/Input";
import Image from "next/image";
import { useCallback, useState } from "react";

function Auth() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    return (
        <div className="relative h-full bg-[url('/img/background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="bg-black h-full w-full lg:bg-opacity-50">
                <nav className="px-12 py-5 text-white">
                <Image 
                    src="/img/logo.png" 
                    alt="logo" 
                    width={48} 
                    height={48} 
                    className="h-12 w-auto"
                />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                            <Input
                                id="username"
                                label="Username"
                                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setUserName(ev.target.value)}
                                value={userName}
                            />
                            )}
                            <Input
                                id="email"
                                label="Email"
                                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setEmail(ev.target.value)}
                                value={email}
                                type="email"
                            />
                            <Input
                                id="password"
                                label="Password"
                                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)}
                                value={password}
                                type="password"
                            />
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {variant === 'login' ? 'Login' : 'Register'}
                        </button>
                        <p className="text-neutral-500 mt-8">
                            {variant === 'login' ? 'First time using Cloneflix?' : 'Already have an account?'}
                            <span
                                onClick={toggleVariant} 
                                className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an account' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;