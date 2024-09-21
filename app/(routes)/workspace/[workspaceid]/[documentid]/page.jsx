"use client";
import React from 'react'
import SideNav from './_components/SideNav'
import DocumentEditorSection from './_components/DocumentEditorSection';

function Workspace({params}) {
  return (
    <div>
      {/* Side Nav */}
      <div className=''>
         <SideNav params={params}/>
      </div>

      {/* Document*/}
      <div className='md:ml-72'>
        <DocumentEditorSection params={params}/>
      </div>
    </div>
  )
}

export default Workspace