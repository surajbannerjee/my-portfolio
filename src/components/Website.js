"use client"
import React from 'react'
import MainContent from "@/components/MainContant/MainContant";
import SideBarInfoBox from "@/components/SideBarInfoBox/SideBarInfoBox";
import Navbar from './Navbar';

const Website = () => {
    return (
        <div>
            <SideBarInfoBox />
            <MainContent />
            <Navbar />
        </div>
    )
}

export default Website