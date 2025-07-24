'use client';
import React from 'react';
import { CurrentSessProgCard } from '@/page/tracking-page';
import Link from 'next/link';

export default function Page ()  {
  return (
    <div >
      
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: '#fff',
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}>
        <Link href="http://localhost:3000/chess-hub/create-match"
          style={{
    
          }}>Back</Link>
        <Link href="#"
        style={{backgroundColor:'#3662e3',
            color:'white',
            borderRadius:'5px',
            width:'200px',
            height:"40px",
            padding:'7px',
            textAlign:'center'}}>+ Start Another Session</Link>
      </div>

      <div style={{ marginTop: '80px', display:'flex',justifyContent:'center' }}>
        <CurrentSessProgCard />
      </div>
    </div>
  );
};


