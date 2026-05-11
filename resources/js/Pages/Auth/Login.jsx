import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Log in" />

            {/* BACKGROUND */}
            <div className="min-h-screen relative flex items-center justify-center overflow-hidden
                bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100
                dark:from-[#050816] dark:via-[#070b1a] dark:to-[#0a1025]">

                {/* Glow blobs (blue theme) */}
                <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full top-[-120px] left-[-120px]"></div>
                <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full bottom-[-120px] right-[-120px]"></div>

                {/* CARD */}
               <div className="relative w-full max-w-9xl mx-6 grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/5 min-h-[520px] max-h-[600px]">

                    {/* LEFT SIDE */}
                    <div className="hidden md:flex flex-col justify-center p-12
                        bg-gradient-to-br from-[#0b1b3a] via-[#0a2a5a] to-[#0d3b8a]
                        text-white">

                        <h1 className="text-5xl font-extrabold leading-tight">
                            Welcome Back <br />
                            <span className="text-blue-300">Luxury Driver 🚗</span>
                        </h1>

                        <p className="mt-6 text-blue-100/80 text-lg leading-relaxed">
                            Access your dashboard, manage bookings, and enjoy a premium driving experience powered by elegance and speed.
                        </p>

                        <div className="mt-10 space-y-3 text-blue-100/70 text-sm">
                            <p>✔ Premium vehicle access</p>
                            <p>✔ Instant booking system</p>
                            <p>✔ Secure luxury dashboard</p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="p-10 md:p-14
                        bg-white/80 dark:bg-[#0a1025]/80 backdrop-blur-xl">

                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Sign In
                        </h2>

                        <p className="text-sm text-slate-500 dark:text-blue-200/60 mt-1 mb-6">
                            Enter your credentials to continue
                        </p>

                        {status && (
                            <div className="mb-4 text-sm font-medium text-blue-500">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-5">

                            {/* EMAIL */}
                            <div>
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full rounded-xl
                                    border-slate-200 dark:border-blue-900/40
                                    dark:bg-[#0b1530] dark:text-white
                                    focus:ring-2 focus:ring-blue-500"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <InputLabel htmlFor="password" value="Password" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full rounded-xl
                                    border-slate-200 dark:border-blue-900/40
                                    dark:bg-[#0b1530] dark:text-white
                                    focus:ring-2 focus:ring-blue-500"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            {/* OPTIONS */}
                            <div className="flex items-center justify-between">

                                <label className="flex items-center gap-2">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    <span className="text-sm text-slate-600 dark:text-blue-200/70">
                                        Remember me
                                    </span>
                                </label>

                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-sm text-blue-500 hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </div>

                            {/* BUTTON */}
                            <PrimaryButton
                                className="w-full py-3 rounded-xl
                                bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800
                                text-white text-lg font-semibold shadow-lg
                                hover:scale-[1.02] transition"
                                disabled={processing}
                            >
                                Log in
                            </PrimaryButton>

                        </form>

                        <p className="text-center text-sm text-slate-500 dark:text-blue-200/60 mt-8">
                            Don’t have an account?{" "}
                            <Link href={route('register')} className="text-blue-500 font-semibold hover:underline">
                                Create account
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
}