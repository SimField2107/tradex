import React from 'react';
import type { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { User, Shield } from 'lucide-react';

const InputField: React.FC<{ label: string; value: string; type?: string }> = ({ label, value, type = 'text' }) => (
  <div>
    <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
    <input type={type} defaultValue={value} disabled className="w-full bg-gray-900/50 border border-gray-700 rounded-md px-4 py-2 text-white" />
  </div>
);

const SettingsPage = () => {
  return (
    <Layout>
      <div className="dashboard-header"><h1 className="header-title">Settings</h1></div>
      <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-lg p-8 shadow-lg">
        <div className="mb-8">
          <div className="flex items-center mb-4"><User className="text-indigo-400 mr-3" size={22} /><h2 className="text-xl font-semibold text-white">Profile Information</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Full Name" value="Raewyn Brandon" />
            <InputField label="Username" value="@brandon" />
            <InputField label="Email Address" value="raewyn.brandon@example.com" type="email" />
            <InputField label="Joined Date" value="September 20, 2025" />
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="mb-8">
          <div className="flex items-center mb-4"><Shield className="text-indigo-400 mr-3" size={22} /><h2 className="text-xl font-semibold text-white">Security</h2></div>
          <div className="space-y-6">
            <InputField label="Password" value="••••••••••••" type="password" />
            <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-md"><p className="text-gray-300">Two-Factor Authentication (2FA)</p><span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400">Enabled</span></div>
          </div>
        </div>
        <div className="text-right mt-8"><button className="px-6 py-2 bg-indigo-600 text-white rounded-md font-semibold" disabled>Save Changes</button></div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => ({ props: {} });
export default SettingsPage;