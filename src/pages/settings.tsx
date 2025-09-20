import React from 'react';
import Layout from '../components/Layout';
import type { GetStaticProps } from 'next';

// This is the simplified, self-contained input field.
const InputField = ({ label, value, type = 'text' }) => (
  <div>
    <label style={{
      display: 'block',
      color: '#a0a0c0',
      marginBottom: '8px',
      fontSize: '0.9rem',
      textAlign: 'left',
    }}>
      {label}
    </label>
    <input
      type={type}
      defaultValue={value}
      disabled
      style={{
        width: '100%',
        padding: '12px',
        backgroundColor: '#303050',
        border: '1px solid #404060',
        borderRadius: '8px',
        color: 'white',
        fontSize: '1rem',
        boxSizing: 'border-box',
      }}
    />
  </div>
);

const SettingsPage = () => {
  return (
    <Layout>
      <div className="dashboard-header">
        <h1 className="header-title">Settings</h1>
      </div>

      {/* This is the form card itself, now with more width for the new fields. */}
      <div style={{
        backgroundColor: '#2a2a4a',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        width: '100%',
        maxWidth: '800px', // Increased width
        margin: '0 auto',
        color: '#c0c0d0',
        fontFamily: 'sans-serif',
      }}>
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '30px' }}>
          Profile Information
        </h2>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* The grid now neatly arranges all 8 profile fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <InputField label="Full Name" value="Raewyn Brandon" />
            <InputField label="Username" value="@brandon" />
            <InputField label="Email Address" value="raewyn.brandon@example.com" type="email" />
            <InputField label="Joined Date" value="September 20, 2025" />
            <InputField label="Account Type" value="Personal" />
            <InputField label="Base Currency" value="USD" />
            <InputField label="KYC Status" value="Verified" />
            <InputField label="Tax ID Number" value="XX-XXX-XXXX" />
          </div>

          <hr style={{ border: 'none', borderColor: '#404060', borderWidth: '1px 0 0 0', margin: '20px 0' }} />
          
          <InputField label="Password" value="••••••••••••" type="password" />

          <button
            disabled
            style={{
              marginTop: '20px',
              padding: '12px',
              backgroundColor: '#6c63ff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'not-allowed',
              opacity: 0.5,
            }}
          >
            Save Changes
          </button>
        </form>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default SettingsPage;