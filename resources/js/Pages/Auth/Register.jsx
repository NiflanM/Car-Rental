import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register" />

            {/* BACKGROUND */}
            <div className="min-h-screen flex items-center justify-center overflow-hidden relative
                bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100
                dark:from-[#050816] dark:via-[#070b1a] dark:to-[#0a1025]">

                {/* Glow Effects */}
                <div className="absolute w-[450px] h-[450px] bg-blue-600/20 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
                <div className="absolute w-[450px] h-[450px] bg-indigo-500/20 blur-[140px] rounded-full bottom-[-120px] right-[-120px]" />

                {/* CARD */}
                <div className="relative w-full max-w-8xl mx-6 grid md:grid-cols-2
                    rounded-3xl overflow-hidden shadow-2xl
                    border border-white/10 dark:border-white/5">

                    {/* LEFT SIDE */}
                    <div className="hidden md:flex flex-col justify-center p-9
                        bg-gradient-to-br from-[#0b1b3a] via-[#0a2a5a] to-[#0d3b8a]
                        text-white">

                        <h1 className="text-3xl font-extrabold leading-tight">
                            Join Luxury <br />
                            <span className="text-blue-300">
                                Driving Experience 🚗
                            </span>
                        </h1>

                        <p className="mt-4 text-blue-100/80 text-base leading-relaxed">
                            Create your account and unlock premium cars,
                            instant bookings, and a world-class rental experience.
                        </p>

                        <div className="mt-8 space-y-2 text-blue-100/70 text-sm">
                            <p>✔ Instant car booking system</p>
                            <p>✔ Premium luxury fleet access</p>
                            <p>✔ Secure & fast platform</p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="p-8 md:p-10 bg-white/80 dark:bg-[#0a1025]/80 backdrop-blur-xl">

                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                            Create Account
                        </h2>

                        <p className="text-sm text-slate-500 dark:text-blue-200/60 mt-1 mb-5">
                            Join and start your luxury journey
                        </p>

                        <form onSubmit={submit} className="space-y-4">

                            {/* NAME */}
                            <div>
                                <InputLabel htmlFor="name" value="Name" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    autoComplete="name"
                                    isFocused
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-xl py-2.5
                                    border-slate-200 dark:border-blue-900/40
                                    dark:bg-[#0b1530] dark:text-white
                                    focus:ring-2 focus:ring-blue-500"
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            {/* EMAIL */}
                            <div>
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-xl py-2.5
                                    border-slate-200 dark:border-blue-900/40
                                    dark:bg-[#0b1530] dark:text-white
                                    focus:ring-2 focus:ring-blue-500"
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
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-xl py-2.5
                                    border-slate-200 dark:border-blue-900/40
                                    dark:bg-[#0b1530] dark:text-white
                                    focus:ring-2 focus:ring-blue-500"
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            {/* CONFIRM PASSWORD */}
                            <div>
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData('password_confirmation', e.target.value)
                                    }
                                    required
                                    className="mt-1 block w-full rounded-xl py-2.5
                                    border-slate-200 dark:border-blue-900/40
                                    dark:bg-[#0b1530] dark:text-white
                                    focus:ring-2 focus:ring-blue-500"
                                />
                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            {/* BUTTON */}
                            <PrimaryButton
                                disabled={processing}
                                className="w-full py-2.5 rounded-xl
                                bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800
                                text-white text-base font-semibold shadow-lg
                                hover:scale-[1.02] transition"
                            >
                                Register
                            </PrimaryButton>
                        </form>

                        {/* LOGIN LINK */}
                        <p className="text-center text-sm text-slate-500 dark:text-blue-200/60 mt-6">
                            Already have an account?{" "}
                            <Link
                                href={route('login')}
                                className="text-blue-500 font-semibold hover:underline"
                            >
                                Sign in
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
}