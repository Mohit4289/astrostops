import { FaEnvelope, FaLock, FaUsers } from 'react-icons/fa';

export default function SignUp() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-32 bg-gray-900">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1532339142463-fd0a8979791a?auto=format&fit=crop&q=80")',
              }}
            />
            <div className="relative h-full flex items-center justify-center">
              <h1 className="text-3xl font-bold text-white">Create Account</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    className="pl-10 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    className="pl-10 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="password"
                    className="pl-10 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to the{' '}
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Create Account
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
