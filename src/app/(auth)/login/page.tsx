import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <main className="p-8 mb-10 transition-all duration-500 ease-in-out">
      {/* Main Content */}
      <h1 className={`font-bold text-4xl`}>Hold your horses, tiger!</h1>
      <h3 className={`mb-4 text-xl font-bold`}>Love your excitement, though</h3>
      <p className={`mb-4 text-sm font-light`}>
        Logins and registrations are coming very soon!
      </p>
      {/*<form>*/}
      {/*    <label htmlFor="email">Email:</label>*/}
      {/*    <input id="email" name="email" type="email" required/>*/}
      {/*    <label htmlFor="password">Password:</label>*/}
      {/*    <input id="password" name="password" type="password" required/>*/}
      {/*    <button formAction={login}>Log in</button>*/}
      {/*    <button formAction={signup}>Sign up</button>*/}
      {/*</form>*/}
    </main>
  );
}
