import LoginForm from "../../components/forms/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e0045] px-6">

      {/* Container */}
      <div className="w-full max-w-5xl bg-[#341d52] backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden flex">

        {/* LEFT SIDE - SVG / IMAGE */}
        <div className="w-full hidden md:flex items-center justify-center relative">

          {/* Floating glow circles */}
          <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

     <svg
    viewBox="0 0 800 600"
    className="w-[90%]"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* background card */}
    <rect x="200" y="120" width="400" height="360" rx="20" fill="#ffffff" opacity="0.15"/>

    {/* screen */}
    <rect x="250" y="160" width="300" height="260" rx="15" fill="#ffffff" opacity="0.25"/>

    {/* header line */}
    <rect x="270" y="190" width="260" height="20" rx="5" fill="#93C5FD" opacity="0.8"/>

    {/* input fields */}
    <rect x="270" y="230" width="260" height="35" rx="8" fill="#E0F2FE" opacity="0.9"/>
    <rect x="270" y="280" width="260" height="35" rx="8" fill="#E0F2FE" opacity="0.9"/>

    {/* button */}
    <rect x="270" y="340" width="260" height="40" rx="10" fill="#3B82F6"/>

    {/* user icon */}
    <circle cx="400" cy="100" r="40" fill="#60A5FA"/>
    <circle cx="400" cy="100" r="18" fill="#ffffff" opacity="0.8"/>

    {/* lock icon */}
    <rect x="520" y="220" width="60" height="60" rx="12" fill="#A78BFA"/>
    <rect x="535" y="200" width="30" height="25" rx="10" fill="#A78BFA"/>

    {/* small dots animation feel */}
    <circle cx="220" cy="140" r="6" fill="#60A5FA">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
    </circle>

    <circle cx="580" cy="420" r="6" fill="#A78BFA">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite"/>
    </circle>

  </svg>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="w-full p-10">
          <LoginForm />
        </div>

      </div>
    </div>
  );
};

export default LoginPage;