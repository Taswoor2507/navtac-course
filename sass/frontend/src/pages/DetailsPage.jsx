import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios  from "axios";
export default function DetailsPage() {
     const [user , setUser] =  useState(null)
     const [loading , setLoading] =  useState(true);
     const {id} =  useParams();


  async function getUser(){
    try {
          const res = await axios.get(`http://localhost:7070/api/v1/owner/get-user/${id}`)
          if(res?.data?.data){
            setUser(res?.data?.data)
          }
    } catch (error) {
        console.log(error , "error fetching user")
    }finally{
        setLoading(false)
    }
  }


  useEffect(()=>{
    getUser()
  } , [id])



  {loading &&   "Loading . ...  "}




  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          User Details
        </h1>
        {
            user && <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Full Name:</span>
            <span className="text-gray-900">{user.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Email:</span>
            <span className="text-gray-900">{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Phone:</span>
            <span className="text-gray-900">{user.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Role:</span>
            <span className="text-gray-900">{user.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Plan:</span>
            <span className="text-gray-900 capitalize">{user.plan}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Account Verified:</span>
            <span
              className={`font-semibold ${
                user.isVerify ? "text-green-600" : "text-red-500"
              }`}
            >
              {user.isVerify ? "Yes" : "No"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Blocked:</span>
            <span
              className={`font-semibold ${
                user.isBlocked ? "text-red-600" : "text-green-600"
              }`}
            >
              {user.isBlocked ? "Yes" : "No"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Deleted:</span>
            <span
              className={`font-semibold ${
                user.isDeleted ? "text-red-600" : "text-green-600"
              }`}
            >
              {user.isDeleted ? "Yes" : "No"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Created At:</span>
            <span className="text-gray-900">
              {new Date(user.createdAt).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">
              Teacher Join Date:
            </span>
            <span className="text-gray-900">
              {new Date(user.teacherFields.joinDate).toLocaleDateString()}
            </span>
          </div>
        </div>
        }
      </div>
    </div>
  );
}
